// Route path definitions
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",
  CONTACT: "/contact",
} as const;

// Route parameter types
export interface BlogPostParams {
  slug: string;
}

// Route parameter mapping
export interface RouteParams {
  [ROUTES.BLOG_POST]: BlogPostParams;
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
  title: string;
  description?: string;
}

// Navigation item type
export interface NavItem {
  label: string;
  path: RoutePath;
  isActive?: boolean;
}
