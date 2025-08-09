import React, { useEffect, useMemo, useRef } from "react";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchorRef?: React.RefObject<HTMLElement>;
  placement?: PopoverPlacement;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
  role?: React.AriaRole;
};

/**
 * Popover powered by the native HTML Popover API
 * - Uses popover="auto" for built-in light-dismiss and ESC handling
 * - Imperatively controlled via isOpen prop
 * - Optionally positions relative to an anchor element
 */
export const Popover = ({
  isOpen,
  onClose,
  children,
  anchorRef,
  placement = "bottom",
  offset = 8,
  className,
  style,
  role = "dialog",
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const computePosition = useMemo(() => {
    return () => {
      const popover = popoverRef.current;
      const anchor = anchorRef?.current;
      if (!popover || !anchor) return;

      const anchorRect = anchor.getBoundingClientRect();
      const popRect = popover.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (placement) {
        case "top":
          top = anchorRect.top - popRect.height - offset;
          left = anchorRect.left + anchorRect.width / 2 - popRect.width / 2;
          break;
        case "bottom":
          top = anchorRect.bottom + offset;
          left = anchorRect.left + anchorRect.width / 2 - popRect.width / 2;
          break;
        case "left":
          top = anchorRect.top + anchorRect.height / 2 - popRect.height / 2;
          left = anchorRect.left - popRect.width - offset;
          break;
        case "right":
          top = anchorRect.top + anchorRect.height / 2 - popRect.height / 2;
          left = anchorRect.right + offset;
          break;
      }

      // Clamp within viewport with small padding
      const padding = 8;
      const maxLeft = window.innerWidth - popRect.width - padding;
      const maxTop = window.innerHeight - popRect.height - padding;
      left = Math.max(padding, Math.min(maxLeft, left));
      top = Math.max(padding, Math.min(maxTop, top));

      popover.style.top = `${top}px`;
      popover.style.left = `${left}px`;
    };
  }, [anchorRef, offset, placement]);

  // Open/close management
  useEffect(() => {
    const popover = popoverRef.current as any;
    if (!popover) return;
    if (isOpen) {
      // show first, then measure and position
      if (!popover.matches(":popover-open")) {
        popover.showPopover?.();
      }
      // Position on next frame so measurements are accurate
      requestAnimationFrame(() => {
        computePosition();
      });
    } else {
      if (popover.matches?.(":popover-open")) {
        popover.hidePopover?.();
      }
    }
  }, [isOpen, computePosition]);

  // Reposition on window resize/scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const handle = () => computePosition();
    window.addEventListener("resize", handle);
    window.addEventListener("scroll", handle, { passive: true });
    return () => {
      window.removeEventListener("resize", handle);
      window.removeEventListener("scroll", handle as any);
    };
  }, [isOpen, computePosition]);

  // Sync external state when user dismisses (light-dismiss / ESC)
  useEffect(() => {
    const popover = popoverRef.current as any;
    if (!popover) return;

    const onToggle = (e: any) => {
      // newState is "open" | "closed"
      if (e?.newState === "closed" && isOpen) {
        onClose();
      }
    };

    popover.addEventListener("toggle", onToggle);
    return () => popover.removeEventListener("toggle", onToggle);
  }, [isOpen, onClose]);

  return (
    <div
      ref={popoverRef}
      popover="auto"
      role={role}
      className={className}
      style={{
        position: "fixed",
        inset: "auto auto auto auto",
        border: "none",
        padding: 0,
        background: "transparent",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Popover;
