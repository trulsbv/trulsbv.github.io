import { ROUTES } from "./types";
import type { RouteConfig } from "./types";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import BlogPostPage from "../pages/BlogPostPage";
import ContactPage from "../pages/ContactPage";

export const routeConfig: RouteConfig[] = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    title: "Truls.dev - Software Engineer",
    description:
      "Personal blog and portfolio of Truls, a software engineer based in Oslo, Norway.",
  },
  {
    path: ROUTES.ABOUT,
    component: AboutPage,
    title: "About - Truls.dev",
    description:
      "Learn more about Truls, a software engineer passionate about creating meaningful digital experiences.",
  },
  {
    path: ROUTES.BLOG,
    component: BlogPage,
    title: "Blog - Truls.dev",
    description:
      "Thoughts and insights on software development, React, TypeScript, and modern web technologies.",
  },
  {
    path: ROUTES.BLOG_POST,
    component: BlogPostPage,
    title: "Blog Post - Truls.dev",
    description: "Read the latest blog post from Truls.",
  },
  {
    path: ROUTES.CONTACT,
    component: ContactPage,
    title: "Contact - Truls.dev",
    description:
      "Get in touch with Truls for collaborations, opportunities, or just to say hello.",
  },
];

// Navigation items for the header
export const navigationItems = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "About",
    path: ROUTES.ABOUT,
  },
  {
    label: "Blog",
    path: ROUTES.BLOG,
  },
  {
    label: "Contact",
    path: ROUTES.CONTACT,
  },
] as const;
