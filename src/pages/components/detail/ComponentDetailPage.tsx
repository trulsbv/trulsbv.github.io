import { useLocation } from "react-router-dom";
import { ComponentDetailPageView } from "./ComponentDetailPageView";

export const ComponentDetailPage = () => {
  const location = useLocation();

  return <ComponentDetailPageView location={location} />;
};
