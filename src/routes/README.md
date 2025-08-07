# Routing Structure
The router is created programmatically in `Router.tsx` and consumed by `App.tsx`.
This project uses a hierarchical routing structure where routing logic is organized by feature/page sections.

## Structure

```
src/routes/
├── Router.tsx           # Main router that imports all route subtrees
├── routeSubtrees.tsx    # Combines all route subtrees
├── types.ts            # Route type definitions
└── README.md           # This file

src/pages/
├── home/
│   ├── routes.tsx      # Home page routes
│   └── HomePage.tsx
└── components/
    ├── routes.tsx      # Components page routes (includes detail routes)
    ├── ComponentsPage.tsx
    └── detail/
        ├── ComponentDetailPage.tsx
        └── ComponentDetailPageView.tsx
```

## How it works

1. **Page-level routes**: Each page section exports its own routes in a `routes.tsx` file
2. **Route subtrees**: The main `routeSubtrees.tsx` file imports and combines all page-level routes
3. **Main router**: The `Router.tsx` imports the combined subtrees and renders them within the base layout

## Adding new routes

To add a new page section:

1. Create a new directory under `src/pages/` for your feature
2. Create a `routes.tsx` file in that directory that exports your routes
3. Import and add your routes to `src/routes/routeSubtrees.tsx`

Example:

```tsx
// src/pages/blog/routes.tsx
import { Route } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { BlogPostPage } from "./BlogPostPage";

export const blogRoutes = (
  <>
    <Route path="blog" element={<BlogPage />} />
    <Route path="blog/:postId" element={<BlogPostPage />} />
  </>
);
```

Then add to `routeSubtrees.tsx`:

```tsx
import { blogRoutes } from "../pages/blog/routes";

export const routeSubtrees = (
  <>
    {homeRoutes}
    {componentsRoutes}
    {blogRoutes}
  </>
);
```

## Benefits

- **Separation of concerns**: Each page section manages its own routes
- **Scalability**: Easy to add new features without cluttering the main router
- **Maintainability**: Routes are co-located with their related components
- **Type safety**: Maintains TypeScript support for route parameters
