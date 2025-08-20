import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism.css";
import { semantic } from "../../../theme/tokens";
import { BrowserCompatTable } from "../../../internalComponents/BrowserCompatTable";

export type ComponentDetailPageViewProps = {
  name: string;
  code: {
    content: string;
    onCopy: () => void;
  };
};

const CodeDisplay = ({
  code,
}: {
  code: {
    content: string;
    onCopy: () => void;
  };
}) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open || !codeRef.current) return;
    Prism.highlightElement(codeRef.current);
  }, [open, code.content]);

  const handleCopy = async () => {
    await code.onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="code-display"
      style={{
        background: semantic.code.containerBackground,
        border: `1px solid ${semantic.code.border}`,
      }}
    >
      <div className="code-header">
        <span className="code-title">Component Code</span>
        <div>
          <button
            className="copy-button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="component-code-content"
          >
            {open ? "Hide code" : "Show code"}
          </button>
          <button
            className={`copy-button ${copied ? "copied" : ""}`}
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            style={{ marginLeft: 8 }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      {open && (
        <pre
          id="component-code-content"
          className="code-content"
          style={{
            background: semantic.code.containerBackground,
            color: semantic.code.text,
          }}
        >
          <code ref={codeRef} className="language-typescript">
            {code.content}
          </code>
        </pre>
      )}
    </div>
  );
};

export const ComponentDetailPageView = (
  props: React.PropsWithChildren<ComponentDetailPageViewProps>
) => (
  <>
    <h1>{props.name}</h1>
    {props.children}
    {props.name === "Popover" && <BrowserCompatTable />}
    <CodeDisplay code={props.code} />
  </>
);
