# trulsbv.dev

Personal site built with React, TypeScript and Vite. Showcases experiments and reusable UI components.

## Tech

- React 19, TypeScript, Vite
- styled-components
- Playwright (E2E), Storybook

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- dev: start local server
- build: production build
- preview: preview build
- storybook: component docs
- test:e2e: run Playwright tests

## Project notes

- Colors and design tokens live in `src/theme/tokens.ts` and are injected as CSS vars at runtime via `injectCssVars`.
- Global styles: `src/index.css`
- Main layout: `src/components/BaseLayout.tsx`

## GitHub Pages Routing

This project uses the "404 Redirect Hack" to handle client-side routing on GitHub Pages. The `404.html` file in the root directory redirects all subroute requests back to `index.html`, allowing React Router to handle the routing properly.

### How it works:

1. When a user directly accesses a subroute (e.g., `/components`), GitHub Pages returns a 404
2. The `404.html` file captures the original URL path
3. It redirects to `index.html` while preserving the path information
4. React Router takes over and displays the correct page

This ensures that direct links to subroutes work correctly and browser refresh works on any page.

## License

MIT © Truls Vidnes
