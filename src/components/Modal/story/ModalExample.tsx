import { useState } from "react";
import { Button } from "../../Button/Button";
import { Modal } from "../Modal";
import { CenteredContainer } from "../../CenteredContainer";

export const ModalExample = () => {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openBasicModal = () => setIsBasicModalOpen(true);
  const closeBasicModal = () => setIsBasicModalOpen(false);
  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Modal Component Examples</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Basic Modal</h3>
        <Button variant="primary" onClick={openBasicModal}>
          Open Modal
        </Button>

        <Modal isOpen={isBasicModalOpen} onClose={closeBasicModal}>
          <CenteredContainer>
            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                minWidth: "300px",
                maxWidth: "500px",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
                Modal Title
              </h3>
              <p style={{ marginBottom: "20px", lineHeight: "1.5" }}>
                This is a basic modal example. You can click outside the modal
                or use the close button to close it.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="secondary" onClick={closeBasicModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={closeBasicModal}>
                  Confirm
                </Button>
              </div>
            </div>
          </CenteredContainer>
        </Modal>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Modal with Form</h3>
        <Button variant="primary" onClick={openFormModal}>
          Open Form Modal
        </Button>

        <Modal isOpen={isFormModalOpen} onClose={closeFormModal}>
          <CenteredContainer>
            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                minWidth: "400px",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "20px" }}>
                Contact Form
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  closeFormModal();
                  alert("Form submitted!");
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "4px",
                      fontWeight: "500",
                    }}
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "4px",
                      fontWeight: "500",
                    }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={closeFormModal}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </CenteredContainer>
        </Modal>
      </div>

      <div>
        <h3>Usage Instructions</h3>
        <ul style={{ lineHeight: "1.6" }}>
          <li>Click outside the modal to close it</li>
          <li>Use the ESC key to close the modal</li>
          <li>The modal uses the HTML dialog element for accessibility</li>
          <li>Use CenteredContainer for proper positioning</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalExample;
