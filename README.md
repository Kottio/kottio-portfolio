# Thomas Cottiaux Portfolio

A high-performance, accessible portfolio website built with Next.js 15, showcasing full-stack development expertise and data consulting services.

🔗 **Live Site**: [https://www.kottio.dev](https://www.kottio.dev)

## 🚀 Lighthouse Scores

![Performance: 97](https://img.shields.io/badge/Performance-97-green)
![Accessibility: 96](https://img.shields.io/badge/Accessibility-96-green)
![Best Practices: 100](https://img.shields.io/badge/Best%20Practices-100-brightgreen)
![SEO: 100](https://img.shields.io/badge/SEO-100-brightgreen)

- **Performance**: 97/100
- **Accessibility**: 96/100 (WCAG 2.1 AA compliant)
- **Best Practices**: 100/100
- **SEO**: 100/100

## ✨ Key Features

### Performance Optimizations
- **Next.js Image Optimization**: Automatic image optimization with WebP format
- **Font Optimization**: Google Fonts with `display: swap` to prevent render-blocking
- **Static Site Generation (SSG)**: All pages pre-rendered at build time for instant loads
- **Code Splitting**: Automatic route-based code splitting
- **Core Web Vitals**: Optimized for LCP, FID, and CLS metrics

### Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **ARIA Labels**: Comprehensive aria-labels on interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios (4.5:1)
- **Screen Reader Support**: Descriptive alt texts and labels
- **Focus Management**: Visible focus indicators on all interactive elements

### SEO Optimization
- **Structured Data**: JSON-LD schema for rich search results
- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Sitemap.xml**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling directives
- **Semantic Markup**: Article, section, and nav tags throughout

### Mobile Responsiveness
- **Mobile-First Design**: Optimized for all screen sizes
- **Touch-Friendly**: Large tap targets (minimum 48x48px)
- **Responsive Images**: Multiple image sizes for different viewports
- **Hamburger Menu**: Full-screen overlay navigation on mobile

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Fast Marquee](https://www.react-fast-marquee.com/)** - Smooth scrolling marquee

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/)** - Fast bundler for development

### Fonts
- **[Nunito](https://fonts.google.com/specimen/Nunito)** - Primary font
- **[Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)** - Display font

## 📁 Project Structure

```
kottio-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── blog/                # Blog routes
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── OffersSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── StackSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   ├── PhotoCtaSection.tsx
│   │   └── Footer.tsx
│   └── ui/                  # Reusable UI components
│       ├── ProjectCard.tsx
│       └── sectionHeader.tsx
├── lib/
│   ├── fonts.ts             # Font configurations
│   ├── types.ts             # TypeScript types
│   ├── techStack.ts         # Tech stack data
│   ├── companies.ts         # Client logos
│   └── project.json         # Project data
├── public/                   # Static assets
│   ├── LandingPage/         # Background images
│   ├── logos/               # Company logos
│   └── projects/            # Project screenshots
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design Patterns

### Rendering Strategy
- **Static Site Generation (SSG)**: All pages are statically generated at build time
- **No Client-Side Data Fetching**: Pure static content for maximum performance
- **Incremental Static Regeneration (ISR)**: Ready for dynamic content when needed

### Component Architecture
- **Server Components**: Default for all components
- **Client Components**: Only where needed (mobile menu, expandable sections)
- **Composition Pattern**: Sections composed from smaller UI components

### Styling Approach
- **Utility-First CSS**: Tailwind CSS for rapid development
- **Responsive Design**: Mobile-first breakpoints (sm, md, lg, xl, 2xl)
- **Custom Properties**: CSS variables for theming

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kottio/kottio-portfolio.git

# Navigate to project directory
cd kottio-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📊 Performance Details

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Image Optimization
- Automatic WebP conversion
- Responsive image sizing
- Lazy loading for off-screen images
- Priority loading for above-the-fold images

### Font Optimization
- Google Fonts with `font-display: swap`
- Self-hosted via Next.js font system
- Preloaded critical fonts

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible indicators
- Color contrast ratios > 4.5:1
- Alt text on all images
- Responsive text sizing

### Testing
Test accessibility with:
```bash
# Chrome DevTools Lighthouse
# Firefox Accessibility Inspector
# WAVE browser extension
# axe DevTools
```

## 🔍 SEO Implementation

### On-Page SEO
- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags for social media
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD)

### Technical SEO
- XML sitemap generation
- Robots.txt configuration
- 100% crawlable pages
- Mobile-friendly responsive design
- Fast page load times

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints used */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## 🧪 Testing

### Manual Testing
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Accessibility testing with screen readers
- Performance testing with Lighthouse

### Automated Testing
Ready for integration:
- Unit tests with Vitest
- E2E tests with Playwright
- Visual regression with Chromatic

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel deploy --prod
```

### Other Platforms
- Compatible with any hosting platform that supports Next.js
- Static export available if needed

## 🔐 Environment Variables

No environment variables required for the current build.

## 📝 Content Management

### Projects
Edit `/lib/project.json` to add/modify projects:
```json
{
  "name": "Project Name",
  "tagline": "Short description",
  "description": "Long description",
  "tech": ["React", "Next.js"],
  "links": {
    "github": "https://github.com/...",
    "sheet": "https://..."
  },
  "logo": "/projects/logo.png",
  "screenshot": "/projects/screenshot.png"
}
```

### Tech Stack
Edit `/lib/techStack.ts` to update technologies:
```typescript
export const techStackDev = [
  { name: "React", icon: "react" },
  // ...
]
```

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Open an issue
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📄 License

© 2025 Thomas Cottiaux. All rights reserved.

## 📧 Contact

- **Website**: [https://www.kottio.dev](https://www.kottio.dev)
- **Email**: thomas.cottiaux@gmail.com
- **GitHub**: [@Kottio](https://github.com/Kottio)
- **LinkedIn**: [Thomas Cottiaux](https://www.linkedin.com/in/thomas-cottiaux-9160aa175/)

---

**Built with ❤️ using Next.js 15 and React 19**
