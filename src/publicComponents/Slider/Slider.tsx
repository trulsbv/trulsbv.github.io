import type { InputHTMLAttributes } from "react";
import type { CommonInputAttributes } from "../shared/inputTypes";

type RangeSpecificAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "step" | "list"
>;

export type SliderProps = CommonInputAttributes &
  RangeSpecificAttributes & {
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
