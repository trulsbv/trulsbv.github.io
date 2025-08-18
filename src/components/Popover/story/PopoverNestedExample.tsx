import { useRef, useState } from "react";
import { Button } from "../../Button/Button";
import { Popover } from "../Popover";

export const PopoverNestedExample = () => {
  const [outerOpen, setOuterOpen] = useState(false);
  const [innerOpen, setInnerOpen] = useState(false);
  const outerAnchorRef = useRef<HTMLButtonElement>(null);
  const innerAnchorRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>Nested Popovers</h2>
      <Button
        ref={outerAnchorRef as any}
        variant="primary"
        onClick={() => setOuterOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={outerOpen}
      >
        Toggle Outer Popover
      </Button>

      <Popover
        isOpen={outerOpen}
        onClose={() => {
          setOuterOpen(false);
          setInnerOpen(false);
        }}
        anchorRef={outerAnchorRef as any}
        placement="bottom"
        offset={10}
      >
        <div
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            padding: 12,
            borderRadius: 8,
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            minWidth: 260,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <strong>Outer popover</strong>
            <button
              onClick={() => setOuterOpen(false)}
              aria-label="Close"
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
          <p style={{ marginTop: 0 }}>Open another popover from here:</p>
          <Button
            ref={innerAnchorRef as any}
            variant="secondary"
            onClick={() => setInnerOpen((v) => !v)}
            aria-haspopup="dialog"
            aria-expanded={innerOpen}
          >
            Toggle Inner Popover
          </Button>

          {/* Render the inner popover inside the outer popover's content */}
          <Popover
            isOpen={innerOpen}
            onClose={() => setInnerOpen(false)}
            anchorRef={innerAnchorRef as any}
            placement="right"
            offset={8}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                padding: 12,
                borderRadius: 8,
                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                minWidth: 200,
              }}
            >
              <strong>Inner popover</strong>
              <div style={{ marginTop: 8, color: "#374151" }}>
                Content inside the inner popover.
              </div>
            </div>
          </Popover>
        </div>
      </Popover>
    </div>
  );
};

export default PopoverNestedExample;
