import styled from "styled-components";
import { useRef } from "react";
import CodeShowcaseWrapper from "./CodeShowcaseWrapper";
import ExampleComponent from "./ExampleComponent";

const ShowcaseSection = styled.section`
  padding: 4rem 0;
  color: white;
  scroll-margin-top: 80px; /* Account for fixed header */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DialogDemo = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Open Dialog Modal
      </button>

      <dialog
        ref={modalRef}
        onClose={closeModal}
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          padding: "2rem",
          color: "white",
          maxWidth: "500px",
          width: "90%",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ margin: "0 0 1rem 0" }}>Native HTML Dialog Modal</h3>
          <p>
            This is a modal dialog created using the native HTML &lt;dialog&gt;
            element.
          </p>
          <p>Key features:</p>
          <ul>
            <li>Built-in accessibility (focus management, ARIA attributes)</li>
            <li>Native backdrop and positioning in top-layer</li>
            <li>No JavaScript framework required</li>
            <li>Lightweight and performant</li>
            <li>Proper z-index stacking context</li>
          </ul>
        </div>
        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
        >
          <button
            onClick={closeModal}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

const ComponentShowcase = () => {
  const scrollToSection = () => {
    window.history.pushState(null, "", "#technical-implementations");
  };

  const dialogCode = `import { useRef } from 'react';

const DialogDemo = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <button onClick={openModal}>
        Open Dialog Modal
      </button>

      <dialog ref={modalRef} onClose={closeModal}>
        <h3>Native HTML Dialog Modal</h3>
        <p>This is a modal dialog created using the native HTML &lt;dialog&gt; element.</p>
        <p>Key features:</p>
        <ul>
          <li>Built-in accessibility (focus management, ARIA attributes)</li>
          <li>Native backdrop and positioning in top-layer</li>
          <li>No JavaScript framework required</li>
          <li>Lightweight and performant</li>
          <li>Proper z-index stacking context</li>
        </ul>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </div>
  );
};`;

  const exampleComponentCode = `import styled from "styled-components";
import { useState } from "react";

const Container = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
\`;

const Button = styled.button\`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
\`;

const Counter = styled.div\`
  font-size: 2rem;
  font-weight: bold;
  color: white;
\`;

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Counter>{count}</Counter>
      <Button onClick={() => setCount(count + 1)}>
        Increment Counter
      </Button>
      <Button onClick={() => setCount(0)}>
        Reset
      </Button>
    </Container>
  );
};`;

  return (
    <ShowcaseSection id="technical-implementations">
      <SectionTitle onClick={scrollToSection}>
        Technical Implementations
      </SectionTitle>

      <ComponentsGrid>
        <CodeShowcaseWrapper
          title="Native HTML Dialog Modal"
          description="A modal dialog implementation using the native HTML <dialog> element. This demonstrates how to create accessible, performant modals without JavaScript frameworks."
          code={dialogCode}
        >
          <DialogDemo />
        </CodeShowcaseWrapper>

        <CodeShowcaseWrapper
          title="Interactive Counter Component"
          description="A simple React component demonstrating state management and styled-components. Shows how to create interactive components with clean, modern styling."
          code={exampleComponentCode}
        >
          <ExampleComponent />
        </CodeShowcaseWrapper>
      </ComponentsGrid>
    </ShowcaseSection>
  );
};

export default ComponentShowcase;
