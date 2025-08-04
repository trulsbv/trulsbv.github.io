import { Route } from "react-router-dom";
import { ComponentsPage } from "./ComponentsPage";
import { ComponentDetailPage } from "./detail/ComponentDetailPage";

export const componentsRoutes = (
  <>
    <Route path="components" element={<ComponentsPage />} />
    <Route path="components/:componentName" element={<ComponentDetailPage />} />
  </>
);
