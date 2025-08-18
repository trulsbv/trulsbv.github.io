import { useState, useRef, useEffect } from "react";
import { Button } from "../../Button/Button";
import { Popover } from "../Popover";

export const PopoverExample = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "top" | "bottom" | "left" | "right"
  >("bottom");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Set anchor-name on the button element
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.setProperty("anchor-name", "--popover-trigger");
    }
  }, []);

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
    </div>
  );
};

export default PopoverExample;
