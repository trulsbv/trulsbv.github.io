import React, { useEffect, useRef } from "react";

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

export const Popover = ({
  isOpen,
  onClose,
  children,
  anchorRef,
  ...HTMLattributes
}: React.PropsWithChildren<
  PopoverProps & React.DialogHTMLAttributes<HTMLDialogElement>
>) => {
  const popoverRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) return;

    if (isOpen) {
      popover.showPopover();
    } else {
      popover.hidePopover();
    }
  }, [isOpen]);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) return;

    const handleBeforeToggle = (event: Event) => {
      // Only handle events for this specific popover
      if (event.target !== popover) return;

      const beforeToggleEvent = event as any;
      // If the popover is about to close and we want it to stay open, prevent it
      if (
        beforeToggleEvent.oldState === "open" &&
        beforeToggleEvent.newState === "closed" &&
        isOpen
      ) {
        event.preventDefault();
      }
    };

    const handleToggle = (event: Event) => {
      // Only handle events for this specific popover
      if (event.target !== popover) return;

      const toggleEvent = event as any;
      // If the popover closed and we didn't intend for it to close, sync the state
      if (
        toggleEvent.oldState === "open" &&
        toggleEvent.newState === "closed" &&
        isOpen
      ) {
        onClose();
      }
    };

    popover.addEventListener("beforetoggle", handleBeforeToggle);
    popover.addEventListener("toggle", handleToggle);

    return () => {
      popover.removeEventListener("beforetoggle", handleBeforeToggle);
      popover.removeEventListener("toggle", handleToggle);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={popoverRef}
      popover="auto"
      onClick={handleBackdropClick}
      {...HTMLattributes}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </dialog>
  );
};

export default Popover;
