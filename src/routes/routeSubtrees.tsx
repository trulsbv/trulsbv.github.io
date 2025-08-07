import { type RouteObject } from "react-router-dom";
import { homeRoutes } from "../pages/home/routes";
import { componentsRoutes } from "../pages/components/routes";

export const routeSubtrees: RouteObject[] = [homeRoutes, componentsRoutes];
