import styled from "styled-components";
import { ReactNode, useState, useRef } from "react";

const WrapperContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ComponentTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.3;
`;

const ComponentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const ComponentDemo = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CodeButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const CodeModal = styled.dialog`
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 0;
  color: white;
  max-width: 90vw;
  width: 90vw;
  max-height: 90vh;
  height: 90vh;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;

  &::backdrop {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }

  &[open] {
    animation: modal-show 0.3s ease-out;
  }

  @keyframes modal-show {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CodeContainer = styled.div`
  padding: 2rem;
  height: calc(90vh - 80px);
  overflow: auto;
`;

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #e6e6e6;
  margin: 0;
`;

interface CodeShowcaseWrapperProps {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
}

const CodeShowcaseWrapper = ({
  title,
  description,
  code,
  children,
}: CodeShowcaseWrapperProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openCodeModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeCodeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <WrapperContainer>
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentDescription>{description}</ComponentDescription>

      <ComponentDemo>{children}</ComponentDemo>

      <CodeButton onClick={openCodeModal}>View Code</CodeButton>

      <CodeModal ref={modalRef} onClose={closeCodeModal}>
        <ModalHeader>
          <ModalTitle>{title} - Source Code</ModalTitle>
          <CloseButton onClick={closeCodeModal}>&times;</CloseButton>
        </ModalHeader>
        <CodeContainer>
          <CodeBlock>
            <code>{code}</code>
          </CodeBlock>
        </CodeContainer>
      </CodeModal>
    </WrapperContainer>
  );
};

export default CodeShowcaseWrapper;
