import { useState } from "react";
import { Button } from "../../Button/Button";
import { Modal } from "../Modal";
import { CenteredContainer } from "../../CenteredContainer";

export const ModalNestedExample = () => {
  const [isOuterOpen, setIsOuterOpen] = useState(false);
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>Nested Modals</h2>
      <Button variant="primary" onClick={() => setIsOuterOpen(true)}>
        Open Outer Modal
      </Button>

      <Modal isOpen={isOuterOpen} onClose={() => { setIsOuterOpen(false); setIsInnerOpen(false); }}>
        <CenteredContainer>
          <div
            style={{
              background: "white",
              padding: 24,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              minWidth: 360,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Outer modal</h3>
            <p style={{ marginBottom: 16 }}>
              This is the outer modal. You can open another modal on top of this.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOuterOpen(false)}>
                Close outer
              </Button>
              <Button variant="primary" onClick={() => setIsInnerOpen(true)}>
                Open inner modal
              </Button>
            </div>
          </div>
        </CenteredContainer>
      </Modal>

      <Modal isOpen={isInnerOpen} onClose={() => setIsInnerOpen(false)}>
        <CenteredContainer>
          <div
            style={{
              background: "white",
              padding: 24,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              minWidth: 320,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Inner modal</h3>
            <p style={{ marginBottom: 16 }}>
              This inner modal is opened from the outer modal.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <Button variant="primary" onClick={() => setIsInnerOpen(false)}>
                Close inner
              </Button>
            </div>
          </div>
        </CenteredContainer>
      </Modal>
    </div>
  );
};

export default ModalNestedExample;
