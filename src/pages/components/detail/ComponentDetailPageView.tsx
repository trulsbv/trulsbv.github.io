import { useState } from "react";

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

  const handleCopy = async () => {
    await code.onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-display">
      <div className="code-header">
        <span className="code-title">Component Code</span>
        <button
          className={`copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="code-content">
        <code>{code.content}</code>
      </pre>
    </div>
  );
};

export const ComponentDetailPageView = (
  props: React.PropsWithChildren<ComponentDetailPageViewProps>
) => (
  <>
    <h1>{props.name}</h1>
    {props.children}
    <CodeDisplay code={props.code} />
  </>
);
