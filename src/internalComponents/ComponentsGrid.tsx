import styled from "styled-components";
import { semantic } from "../theme/tokens";
import { ComponentCard } from "./ComponentCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: ${semantic.hero.foreground};
`;

const components = [
  {
    name: "Modal",
    description:
      "A reusable modal dialog component with backdrop click to close, keyboard navigation support, and flexible content rendering.",
    componentName: "Modal",
  },
  {
    name: "Popover",
    description:
      "A lightweight popover using the native HTML Popover API with light-dismiss, ESC support, and anchor positioning.",
    componentName: "Popover",
  },
  {
    name: "Slider",
    description:
      "A customizable slider component supporting horizontal, vertical, and circular orientations with keyboard accessibility.",
    componentName: "Slider",
  },
  {
    name: "Checkbox",
    description:
      "A customizable checkbox component using native browser input with custom styling that works across all major browsers.",
    componentName: "Checkbox",
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
