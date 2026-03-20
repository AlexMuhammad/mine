# alexdev.dev

My personal portfolio website built with Astro, React, and Tailwind CSS.

## Features

- **Internationalization** — English and Indonesian (`en` / `id`)
- **Dark/Light Mode** — Theme toggle with system preference detection
- **Responsive Design** — Mobile-first layout with Tailwind CSS v4
- **Sections** — Hero, About, Skills, Experience, Education, Achievements, Projects
- **Floating Navigation** — Smooth section-based navigation
- **Sitemap** — Auto-generated via `@astrojs/sitemap`

## Tech Stack

- [Astro](https://astro.build) v6
- [React](https://react.dev) v19
- [Tailwind CSS](https://tailwindcss.com) v4
- [Lucide Icons](https://lucide.dev)
- TypeScript

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Requires Node.js >= 22.12.0

## Project Structure

```
src/
├── components/     # Astro & React components
├── i18n/           # Translations and data definitions
├── layouts/        # Page layouts
├── pages/          # Routes (en at /, id at /id/)
└── styles/         # Global styles
public/
├── fonts/          # Custom fonts
└── logos/          # Company/tech logos
```

## License

All rights reserved.
