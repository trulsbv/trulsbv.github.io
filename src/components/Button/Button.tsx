import styled from "styled-components";

const PrimaryButtonStyle = `
  background-color: #3b82f6;
  color: white;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #93c5fd; /* lighter blue */
    color: #ffffff;
  }

  &:disabled:hover {
    background-color: #93c5fd;
  }
`;

const SecondaryButtonStyle = `
  background-color: #f3f4f6;
  color: #374151;
  
  &:hover {
    background-color: #e5e7eb;
  }
  
  &:disabled {
    background-color: #e5e7eb; /* keep subtle background */
    color: #9ca3af; /* muted text */
  }

  &:disabled:hover {
    background-color: #e5e7eb;
  }
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid #1d4ed8;
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${(props) =>
    props.variant === "primary" ? PrimaryButtonStyle : SecondaryButtonStyle}
`;

export default Button;
