# Truls.dev - Personal Blog & Portfolio

Welcome to my personal blog and portfolio website! I'm Truls, a 24-year-old software engineer based in Oslo, Norway. This website showcases my work, thoughts, and experiences in software development.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite
- **Beautiful UI**: Styled with styled-components and modern design principles
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Testing**: Comprehensive testing with Playwright and Storybook
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Styled Components
- **Testing**:
  - Unit Tests: React Testing Library (when needed)
  - E2E Tests: Playwright
  - Component Testing: Storybook
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/trulsbv/trulsbv.github.io.git
cd trulsbv.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

### Unit Tests

```bash
# Run all unit tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### E2E Tests

```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── BlogPosts.tsx   # Blog posts display
│   ├── Footer.tsx      # Footer with contact info
│   └── __tests__/      # Component tests
├── test/               # Test setup files
├── stories/            # Storybook stories
└── main.tsx           # App entry point

tests/
└── e2e/               # End-to-end tests

.storybook/            # Storybook configuration
```

## 🎨 Design System

The website uses a modern design system with:

- **Color Palette**: Purple gradient background with white text
- **Typography**: Inter font family for clean, readable text
- **Components**: Glassmorphism effects with backdrop blur
- **Animations**: Smooth transitions and hover effects

## 📝 Blog Posts

The blog section currently displays mock posts. To add real blog posts:

1. Create a new data structure for blog posts
2. Add markdown support for content
3. Implement a CMS or static site generation

## 🚀 Deployment

This site is configured for GitHub Pages deployment. The repository name `trulsbv.github.io` will automatically make it available at `https://trulsbv.github.io`.

To deploy:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests

### Code Style

The project uses:

- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** for code formatting (via ESLint)

## 📞 Contact

- **Email**: hello@truls.dev
- **Location**: Oslo, Norway
- **GitHub**: [@trulsbv](https://github.com/trulsbv)
- **LinkedIn**: [trulsbv](https://linkedin.com/in/trulsbv)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ in Oslo, Norway
