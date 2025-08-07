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

## License
MIT © Truls Vidnes