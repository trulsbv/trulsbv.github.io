import { Link as RouterLink } from "react-router-dom";
import type { LinkProps as RouterLinkProps } from "react-router-dom";
import { ROUTES } from "../routes/types";
import type { RoutePath, RouteParams } from "../routes/types";
import { createTypedLink } from "../routes/hooks";

interface TypedLinkProps<T extends RoutePath>
  extends Omit<RouterLinkProps, "to"> {
  to: T;
  params?: T extends keyof RouteParams ? RouteParams[T] : never;
}

export const TypedLink = <T extends RoutePath>({
  to,
  params,
  ...props
}: TypedLinkProps<T>) => {
  const href = createTypedLink(to, params);

  return <RouterLink to={href} {...props} />;
};

// Convenience components for common routes
export const HomeLink = (props: Omit<RouterLinkProps, "to">) => (
  <RouterLink to={ROUTES.HOME} {...props} />
);

export const AboutLink = (props: Omit<RouterLinkProps, "to">) => (
  <RouterLink to={ROUTES.ABOUT} {...props} />
);

export const BlogLink = (props: Omit<RouterLinkProps, "to">) => (
  <RouterLink to={ROUTES.BLOG} {...props} />
);

export const ContactLink = (props: Omit<RouterLinkProps, "to">) => (
  <RouterLink to={ROUTES.CONTACT} {...props} />
);

export const BlogPostLink = ({
  slug,
  ...props
}: { slug: string } & Omit<RouterLinkProps, "to">) => (
  <RouterLink to={ROUTES.BLOG_POST.replace(":slug", slug)} {...props} />
);
