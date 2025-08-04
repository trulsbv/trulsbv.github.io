export type ComponentDetailPageViewProps = {
  name: string;
  content: string;
};

export const ComponentDetailPageView = (
  props: ComponentDetailPageViewProps
) => (
  <>
    <h1>{props.name}</h1>
    <pre>{props.content}</pre>
  </>
);
