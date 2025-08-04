import type { Location } from "react-router-dom";

export type ComponentDetailPageViewProps = {
  location: Location;
};

export const ComponentDetailPageView = (
  props: ComponentDetailPageViewProps
) => <>Example detail {JSON.stringify(props)}</>;
