import type { ComponentType } from "react";

export type ComponentDetailPageViewProps = {
  name: string;
  content: string;
  ExampleComponent?: ComponentType | null;
};

export const ComponentDetailPageView = (
  props: ComponentDetailPageViewProps
) => (
  <>
    <h1>{props.name}</h1>
    <pre>{props.content}</pre>
    {props.ExampleComponent && (
      <div style={{ marginTop: "40px" }}>
        <props.ExampleComponent />
      </div>
    )}
  </>
);
