export type ComponentDetailPageViewProps = {
  name: string;
  content: string;
};

export const ComponentDetailPageView = (
  props: React.PropsWithChildren<ComponentDetailPageViewProps>
) => (
  <>
    <h1>{props.name}</h1>
    {props.children}
    <pre>{props.content}</pre>
  </>
);
