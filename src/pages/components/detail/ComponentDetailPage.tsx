import { useLocation } from "react-router-dom";
import { ComponentDetailPageView } from "./ComponentDetailPageView";
import { toComponentDetailPageViewProps } from "./toComponentDetailPageView";

export const ComponentDetailPage = () => {
  const location = useLocation();

  return (
    <ComponentDetailPageView
      {...toComponentDetailPageViewProps({ location })}
    />
  );
};
