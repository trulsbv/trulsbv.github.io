import { type RouteObject } from "react-router-dom";
import { ComponentsPage } from "./ComponentsPage";
import { ComponentDetailPage } from "./detail/ComponentDetailPage";
import { AdvancedExamplesPage } from "./AdvancedExamplesPage";

export const componentsRoutes: RouteObject = {
  path: "components",
  element: <ComponentsPage />,
  handle: { title: "components" },
  children: [
    {
      path: ":componentName",
      element: <ComponentDetailPage />,
      handle: {
        getTitle: (params: { componentName: string }) =>
          `component - ${params.componentName}`,
      },
    },
    {
      path: "advanced",
      element: <AdvancedExamplesPage />,
      handle: { title: "components - advanced" },
    },
  ],
};
