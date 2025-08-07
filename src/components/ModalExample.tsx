import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

// Example styled components for modal content
const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 24px;
  min-width: 300px;
  max-width: 500px;
`;

const ModalHeader = styled.div`
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

const ModalBody = styled.div`
  margin-bottom: 24px;
  color: #6b7280;
  line-height: 1.6;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: #3b82f6;
    color: white;
    
    &:hover {
      background-color: #2563eb;
    }
    
    &:focus {
      outline: 2px solid #1d4ed8;
      outline-offset: 2px;
    }
  `
      : `
    background-color: #f3f4f6;
    color: #374151;
    
    &:hover {
      background-color: #e5e7eb;
    }
    
    &:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
  `}
`;

// Example container
const ExampleContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ModalExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ExampleContainer>
      <h1>Native Dialog Modal Example</h1>

      <Section>
        <SectionTitle>Basic Modal</SectionTitle>
        <p>
          This modal uses the native HTML dialog element with custom styling.
        </p>
        <ButtonGroup>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </ButtonGroup>
      </Section>

      {/* Modal with custom content */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Example Modal</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <p>This is a modal using the native HTML dialog element.</p>
            <p>
              The content is completely customizable and can include any React
              components.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ExampleContainer>
  );
};

export default ModalExample;
