import { useEffect, useRef, type InputHTMLAttributes } from "react";
import type { CommonInputAttributes } from "../shared/inputTypes";

type CheckboxInputAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "checked"
>;

export type CheckboxProps = CommonInputAttributes &
  CheckboxInputAttributes & {
    onChange: (checked: boolean) => void;
    indeterminate?: boolean;
  };

export const Checkbox = (props: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = props.indeterminate ?? false;
    }
  }, [props.indeterminate]);

  return (
    <input
      ref={inputRef}
      type="checkbox"
      {...props}
      onChange={(e) => props.onChange(e.target.checked)}
    />
  );
};
