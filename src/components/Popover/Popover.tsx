import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export type PopoverTriggerProps = {
  isOpen: boolean;
  placement: PopoverPlacement;
  onClose: VoidFunction;
  id: string;
};

export const PopoverTrigger = (
  props: PopoverTriggerProps & {
    content: React.ReactElement;
    children: React.ReactElement;
  }
) => {
  const anchorId = `anchor-${props.id}`;
  const popoverId = `popover-${props.id}`;

  // Add anchor-name to the trigger element
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (triggerRef.current) {
      triggerRef.current.style.setProperty("anchor-name", `--${anchorId}`);
    }
  }, [anchorId]);

  // Merge existing props with required popover props
  const triggerProps = {
    ref: triggerRef,
    popoverTarget: popoverId,
    "aria-haspopup": "dialog" as const,
    "aria-expanded": props.isOpen,
    "aria-controls": popoverId,
  };

  // Merge with existing props from the child element
  const mergedProps = {
    ...(props.children.props as Record<string, any>),
    ...triggerProps,
  };

  return (
    <>
      {React.cloneElement(props.children, mergedProps)}
      <Popover
        id={popoverId}
        anchorId={anchorId}
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={props.placement}
      >
        {props.content}
      </Popover>
    </>
  );
};

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

  if (!isOpen) {
    return null;
  }

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
