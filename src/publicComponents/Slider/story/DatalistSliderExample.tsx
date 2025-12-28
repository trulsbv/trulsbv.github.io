import { styled } from "styled-components";
import { Slider } from "../Slider";
import { useState } from "react";
import { semantic } from "../../../theme/tokens";

export const DatalistSliderExample = () => {
  const [sliderValue, setSliderValue] = useState<number>(2);

  const min = 1;
  const max = 3;

  const tickValues = [
    { value: 1, label: "Min" },
    { value: 2, label: "Medium" },
    { value: 3, label: "Max" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span>
          Current value: <strong>{sliderValue}</strong>
        </span>
      </div>

      <div style={{ width: 400 }}>
        <StylishSlider
          min={min}
          max={max}
          value={sliderValue}
          onChange={setSliderValue}
          list="tick-marks"
        />
        <datalist id="tick-marks">
          {tickValues.map((tick) => (
            <option key={tick.value} value={tick.value} label={tick.label} />
          ))}
        </datalist>

        {/* Custom labels below the slider */}
        <TickLabels>
          {tickValues.map((tick) => {
            const percentage = ((tick.value - min) / (max - min)) * 100;
            return (
              <TickLabel
                key={tick.value}
                style={{
                  left: `${percentage}%`,
                  transform: `translateX(-${percentage}%)`,
                }}
              >
                <TickMark />
                <span>{tick.label}</span>
              </TickLabel>
            );
          })}
        </TickLabels>
      </div>
    </div>
  );
};

const thumbStyles = `
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

const TickLabels = styled.div`
  position: relative;
  margin-top: 8px;
  height: 30px;
`;

const TickLabel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: #666;
`;

const TickMark = styled.div`
  width: 2px;
  height: 8px;
  background: #999;
  margin-bottom: 4px;
`;
