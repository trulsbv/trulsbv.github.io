import { useLocation } from "react-router-dom";
import { ComponentDetailPageView } from "./ComponentDetailPageView";
import { toComponentDetailPageViewProps } from "./toComponentDetailPageView";
import { getExampleComponent } from "./exampleDictionary";

export const ComponentDetailPage = () => {
  const location = useLocation();
  const props = toComponentDetailPageViewProps({ location });
  const ExampleComponent = getExampleComponent(props.name);

  return (
    <ComponentDetailPageView {...props}>
      {ExampleComponent && <ExampleComponent />}
    </ComponentDetailPageView>
  );
};
