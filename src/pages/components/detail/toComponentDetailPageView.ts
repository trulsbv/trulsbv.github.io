import type { Location } from "react-router-dom";
import type { ComponentDetailPageViewProps } from "./ComponentDetailPageView";
import { getComponentContent } from "./componentDictionary";

const toTitleCase = (str: string) => {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const toComponentDetailPageViewProps = ({
  location,
}: {
  location: Location;
}): ComponentDetailPageViewProps => {
  const name = toTitleCase(location.pathname.split("/").pop() ?? "");
  return {
    name,
    content: getComponentContent(name) ?? "",
  };
};
