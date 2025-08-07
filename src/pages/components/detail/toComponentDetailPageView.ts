import type { Location } from "react-router-dom";
import type { ComponentDetailPageViewProps } from "./ComponentDetailPageView";
import { getComponentContent } from "./componentDictionary";
import { getExampleComponent } from "./examples/exampleDictionary";

const toTitleCase = (str: string) => {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

// Extract component name from URL path
const extractComponentName = (pathname: string): string => {
  const pathSegment = pathname.split("/").pop() ?? "";
  // Convert to title case for display
  const displayName = toTitleCase(pathSegment);
  // For component lookup, try to match the actual component filename
  // This handles cases where URL might be "modal" but component is "Modal"
  return displayName;
};

export const toComponentDetailPageViewProps = ({
  location,
}: {
  location: Location;
}): ComponentDetailPageViewProps => {
  const name = extractComponentName(location.pathname);
  return {
    name,
    content: getComponentContent(name) ?? "",
    ExampleComponent: getExampleComponent(name),
  };
};
