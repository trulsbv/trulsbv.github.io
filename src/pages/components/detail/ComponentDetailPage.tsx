import { useLocation } from "react-router-dom";
import { ComponentDetailPageView } from "./ComponentDetailPageView";
import { toComponentDetailPageViewProps } from "./toComponentDetailPageView";
import { getExampleComponents } from "./exampleDictionary";

export const ComponentDetailPage = () => {
  const location = useLocation();
  const props = toComponentDetailPageViewProps({ location });
  const examples = getExampleComponents(props.name);

  return (
    <ComponentDetailPageView {...props}>
      {examples.length > 0 ? (
        <div style={{ display: "grid", gap: 24 }}>
          {examples.map(({ title, Component }) => (
            <section key={title}>
              <h2 style={{ marginBottom: 8 }}>{title}</h2>
              <Component />
            </section>
          ))}
        </div>
      ) : null}
    </ComponentDetailPageView>
  );
};
