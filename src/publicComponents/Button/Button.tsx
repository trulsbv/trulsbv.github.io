import styled from "styled-components";
import { semantic } from "../../theme/tokens";

const PrimaryButtonStyle = `
  background-color: ${semantic.button.primaryBackground};
  color: ${semantic.button.primaryText};
  
  &:hover {
    background-color: ${semantic.button.primaryHoverBackground};
  }
  
  &:disabled {
    background-color: ${semantic.button.primaryDisabledBackground};
    color: ${semantic.button.primaryText};
  }

  &:disabled:hover {
    background-color: ${semantic.button.primaryDisabledBackground};
  }
`;

const SecondaryButtonStyle = `
  background-color: ${semantic.button.secondaryBackground};
  color: ${semantic.button.secondaryText};
  
  &:hover {
    background-color: ${semantic.button.secondaryHoverBackground};
  }
  
  &:disabled {
    background-color: ${semantic.button.secondaryDisabledBackground};
    color: ${semantic.button.secondaryDisabledText};
  }

  &:disabled:hover {
    background-color: ${semantic.button.secondaryDisabledBackground};
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
    outline: 2px solid ${semantic.button.focusOutline};
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
