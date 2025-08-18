import { useState, useRef } from "react";
import { Button } from "../../Button/Button";
import { Popover, Popover2, PopoverTrigger } from "../Popover";

export const PopoverExample = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "top" | "bottom" | "left" | "right"
  >("bottom");
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>Popover Component Examples</h2>

      <div>
        <p>Open: {open ? "true" : "false"}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <label>Placement:</label>
        <select
          value={placement}
          onChange={(e) => setPlacement(e.target.value as any)}
          style={{ padding: "6px 10px" }}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>

      <Button
        ref={buttonRef}
        variant="primary"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="example-popover"
        popoverTarget="example-popover"
      >
        Toggle Popover
      </Button>

      <Popover
        isOpen={open}
        onClose={() => setOpen(false)}
        id="example-popover"
        placement={placement}
        anchorId="popover-trigger"
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <strong>Popover title</strong>
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
            This popover uses the native HTML Popover API with CSS Anchor
            Positioning.
            <br />
            <strong>Placement:</strong> {placement}
            <br />
            Click outside or press ESC to close.
          </div>
        </div>
      </Popover>

      <div style={{ marginTop: 24 }}>
        <h3>Usage tips</h3>
        <ul style={{ lineHeight: 1.6 }}>
          <li>Native light-dismiss and ESC-to-close handled by the browser</li>
          <li>
            Controlled via the <code>isOpen</code> prop
          </li>
          <li>
            Uses CSS Anchor Positioning API for precise positioning relative to
            trigger
          </li>
          <li>Supports top, bottom, left, and right placements</li>
          <li>
            Fallback to centered positioning for browsers without anchor
            positioning support
          </li>
        </ul>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          background: "#f9fafb",
        }}
      >
        <h3>Simplified Usage with PopoverTrigger</h3>
        <p style={{ marginBottom: 16 }}>
          You can also use the <code>PopoverTrigger</code> component for easier
          setup:
        </p>

        <PopoverTrigger
          id="example-popover-simple"
          anchorId="popover-trigger-simple"
          isOpen={open}
        >
          <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
            Toggle Popover (Simplified)
          </Button>
        </PopoverTrigger>

        <Popover
          isOpen={open}
          onClose={() => setOpen(false)}
          id="example-popover-simple"
          placement={placement}
          anchorId="popover-trigger-simple"
        >
          <div style={{ padding: "12px" }}>
            <strong>Simplified Popover</strong>
            <br />
            This uses PopoverTrigger for automatic anchor-name and ARIA setup.
          </div>
        </Popover>
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>Improved Popover2 Usage</h3>
        <p style={{ marginBottom: 16 }}>
          The improved Popover2 component automatically handles all trigger
          properties:
        </p>
        <Popover2
          isOpen={open}
          onClose={() => setOpen(false)}
          placement={placement}
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
            </div>
          }
        >
          <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
            Toggle Popover2 (Improved)
          </Button>
        </Popover2>
      </div>
    </div>
  );
};

export default PopoverExample;
