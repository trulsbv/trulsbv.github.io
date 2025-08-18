import React, { useEffect, useRef } from "react";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  children: React.ReactNode;
};

export const Popover = ({
  isOpen,
  onClose,
  children,
  id,
}: React.PropsWithChildren<PopoverProps>) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) return;

    const handleToggle = (event: ToggleEvent) => {
      if (event.newState === "open" && !isOpen) {
        event.preventDefault();
      }
    };

    popover.addEventListener("beforetoggle", handleToggle as any);
    return () =>
      popover.removeEventListener("beforetoggle", handleToggle as any);
  }, [isOpen, onClose]);

  useEffect(() => {
    const popover = popoverRef.current;

    if (!popover || isOpen) {
      return;
    }

    popover.hidePopover();
  }, [isOpen]);

  return (
    <div ref={popoverRef} popover="manual" role="dialog" id={id}>
      {children}
    </div>
  );
};

export default Popover;
