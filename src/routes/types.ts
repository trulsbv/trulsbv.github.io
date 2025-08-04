// Route path definitions
export const ROUTES = {
  HOME: "/",
  COMPONENTS: "/components",
  COMPONENT_DETAIL: "/components/:componentName",
} as const;

// Route parameter types
export interface ComponentDetailParams {
  componentName: string;
}

// Route parameter mapping
export interface RouteParams {
  [ROUTES.COMPONENT_DETAIL]: ComponentDetailParams;
}

// Route path type
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

// Type-safe route generation
export type TypedRoute<T extends RoutePath> = T extends keyof RouteParams
  ? { path: T; params: RouteParams[T] }
  : { path: T; params?: never };

// Route configuration type
export interface RouteConfig {
  path: RoutePath;
  component: React.ComponentType;
}
