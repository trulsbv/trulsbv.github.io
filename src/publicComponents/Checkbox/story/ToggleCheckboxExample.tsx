import { styled } from "styled-components";
import { Checkbox } from "../Checkbox";
import { useState } from "react";
import { semantic } from "../../../theme/tokens";
import { Button } from "../../../internalComponents/Button/Button";

export const ToggleCheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ExampleWrapper
      toggle={
        <>
          <span>Toggle is {isChecked ? "ON" : "OFF"}</span>
          <Button variant="primary" onClick={() => setIsChecked(!isChecked)}>
            Toggle
          </Button>
        </>
      }
      checkbox={<ToggleCheckbox checked={isChecked} onChange={setIsChecked} />}
    />
  );
};

export const DisabledToggleCheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ExampleWrapper
      toggle={
        <>
          <span>Toggle is {isChecked ? "ON" : "OFF"}</span>
          <Button variant="primary" onClick={() => setIsChecked(!isChecked)}>
            Toggle
          </Button>
        </>
      }
      checkbox={
        <ToggleCheckbox checked={isChecked} onChange={setIsChecked} disabled />
      }
    />
  );
};

const ExampleWrapper = (props: {
  toggle: React.ReactNode;
  checkbox: React.ReactNode;
}) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
      }}
    >
      {props.toggle}
    </div>

    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
      }}
    >
      {props.checkbox}
    </label>
  </div>
);

const ToggleCheckbox = styled(Checkbox)`
  appearance: none;
  width: 44px;
  height: 24px;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: #ccc;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  outline: none;

  /* Toggle knob */
  &::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Checked state */
  &:checked {
    background: green;
    border-color: green;
  }

  /* Move knob to the right when checked */
  &:checked::after {
    left: 22px;
  }

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: green;
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
