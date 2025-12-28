export type SliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export const Slider = (props: SliderProps) => (
  <input
    type="range"
    {...props}
    onChange={(e) => props.onChange(Number(e.target.value))}
  />
);
