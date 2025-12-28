import Button from "./Button/Button";

type SliderControlsProps = {
  text: string;
  currentValue: number;
  setValue: (value: number) => void;
};

export const SliderControls = (props: SliderControlsProps) => (
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
