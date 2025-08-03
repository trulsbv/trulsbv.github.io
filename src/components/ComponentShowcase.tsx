import styled from "styled-components";
import { useRef } from "react";

const ShowcaseSection = styled.section`
  padding: 4rem 0;
  color: white;
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
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ComponentCard = styled.div`
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

const DemoButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const CodeButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Modal = styled.dialog`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  max-width: 500px;
  width: 90%;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }

  &[open] {
    animation: dialog-show 0.3s ease-out;
  }

  @keyframes dialog-show {
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
  margin-bottom: 1.5rem;
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

const ModalContent = styled.div`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const ComponentShowcase = () => {
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

  const components = [
    {
      id: 1,
      title: "Native HTML Dialog Modal",
      description:
        "A modal dialog implementation using the native HTML <dialog> element. This demonstrates how to create accessible, performant modals without JavaScript frameworks.",
      demo: openModal,
      code: () => console.log("Show code for dialog modal"),
    },
    {
      id: 2,
      title: "CSS Container Queries",
      description:
        "Responsive components that adapt based on their container size rather than viewport size. This is the future of responsive design.",
      demo: () => console.log("Show CSS container queries demo"),
      code: () => console.log("Show code for container queries"),
    },
    {
      id: 3,
      title: "View Transitions API",
      description:
        "Smooth page transitions using the new View Transitions API. Create native-like animations between different states of your application.",
      demo: () => console.log("Show view transitions demo"),
      code: () => console.log("Show code for view transitions"),
    },
  ];

  return (
    <ShowcaseSection>
      <SectionTitle>Technical Implementations</SectionTitle>

      <ComponentsGrid>
        {components.map((component) => (
          <ComponentCard key={component.id}>
            <ComponentTitle>{component.title}</ComponentTitle>
            <ComponentDescription>{component.description}</ComponentDescription>
            <div>
              <DemoButton onClick={component.demo}>Try Demo</DemoButton>
              <CodeButton onClick={component.code}>View Code</CodeButton>
            </div>
          </ComponentCard>
        ))}
      </ComponentsGrid>

      <Modal ref={modalRef} onClose={closeModal}>
        <ModalHeader>
          <ModalTitle>Native HTML Dialog Modal</ModalTitle>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
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
        </ModalContent>
        <ModalActions>
          <DemoButton onClick={closeModal}>Close</DemoButton>
        </ModalActions>
      </Modal>
    </ShowcaseSection>
  );
};

export default ComponentShowcase;
