import { useState } from "react";
import { Button } from "../../Button/Button";
import { Popover, PopoverTrigger } from "../Popover";

export const PopoverTriggerExample = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<
    "top" | "bottom" | "left" | "right"
  >("bottom");

  return (
    <div style={{ padding: 20 }}>
      <h2>Popover with PopoverTrigger Component</h2>

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

      <PopoverTrigger
        id="example-popover"
        anchorId="popover-trigger"
        isOpen={open}
      >
        <Button variant="primary" onClick={() => setOpen((v) => !v)}>
          Toggle Popover
        </Button>
      </PopoverTrigger>

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
            This popover uses the PopoverTrigger component for easier setup.
            <br />
            <strong>Placement:</strong> {placement}
            <br />
            Click outside or press ESC to close.
          </div>
        </div>
      </Popover>

      <div style={{ marginTop: 24 }}>
        <h3>Benefits of PopoverTrigger</h3>
        <ul style={{ lineHeight: 1.6 }}>
          <li>Automatically sets the anchor-name CSS property</li>
          <li>
            Handles all required ARIA attributes (aria-haspopup, aria-expanded,
            aria-controls)
          </li>
          <li>Sets the popoverTarget attribute</li>
          <li>Simplifies the trigger element setup</li>
          <li>No need to manually manage refs or useEffect for anchor-name</li>
        </ul>
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Usage Pattern</h3>
        <pre
          style={{
            background: "#f3f4f6",
            padding: "12px",
            borderRadius: "4px",
            fontSize: "14px",
            overflow: "auto",
          }}
        >
          {`<PopoverTrigger
  id="popover-id"
  anchorId="trigger-anchor"
  isOpen={isOpen}
>
  <Button onClick={() => setIsOpen(!isOpen)}>
    Open Popover
  </Button>
</PopoverTrigger>

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  id="popover-id"
  placement="bottom"
  anchorId="trigger-anchor"
>
  Popover content
</Popover>`}
        </pre>
      </div>
    </div>
  );
};

export default PopoverTriggerExample;
