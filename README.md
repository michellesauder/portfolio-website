# Portfolio Websitec

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing end-to-end scalable solutions with backend depth and AI integrations.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with `next-mdx-remote`
- **Testing**: Playwright
- **Component Documentation**: Storybook
- **Visual Testing**: Chromatic
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## 🛠️ Development Workflow

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Quick Setup

```bash
# Run the automated setup script
chmod +x setup.sh
./setup.sh

# Or manual setup:
npm install
npx playwright install
npx husky install
```

### Getting Started

```bash
# Start development server
npm run dev

# Start Storybook
npm run storybook

# Open http://localhost:3000 (app) or http://localhost:6006 (storybook)
```

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server
npm run storybook        # Start Storybook dev server

# Building
npm run build            # Build Next.js app
npm run build-storybook  # Build Storybook for production

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check Prettier formatting
npm run type-check       # Run TypeScript type checking

# Testing
npm run test             # Run Playwright tests
npm run test:ui          # Run tests with UI
npm run test:headed      # Run tests in headed mode

# Performance & Analysis
npm run analyze          # Analyze bundle size
npm run analyze:server   # Analyze server bundle
npm run analyze:browser  # Analyze browser bundle
npm run lighthouse       # Run Lighthouse audit
```

## 📚 Component Development with Storybook

This project uses Storybook for component development and documentation:

```bash
# Start Storybook
npm run storybook

# Open http://localhost:6006
```

### Story Structure

- **Components/CTA**: Button component with all variants
- **Components/Card**: Card component with different use cases
- **Components/NavBar**: Navigation component

### Adding New Stories

1. Create a `.stories.tsx` file next to your component
2. Follow the existing story patterns
3. Use `tags: ['autodocs']` for automatic documentation

## 🎨 Visual Testing with Chromatic

Chromatic provides visual regression testing and design system management:

```bash
# Install Chromatic CLI (if not already installed)
npm install -g chromatic

# Run visual tests
npx chromatic --project-token=YOUR_PROJECT_TOKEN
```

## 🔧 Code Quality & Git Hooks

### Pre-commit Hooks

The project uses Husky and lint-staged to ensure code quality:

- **ESLint**: Automatically fixes linting issues
- **Prettier**: Formats code consistently
- **TypeScript**: Type checking

### Git Workflow

```bash
# Pre-commit hooks run automatically
git add .
git commit -m "feat: add new component"

# Manual quality checks
npm run lint:fix
npm run format
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects pages
│   └── services/       # Services page
├── components/         # Reusable components
│   ├── *.stories.tsx   # Storybook stories
│   └── index.ts        # Component exports
├── content/            # MDX content files
├── lib/                # Utility functions
└── styles/             # Global styles

.storybook/             # Storybook configuration
.husky/                 # Git hooks
tests/                  # Playwright tests
```

## 🎯 Design System

### Colors
- Primary: Custom brand colors
- Semantic: Success, warning, error states
- Neutral: Grays for text and backgrounds

### Typography
- Font: Inter (Google Fonts)
- Scale: Responsive typography scale
- Weights: Regular, medium, semibold, bold

### Components
- **CTA**: Call-to-action buttons with variants
- **Card**: Content containers with hover effects
- **Section**: Page sections with consistent spacing
- **NavBar**: Responsive navigation
- **Footer**: Site footer with links

## ⚡ Performance Optimizations

### Bundle Analysis
- **Bundle Analyzer**: Visualize bundle size and dependencies
- **Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP/AVIF formats, responsive images

### Build Optimizations
- **Turbopack**: Fast bundling in development
- **SWC**: Fast compilation and minification
- **Console Removal**: Automatic console.log removal in production
- **Package Optimization**: Optimized imports for Lucide React

### Security Headers
- **CSP**: Content Security Policy for SVG images
- **Security Headers**: X-Frame-Options, X-Content-Type-Options
- **Permissions Policy**: Restrictive permissions for camera/microphone

### Caching Strategy
- **Static Assets**: 1-year cache for images
- **API Routes**: Appropriate cache headers
- **CDN Ready**: Optimized for Vercel Edge Network

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect GitHub repo for automatic deployments
```

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🧪 Testing Strategy

### Unit Testing
- Component stories in Storybook
- Visual regression testing with Chromatic

### Integration Testing
- Playwright for end-to-end testing
- Cross-browser compatibility

### Manual Testing
- Responsive design testing
- Accessibility testing
- Performance testing

## 📈 Performance

- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **SEO**: Meta tags, Open Graph, sitemap
- **Accessibility**: WCAG AA compliant
- **Bundle Size**: Optimized with Next.js

## 🔍 SEO Features

- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Sitemap generation
- Robots.txt
- Structured data

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `npm run lint:fix && npm run format`
5. Add/update stories if adding components
6. Commit with conventional commits
7. Push and create a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Support

For questions or support, please open an issue or contact [your-email@example.com](mailto:your-email@example.com)