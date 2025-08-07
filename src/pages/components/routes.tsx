import { Route } from "react-router-dom";
import { ComponentsPage } from "./ComponentsPage";
import { ComponentDetailPage } from "./detail/ComponentDetailPage";

export const componentsRoutes = (
  <Route path="components" element={<ComponentsPage />} handle={{ title: "components" }}>
    <Route
      path=":componentName"
      element={<ComponentDetailPage />}
      handle={{ getTitle: (params: { componentName: string }) => `component - ${params.componentName}` }}
    />
  </Route>
);
