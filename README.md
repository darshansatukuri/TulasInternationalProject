# Tulas International School — Homepage Redesign

A responsive, editorial-style homepage concept for Tulas International School. It retains the school's public-facing message about curiosity, creativity, and learning as an adventure, with a fresh visual system and clear admissions calls to action.

## Features

- Scroll-triggered section reveals, a hero image entrance, and card hover motion using Framer Motion.
- Smooth animated reading progress bar using Framer Motion scroll values.
- Light/dark theme toggle.
- Responsive mobile navigation and layouts for mobile, tablet, and desktop.
- Reduced-motion support and keyboard-visible focus states.

## Tech stack

- React 18
- Vite
- Framer Motion
- CSS (custom properties, responsive layouts, and motion)

## Getting started

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

Create a production build with:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── BrandMark.jsx
│   ├── Reveal.jsx
│   └── SiteHeader.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

The homepage sections and Framer Motion scroll progress logic live in `App.jsx`. Shared header, brand, and motion reveal behavior are separated into reusable components.

## Deployment

The project can be deployed to Vercel, Netlify, or GitHub Pages. Use `npm run build` as the build command and `dist` as the output directory.

## Image and brand note

The school name and homepage copy are based on the public Tulas International School website. The photographic images in this concept are loaded from Unsplash and can be replaced with approved school photography before launch.
