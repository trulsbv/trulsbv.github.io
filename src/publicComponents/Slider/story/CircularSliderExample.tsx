import { styled } from "styled-components";
import { Slider, type SliderProps } from "../Slider";
import { useState, useRef, useCallback, useEffect } from "react";
import { semantic } from "../../../theme/tokens";
import { SliderControls } from "../../../internalComponents/SliderControls";

export const CircularSliderExample = () => {
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
      <CircularSliderWrapper
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={setSliderValue}
      />
    </div>
  );
};

const CircularSliderWrapper = (props: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate percentage (0 to 1)
  const percentage = (props.value - props.min) / (props.max - props.min);

  // Convert to angle (0deg at top, going clockwise)
  // Subtract 90deg to start at 12 o'clock
  const angle = percentage * 360 - 90;
  const angleRad = (angle * Math.PI) / 180;

  // Calculate thumb position on circle
  // Track outer radius = 100px, inner radius = 70px
  // Position thumb in the middle of the ring at radius 85px
  const radius = 85;
  const thumbX = radius * Math.cos(angleRad);
  const thumbY = radius * Math.sin(angleRad);

  const updateValueFromPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle from center to mouse position
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      let angleFromCenter = Math.atan2(dy, dx) * (180 / Math.PI);

      // Convert angle to start from 12 o'clock (top) and go clockwise
      // atan2 gives us angle from 3 o'clock, so we add 90
      angleFromCenter = angleFromCenter + 90;

      // Normalize angle to 0-360
      if (angleFromCenter < 0) {
        angleFromCenter += 360;
      }

      // Convert angle to percentage (0 to 1)
      const newPercentage = angleFromCenter / 360;

      // Convert percentage to value
      const newValue = props.min + newPercentage * (props.max - props.min);

      // Round to nearest integer
      const roundedValue = Math.round(newValue);

      props.onChange(roundedValue);
    },
    [props]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updateValueFromPosition(e.clientX, e.clientY);
    },
    [updateValueFromPosition]
  );

  // Add global mouse move and up listeners when dragging
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      updateValueFromPosition(e.clientX, e.clientY);
    };

    const handleUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleUp);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleUp);
      };
    }
  }, [isDragging, updateValueFromPosition]);

  return (
    <Container ref={containerRef} onMouseDown={handleMouseDown}>
      {/* Visual circular track */}
      <CircularTrack $percentage={percentage * 100} />
      <InnerCircle />

      {/* Visual thumb indicator */}
      <ThumbIndicator $x={thumbX} $y={thumbY} $isDragging={isDragging} />

      {/* Hidden native slider for keyboard accessibility */}
      <HiddenSlider {...props} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

const CircularTrack = styled.div<{ $percentage: number }>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    lightblue 0%,
    lightblue ${(props) => props.$percentage}%,
    #e0e0e0 ${(props) => props.$percentage}%,
    #e0e0e0 100%
  );
  pointer-events: none;
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: white;
  pointer-events: none;
`;

const ThumbIndicator = styled.div<{
  $x: number;
  $y: number;
  $isDragging: boolean;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: blue;
  border: 3px solid white;
  box-shadow: ${(props) =>
    props.$isDragging
      ? "0 4px 8px rgba(0, 0, 0, 0.3)"
      : "0 2px 4px rgba(0, 0, 0, 0.2)"};
  pointer-events: none;
  transform: translate(
      calc(${(props) => props.$x}px - 50%),
      calc(${(props) => props.$y}px - 50%)
    )
    ${(props) => (props.$isDragging ? "scale(1.2)" : "scale(1)")};
  transition: ${(props) =>
    props.$isDragging ? "none" : "transform 0.1s, box-shadow 0.1s"};
  z-index: 2;

  ${Container}:focus-within & {
    box-shadow: 0 0 0 3px ${semantic.button.focusOutline},
      ${(props) =>
        props.$isDragging
          ? "0 4px 8px rgba(0, 0, 0, 0.3)"
          : "0 2px 4px rgba(0, 0, 0, 0.2)"};
  }
`;

const HiddenSlider = styled(Slider)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  z-index: 1;

  &:focus-visible {
    outline: none;
  }
`;
