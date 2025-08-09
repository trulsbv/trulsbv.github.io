import { useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Popover } from "../../components/Popover/Popover";
import { CenteredContainer } from "../../components/CenteredContainer";

export const AdvancedExamplesPage = () => {
  // Modal contains Popover
  const [modalOpen, setModalOpen] = useState(false);
  const modalPopoverAnchorRef = useRef<HTMLButtonElement>(null);
  const [modalPopoverOpen, setModalPopoverOpen] = useState(false);

  // Popover contains Modal
  const popoverAnchorRef = useRef<HTMLButtonElement>(null);
  const [outerPopoverOpen, setOuterPopoverOpen] = useState(false);
  const [innerModalOpen, setInnerModalOpen] = useState(false);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h2>Advanced examples</h2>

      <section style={{ marginBottom: 40 }}>
        <h3>Modal containing a Popover</h3>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>

        <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setModalPopoverOpen(false); }}>
          <CenteredContainer>
            <div
              style={{
                background: "white",
                padding: 24,
                borderRadius: 8,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                minWidth: 420,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Modal with internal popover</h4>
              <p style={{ marginBottom: 12 }}>The popover is positioned relative to the button inside the modal.</p>
              <Button
                ref={modalPopoverAnchorRef as any}
                variant="secondary"
                onClick={() => setModalPopoverOpen((v) => !v)}
              >
                Toggle Popover in Modal
              </Button>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>Close</Button>
              </div>
            </div>
          </CenteredContainer>
        </Modal>

        <Popover
          isOpen={modalPopoverOpen}
          onClose={() => setModalPopoverOpen(false)}
          anchorRef={modalPopoverAnchorRef as any}
          placement="bottom"
          offset={10}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              padding: 12,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              minWidth: 220,
            }}
          >
            <strong>Popover inside modal</strong>
            <div style={{ marginTop: 8 }}>This popover is anchored to a button within the modal.</div>
          </div>
        </Popover>
      </section>

      <section>
        <h3>Popover containing a Modal</h3>
        <Button
          ref={popoverAnchorRef as any}
          variant="primary"
          onClick={() => setOuterPopoverOpen((v) => !v)}
        >
          Toggle Popover
        </Button>
        <Popover
          isOpen={outerPopoverOpen}
          onClose={() => { setOuterPopoverOpen(false); setInnerModalOpen(false); }}
          anchorRef={popoverAnchorRef as any}
          placement="bottom"
          offset={10}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              padding: 12,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              minWidth: 280,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <strong>Popover container</strong>
              <button onClick={() => setOuterPopoverOpen(false)} aria-label="Close" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
                ×
              </button>
            </div>
            <p style={{ marginTop: 0 }}>Open a modal from inside this popover:</p>
            <Button variant="secondary" onClick={() => setInnerModalOpen(true)}>
              Open inner modal
            </Button>
          </div>
        </Popover>

        <Modal isOpen={innerModalOpen} onClose={() => setInnerModalOpen(false)}>
          <CenteredContainer>
            <div
              style={{
                background: "white",
                padding: 24,
                borderRadius: 8,
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                minWidth: 340,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Modal opened from popover</h4>
              <p>This modal was triggered by a button inside the popover.</p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
                <Button variant="primary" onClick={() => setInnerModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </CenteredContainer>
        </Modal>
      </section>
    </div>
  );
};

export default AdvancedExamplesPage;
