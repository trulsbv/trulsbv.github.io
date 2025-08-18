import { useState } from "react";
import { Button } from "../../Button/Button";
import { PopoverTrigger } from "../Popover";

export const PopoverExample = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "top" | "bottom" | "left" | "right"
  >("bottom");

  return (
    <div style={{ padding: 20 }}>
      <h2>Popover Component Examples</h2>

      <div style={{ marginTop: 32 }}>
        <h3>Select Placement</h3>
        <p style={{ marginBottom: 16 }}>Select the placement of the popover.</p>
      </div>

      <select
        value={placement}
        onChange={(e) =>
          setPlacement(e.target.value as "top" | "bottom" | "left" | "right")
        }
      >
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>

      <div style={{ marginTop: 32 }}>
        <h3>Improved Popover2 Usage</h3>
        <p style={{ marginBottom: 16 }}>
          The improved Popover2 component automatically handles all trigger
          properties:
        </p>
        <PopoverTrigger
          isOpen={open}
          onClose={() => setOpen(false)}
          placement={placement}
          id="example-popover2"
          content={
            <div style={{ padding: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <strong>Improved Popover2</strong>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close popover"
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
              <div style={{ color: "#374151", lineHeight: 1.5 }}>
                This uses the improved Popover2 component with:
                <br />
                • Automatic ARIA attributes
                <br />
                • Automatic anchor-name setup
                <br />• Configurable placement: {placement}
                <br />• Proper onClose handling
              </div>

              <select
                value={placement}
                onChange={(e) =>
                  setPlacement(
                    e.target.value as "top" | "bottom" | "left" | "right"
                  )
                }
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
          }
        >
          <Button variant="primary" onClick={() => setOpen((v) => !v)}>
            Toggle Popover2 (Improved)
          </Button>
        </PopoverTrigger>
      </div>
    </div>
  );
};

export default PopoverExample;
