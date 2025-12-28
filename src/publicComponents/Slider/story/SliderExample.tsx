import { styled, css } from "styled-components";
import { Slider } from "../Slider";
import { useState } from "react";
import { semantic } from "../../../theme/tokens";
import { SliderControls } from "../../../internalComponents/SliderControls";

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

const thumbStyles = css`
  appearance: none;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: blue;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StylishSlider = styled(Slider)`
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-image: linear-gradient(lightblue, lightblue);
  outline: none;

  /**  Chrome & Safari*/
  &::-webkit-slider-thumb {
    ${thumbStyles}
  }

  /** Firefox */
  &::-moz-range-thumb {
    ${thumbStyles}
  }

  /** Focus indicator on thumb */
  &:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px ${semantic.button.focusOutline};
  }

  &:focus-visible::-moz-range-thumb {
    box-shadow: 0 0 0 3px ${semantic.button.focusOutline};
  }
`;
