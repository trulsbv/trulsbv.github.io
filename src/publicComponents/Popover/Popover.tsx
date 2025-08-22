import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export type PopoverTriggerProps = {
  isOpen: boolean;
  placement: PopoverPlacement;
  onClose: VoidFunction;
  id: string;
};

export type PopoverTriggerRenderProps = {
  ref: React.Ref<HTMLButtonElement | null>;
  popoverTarget: string;
  "aria-haspopup": React.AriaAttributes["aria-haspopup"];
  "aria-expanded": React.AriaAttributes["aria-expanded"];
  "aria-controls": React.AriaAttributes["aria-controls"];
};

export const PopoverTrigger = (
  props: PopoverTriggerProps & {
    content: React.ReactElement;
    children: (props: PopoverTriggerRenderProps) => React.ReactElement;
  }
) => {
  const anchorId = `anchor-${props.id}`;
  const popoverId = `popover-${props.id}`;

  // Add anchor-name to the trigger element
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (triggerRef.current) {
      triggerRef.current.style.setProperty("anchor-name", `--${anchorId}`);
    }
  }, [anchorId]);

  // Merge existing props with required popover props

  return (
    <>
      {props.children({
        ref: triggerRef,
        popoverTarget: popoverId,
        "aria-haspopup": "dialog",
        "aria-expanded": props.isOpen,
        "aria-controls": popoverId,
      })}
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
    if (!popover) return;

    if (isOpen) {
      popover.showPopover();
    } else {
      popover.hidePopover();
    }
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
      $placement={placement}
      $anchorId={anchorId}
    >
      {children}
    </StyledPopover>
  );
};

// Styled component for the popover with anchor positioning
const StyledPopover = styled.div<{
  $placement: PopoverPlacement;
  $anchorId: string;
}>`
  inset: auto;
  position: absolute;

  /* Anchor positioning based on placement */
  ${({ $placement, $anchorId }) => {
    const anchorName = `--${$anchorId}`;

    switch ($placement) {
      case "top":
        return `
          position-anchor: ${anchorName};
          anchor-name: ${anchorName};
          bottom: anchor(top);
          justify-self: anchor-center;
        `;
      case "bottom":
        return `
          position-anchor: ${anchorName};
          anchor-name: ${anchorName};
          top: anchor(bottom);
          justify-self: anchor-center;
        `;
      case "left":
        return `
          position-anchor: ${anchorName};
          anchor-name: ${anchorName};
          right: anchor(left);
          top: anchor(center);
          transform: translateY(-50%);
        `;
      case "right":
        return `
          position-anchor: ${anchorName};
          anchor-name: ${anchorName};
          left: anchor(right);
          top: anchor(center);
          transform: translateY(-50%);
        `;
      default:
        return `
          anchor-name: ${anchorName};
          position-anchor: ${anchorName};
          justify-self: anchor-center;
        `;
    }
  }}
`;
