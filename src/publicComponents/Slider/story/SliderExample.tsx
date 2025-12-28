import { styled, css } from "styled-components";
import { Slider } from "../Slider";
import { useState } from "react";
import Button from "../../../internalComponents/Button/Button";
import { semantic } from "../../../theme/tokens";

export const SliderExample = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [sliderValue, setSliderValue] = useState<number>(50);

  return (
    <div>
      <SliderControls
        text="Min value"
        currentValue={minValue}
        setValue={setMinValue}
      />
      <SliderControls
        text="Max value"
        currentValue={maxValue}
        setValue={setMaxValue}
      />
      <SliderControls
        text="Current value"
        currentValue={sliderValue}
        setValue={setSliderValue}
      />

      <div
        style={{
          width: 300,
        }}
      >
        <StylishSlider
          min={minValue}
          max={maxValue}
          value={sliderValue}
          onChange={setSliderValue}
        />
      </div>
    </div>
  );
};

type SliderControlsProps = {
  text: string;
  currentValue: number;
  setValue: (value: number) => void;
};

const SliderControls = (props: SliderControlsProps) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
  >
    <span>
      {props.text}: {props.currentValue}
    </span>
    <Button
      variant="primary"
      onClick={() => props.setValue(props.currentValue - 10)}
    >
      -10
    </Button>
    <Button
      variant="primary"
      onClick={() => props.setValue(props.currentValue + 10)}
    >
      +10
    </Button>
  </div>
);

const thumbStyles = css`
  appearance: none;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: blue;
  cursor: pointer;
  border: none;
`;

const StylishSlider = styled(Slider)`
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-image: linear-gradient(lightblue, lightblue);
  outline: none;

  &:focus-visible {
    /* Use box-shadow instead of outline to ensure it renders behind the thumb in all browsers.
       Firefox doesn't respect stacking context for ::-moz-range-thumb the same way Chrome/Safari do */
    box-shadow: 0 0 0 2px ${semantic.button.focusOutline};
  }

  /**  Chrome & Safari*/
  &::-webkit-slider-thumb {
    ${thumbStyles}
  }

  /** Firefox */
  &::-moz-range-thumb {
    ${thumbStyles}
  }
`;
