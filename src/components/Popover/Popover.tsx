import React, { useEffect, useRef } from "react";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforetoggle_event
 */
type ToggleEvent = Event & {
  newState: "open" | "closed";
  oldState: "open" | "closed";
};

const isToggleEvent = (event: Event): event is ToggleEvent =>
  "newState" in event && "oldState" in event;

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  children: React.ReactNode;
};

/**
 * Requires the following attributes to be set on the trigger element:
 * - popoverTarget={id}
 * - aria-haspopup="dialog"
 * - aria-expanded={isOpen}
 * - aria-controls={id}
 */
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

    const handleToggle = (event: Event) => {
      if (isToggleEvent(event) && event.newState === "open" && !isOpen) {
        event.preventDefault();
      }
    };

    popover.addEventListener("beforetoggle", handleToggle);
    return () => popover.removeEventListener("beforetoggle", handleToggle);
  }, [isOpen, onClose]);

  useEffect(() => {
    const popover = popoverRef.current;

    if (!popover || isOpen) {
      return;
    }

    popover.hidePopover();
  }, [isOpen]);

  // Add escape key handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div ref={popoverRef} popover="manual" role="dialog" id={id}>
      {children}
    </div>
  );
};

export default Popover;
