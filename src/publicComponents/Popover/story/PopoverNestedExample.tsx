import { useState } from "react";
import { Button } from "../../../internalComponents/Button/Button";
import { PopoverTrigger } from "../Popover";

export const PopoverNestedExample = () => {
  const [outerOpen, setOuterOpen] = useState(false);
  const [innerOpen, setInnerOpen] = useState(false);
  const [standaloneOpen, setStandaloneOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>Nested Popovers with Anchor Positioning</h2>

      {/* Standalone popover for comparison */}
      <div style={{ marginBottom: 20 }}>
        <h3>Standalone Popover (for comparison)</h3>
        <PopoverTrigger
          isOpen={standaloneOpen}
          onClose={() => setStandaloneOpen(false)}
          id="standalone-popover"
          placement="right"
          content={
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
              <strong>Standalone popover</strong>
              <div style={{ marginTop: 8, color: "#374151" }}>
                This should position correctly to the right.
              </div>
              <button onClick={() => setStandaloneOpen(false)}>Close</button>
            </div>
          }
        >
          <Button
            variant="secondary"
            onClick={() => setStandaloneOpen((v) => !v)}
          >
            Toggle Standalone Popover
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverTrigger
        isOpen={outerOpen}
        onClose={() => {
          setOuterOpen(false);
          setInnerOpen(false);
        }}
        id="outer-popover"
        placement="bottom"
        content={
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              padding: 12,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              minWidth: 260,
              position: "static",
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

            <PopoverTrigger
              isOpen={innerOpen}
              onClose={() => setInnerOpen(false)}
              id="inner-popover"
              placement="right"
              content={
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
                    <br />
                    <small>
                      Positioned to the right of the inner trigger button.
                    </small>
                  </div>
                  <button onClick={() => setInnerOpen(false)}>Close</button>
                </div>
              }
            >
              <Button variant="primary" onClick={() => setInnerOpen((v) => !v)}>
                Toggle Inner Popover
              </Button>
            </PopoverTrigger>
          </div>
        }
      >
        <Button variant="primary" onClick={() => setOuterOpen((v) => !v)}>
          Toggle Outer Popover
        </Button>
      </PopoverTrigger>
    </div>
  );
};

export default PopoverNestedExample;
