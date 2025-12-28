import { styled } from "styled-components";
import { Checkbox } from "../Checkbox";
import { useState } from "react";
import { semantic } from "../../../theme/tokens";

export const IndeterminateCheckboxExample = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Item 1", checked: false },
    { id: 2, label: "Item 2", checked: true },
    { id: 3, label: "Item 3", checked: false },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked) && !allChecked;

  const handleSelectAll = () => {
    const newState = !allChecked;
    setItems(items.map((item) => ({ ...item, checked: newState })));
  };

  const handleItemChange = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        <StylishCheckbox
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleSelectAll}
        />
        <span>Select All</span>
      </label>

      <div style={{ marginLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => (
          <label
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <StylishCheckbox
              checked={item.checked}
              onChange={() => handleItemChange(item.id)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
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

  /* Checkmark for checked state */
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

  /* Indeterminate state (dash) */
  &:indeterminate {
    background: blue;
    border-color: blue;
  }

  &:indeterminate::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 2px;
    background: white;
    transform: translate(-50%, -50%);
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
