import styled from "styled-components";
import { ComponentCard } from "./ComponentCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
`;

const components = [
  {
    name: "Modal",
    description:
      "A reusable modal dialog component with backdrop click to close, keyboard navigation support, and flexible content rendering.",
    componentName: "Modal",
  },
  {
    name: "Button",
    description:
      "A styled button component with primary and secondary variants, hover effects, and focus states for accessibility.",
    componentName: "Button",
  },
];

export const ComponentsGrid = () => {
  return (
    <Section>
      <SectionTitle>Components</SectionTitle>
      <Grid>
        {components.map((component) => (
          <ComponentCard
            key={component.componentName}
            name={component.name}
            description={component.description}
            componentName={component.componentName}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default ComponentsGrid;
