import { useState } from "react";
import { Button } from "../../../../components/Button";

export const ButtonExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const handleAsyncClick = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setClickCount((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Button Component Examples</h2>

      <div style={{ marginBottom: "30px" }}>
        <h3>Button Variants</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
        </div>
        <p>Click count: {clickCount}</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Button States</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button
            variant="primary"
            onClick={handleAsyncClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Async Button"}
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Form Buttons</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Button type="submit" variant="primary">
              Submit Form
            </Button>
            <Button type="reset" variant="secondary">
              Reset Form
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Button Sizes (via CSS)</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            variant="primary"
            style={{ fontSize: "12px", padding: "4px 8px" }}
            onClick={handleClick}
          >
            Small
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Default
          </Button>
          <Button
            variant="primary"
            style={{ fontSize: "16px", padding: "12px 20px" }}
            onClick={handleClick}
          >
            Large
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Interactive Examples</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="primary"
            onClick={() => alert("Hello! This is a primary button.")}
          >
            Show Alert
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              const name = prompt("What's your name?");
              if (name) {
                alert(`Hello, ${name}!`);
              }
            }}
          >
            Get User Input
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const colors = [
                "#3b82f6",
                "#ef4444",
                "#10b981",
                "#f59e0b",
                "#8b5cf6",
              ];
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              document.body.style.backgroundColor = randomColor;
            }}
          >
            Change Background
          </Button>
        </div>
      </div>

      <div>
        <h3>Usage Instructions</h3>
        <ul style={{ lineHeight: "1.6" }}>
          <li>
            Use <code>variant="primary"</code> for main actions
          </li>
          <li>
            Use <code>variant="secondary"</code> for secondary actions
          </li>
          <li>
            Add <code>disabled</code> prop to disable the button
          </li>
          <li>
            Use <code>type="submit"</code> for form submission
          </li>
          <li>
            Use <code>type="reset"</code> for form reset
          </li>
          <li>
            Use <code>type="button"</code> for general actions (default)
          </li>
          <li>Buttons have focus styles for accessibility</li>
          <li>Hover effects are included for better UX</li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonExample;
