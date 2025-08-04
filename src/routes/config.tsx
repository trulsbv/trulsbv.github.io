import { ROUTES } from "./types";
import type { RouteConfig } from "./types";
import BaseLayout from "../components/BaseLayout";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";
import ComponentDetailPage from "../pages/ComponentDetailPage";

export const routeConfig: RouteConfig[] = [
  {
    path: ROUTES.BASE,
    component: BaseLayout,
  },
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.COMPONENTS,
    component: ComponentsPage,
  },
  {
    path: ROUTES.COMPONENT_DETAIL,
    component: ComponentDetailPage,
  },
];

// Navigation items for the header
export const navigationItems = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "Components",
    path: ROUTES.COMPONENTS,
  },
] as const;
