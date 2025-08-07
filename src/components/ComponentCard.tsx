import styled from "styled-components";
import { Link } from "react-router-dom";
import { semantic } from "../theme/tokens";

const Card = styled(Link)`
  display: block;
  padding: 1.5rem;
  border: 1px solid ${semantic.componentCard.border};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  background-color: ${semantic.componentCard.background};
  transition: all 0.2s ease;
  box-shadow: ${semantic.componentCard.shadow};

  &:hover {
    border-color: ${semantic.componentCard.hoverBorder};
    box-shadow: ${semantic.componentCard.hoverShadow};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${semantic.componentCard.focusOutline};
    outline-offset: 2px;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${semantic.componentCard.title};
`;

const Description = styled.p`
  margin: 0;
  color: ${semantic.componentCard.description};
  font-size: 0.875rem;
  line-height: 1.5;
`;

export type ComponentCardProps = {
  name: string;
  description: string;
  componentName: string;
};

export const ComponentCard = ({
  name,
  description,
  componentName,
}: ComponentCardProps) => {
  return (
    <Card to={`/components/${componentName}`}>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ComponentCard;
