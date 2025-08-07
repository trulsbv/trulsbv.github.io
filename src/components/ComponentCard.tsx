import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: block;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  background-color: white;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const Description = styled.p`
  margin: 0;
  color: #6b7280;
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
