import { styled } from "styled-components";
import { Checkbox } from "../Checkbox";
import { useState } from "react";
import { semantic } from "../../../theme/tokens";
import { Button } from "../../../internalComponents/Button/Button";

export const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <span>Checkbox is {isChecked ? "checked" : "unchecked"}</span>
        <Button variant="primary" onClick={() => setIsChecked(!isChecked)}>
          Toggle
        </Button>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <StylishCheckbox checked={isChecked} onChange={setIsChecked} />
        <span>Accept terms and conditions</span>
      </label>
    </div>
  );
};

const StylishCheckbox = styled(Checkbox)`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  position: relative;
  transition: all 0.15s ease;
  outline: none;

  /* Checked state */
  &:checked {
    background: blue;
    border-color: blue;
  }

  /* Checkmark */
  &:checked::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: blue;
  }

  /* Focus state */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${semantic.button.focusOutline};
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
