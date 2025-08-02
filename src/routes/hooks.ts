import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "./types";
import type { RoutePath, RouteParams } from "./types";

// Type-safe navigation hook
export const useTypedNavigate = () => {
  const navigate = useNavigate();

  return {
    navigate: <T extends RoutePath>(
      path: T,
      params?: T extends keyof RouteParams ? RouteParams[T] : never
    ) => {
      let finalPath = path;

      // Replace parameters in the path
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          finalPath = finalPath.replace(`:${key}`, value) as T;
        });
      }

      navigate(finalPath);
    },

    // Convenience methods for common routes
    goHome: () => navigate(ROUTES.HOME),
    goAbout: () => navigate(ROUTES.ABOUT),
    goBlog: () => navigate(ROUTES.BLOG),
    goContact: () => navigate(ROUTES.CONTACT),
    goToBlogPost: (slug: string) =>
      navigate(ROUTES.BLOG_POST.replace(":slug", slug)),
  };
};

// Type-safe location hook
export const useTypedLocation = () => {
  const location = useLocation();

  return {
    ...location,
    isHome: location.pathname === ROUTES.HOME,
    isAbout: location.pathname === ROUTES.ABOUT,
    isBlog: location.pathname === ROUTES.BLOG,
    isContact: location.pathname === ROUTES.CONTACT,
    isBlogPost:
      location.pathname.startsWith("/blog/") && location.pathname !== "/blog",
  };
};

// Type-safe link generation
export const createTypedLink = <T extends RoutePath>(
  path: T,
  params?: T extends keyof RouteParams ? RouteParams[T] : never
): string => {
  let finalPath = path;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      finalPath = finalPath.replace(`:${key}`, value) as T;
    });
  }

  return finalPath;
};
