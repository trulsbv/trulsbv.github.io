import React, { useEffect, useRef } from "react";
import styled from "styled-components";

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
  anchorId: string;
  placement: PopoverPlacement;
};

/**
 * Requires the following attributes to be set on the trigger element:
 * - popoverTarget={id}
 * - aria-haspopup="dialog"
 * - aria-expanded={isOpen}
 * - aria-controls={id}
 * - anchor-name: --{anchorId} (if anchorId is provided)
 */
export const Popover = ({
  isOpen,
  onClose,
  children,
  id,
  anchorId,
  placement,
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
    <StyledPopover
      ref={popoverRef}
      popover="manual"
      id={id}
      placement={placement}
      anchorId={anchorId}
    >
      {children}
    </StyledPopover>
  );
};

export default Popover;

// PopoverTrigger component for setting anchor-name and ARIA attributes
export type PopoverTriggerProps = {
  id: string;
  anchorId: string;
  isOpen: boolean;
  children: React.ReactElement;
};

export const PopoverTrigger = ({
  id,
  anchorId,
  isOpen,
  children,
}: PopoverTriggerProps) => {
  const childRef = useRef<HTMLElement>(null);

  // Set anchor-name on the child element
  useEffect(() => {
    if (childRef.current) {
      childRef.current.style.setProperty("anchor-name", `--${anchorId}`);
    }
  }, [anchorId]);

  // Create a wrapper that applies the anchor-name and renders the child
  const TriggerWrapper = styled.div`
    anchor-name: --${anchorId};
  `;

  return (
    <TriggerWrapper>
      {React.cloneElement(children, {
        popoverTarget: id,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": id,
        ref: childRef,
      } as any)}
    </TriggerWrapper>
  );
};

// Styled component for the popover with anchor positioning
const StyledPopover = styled.div<{
  placement: PopoverPlacement;
  anchorId: string;
}>`
  /* Anchor positioning based on placement */
  ${({ placement, anchorId }) => {
    const anchorName = `--${anchorId}`;

    switch (placement) {
      case "top":
        return `
          position-anchor: ${anchorName};
          bottom: anchor(top);
          justify-self: anchor-center;
        `;
      case "bottom":
        return `
          position-anchor: ${anchorName};
          top: anchor(bottom);
          justify-self: anchor-center;
        `;
      case "left":
        return `
          position-anchor: ${anchorName};
          right: anchor(left);
          align-self: anchor-center;
        `;
      case "right":
        return `
          position-anchor: ${anchorName};
          left: anchor(right);
          align-self: anchor-center;
        `;
      default:
        return `
          position-anchor: ${anchorName};
          justify-self: anchor-center;
        `;
    }
  }}

  /* Fallback positioning for browsers that don't support anchor positioning */
  @supports not (anchor-name: --test) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
