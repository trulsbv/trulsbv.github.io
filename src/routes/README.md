# Type-Safe Routing System

This project implements a fully type-safe routing system using React Router with explicit route definitions and TypeScript.

## 🏗️ Architecture

### Route Definitions (`types.ts`)

All routes are defined as constants in `src/routes/types.ts`:

```typescript
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",
  CONTACT: "/contact",
} as const;
```

### Route Parameters

Type-safe parameter definitions:

```typescript
export interface BlogPostParams {
  slug: string;
}

export interface RouteParams {
  [ROUTES.BLOG_POST]: BlogPostParams;
}
```

### Route Configuration (`config.tsx`)

Each route is configured with its component, title, and metadata:

```typescript
export const routeConfig: RouteConfig[] = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    title: "Truls.dev - Software Engineer",
    description: "Personal blog and portfolio...",
  },
  // ... more routes
];
```

## 🎯 Usage

### Basic Navigation

```typescript
import { useTypedNavigate } from "../routes/hooks";

const MyComponent = () => {
  const { navigate, goHome, goAbout } = useTypedNavigate();

  // Type-safe navigation
  navigate(ROUTES.BLOG_POST, { slug: "my-post" });
  goHome(); // Convenience method
};
```

### Type-Safe Links

```typescript
import { TypedLink, BlogPostLink } from '../components/TypedLink';

// Generic typed link
<TypedLink to={ROUTES.BLOG_POST} params={{ slug: 'my-post' }}>
  Read Post
</TypedLink>

// Convenience components
<BlogPostLink slug="my-post">Read Post</BlogPostLink>
<HomeLink>Go Home</HomeLink>
```

### Location Detection

```typescript
import { useTypedLocation } from "../routes/hooks";

const MyComponent = () => {
  const { isHome, isAbout, isBlog, isContact, isBlogPost } = useTypedLocation();

  if (isHome) {
    return <HomeContent />;
  }
};
```

## 🔧 Adding New Routes

1. **Define the route constant** in `types.ts`:

```typescript
export const ROUTES = {
  // ... existing routes
  NEW_ROUTE: "/new-route",
  NEW_ROUTE_WITH_PARAMS: "/new-route/:id",
} as const;
```

2. **Add parameter types** if needed:

```typescript
export interface NewRouteParams {
  id: string;
}

export interface RouteParams {
  // ... existing params
  [ROUTES.NEW_ROUTE_WITH_PARAMS]: NewRouteParams;
}
```

3. **Create the page component**:

```typescript
// src/pages/NewRoutePage.tsx
const NewRoutePage = () => {
  return <div>New Route Content</div>;
};

export default NewRoutePage;
```

4. **Add to route configuration** in `config.tsx`:

```typescript
import NewRoutePage from "../pages/NewRoutePage";

export const routeConfig: RouteConfig[] = [
  // ... existing routes
  {
    path: ROUTES.NEW_ROUTE,
    component: NewRoutePage,
    title: "New Route - Truls.dev",
    description: "Description for the new route",
  },
];
```

5. **Add navigation items** if needed:

```typescript
export const navigationItems = [
  // ... existing items
  {
    label: "New Route",
    path: ROUTES.NEW_ROUTE,
  },
];
```

## 🧪 Testing

The routing system includes comprehensive tests:

```typescript
// Test route constants
expect(ROUTES.HOME).toBe("/");

// Test parameter replacement
const link = createTypedLink(ROUTES.BLOG_POST, { slug: "test" });
expect(link).toBe("/blog/test");

// Test navigation hooks
const { navigate } = useTypedNavigate();
expect(navigate).toBeDefined();
```

## 🎨 Benefits

### Type Safety

- **Compile-time route validation**: TypeScript ensures all routes exist
- **Parameter validation**: Required parameters are enforced at compile time
- **Navigation safety**: Cannot navigate to non-existent routes

### Developer Experience

- **IntelliSense support**: Full autocomplete for routes and parameters
- **Refactoring safety**: Renaming routes updates all references
- **Error prevention**: Catches routing errors before runtime

### Maintainability

- **Centralized configuration**: All routes defined in one place
- **Consistent structure**: Standardized route configuration
- **Easy testing**: Type-safe testing utilities included

## 📁 File Structure

```
src/routes/
├── types.ts          # Route definitions and types
├── config.tsx        # Route configuration
├── hooks.ts          # Type-safe navigation hooks
├── Router.tsx        # Main router component
├── __tests__/        # Routing tests
└── README.md         # This documentation
```

## 🔗 Integration

The routing system integrates with:

- **React Router**: For actual routing functionality
- **Styled Components**: For styled navigation components
- **TypeScript**: For type safety throughout
- **Testing**: Playwright and React Testing Library for comprehensive testing

## 🚀 Best Practices

1. **Always use typed routes**: Never hardcode route strings
2. **Use convenience methods**: Prefer `goHome()` over `navigate(ROUTES.HOME)`
3. **Validate parameters**: Ensure required parameters are provided
4. **Test route changes**: Update tests when adding new routes
5. **Document new routes**: Add descriptions for SEO and accessibility

This routing system provides a robust, type-safe foundation for navigation throughout the application while maintaining excellent developer experience and code quality.
