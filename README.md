# Portfolio

A minimal, responsive portfolio built with React, TypeScript, and CSS.

## Tech Stack

-   **React 19** - UI framework
-   **TypeScript** - Type safety
-   **React Router v6** - Client-side routing
-   **Vite** - Build tool & dev server
-   **CSS** - Styling (no frameworks)

## Project Structure

```
src/
├── components/
│   ├── Header/       # Navigation header
│   ├── Footer/       # Site footer with social links
│   └── Layout/       # Page layout wrapper
├── pages/
│   ├── Home/         # Landing page
│   ├── About/        # Bio, skills, experience
│   ├── Work/         # Project showcase
│   └── Contact/      # Contact information
├── App.tsx           # Router setup
├── index.css         # Global styles & CSS variables
└── main.tsx          # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

-   Single Page Application with client-side routing
-   Responsive design (mobile-first)
-   Dark/light theme via `prefers-color-scheme`
-   Component-based architecture with co-located styles
-   CSS custom properties for theming

## Customization

### Content

Edit the pages in `src/pages/` to update your information:

-   `Home/Home.tsx` - Name, title, intro
-   `About/About.tsx` - Bio, skills, experience
-   `Work/Work.tsx` - Projects array
-   `Contact/Contact.tsx` - Email, social links

### Styling

Global CSS variables are in `src/index.css`:

```css
:root {
  --font-heading: ...
  --font-body: ...
  --color-bg: ...
  --color-text: ...
  /* etc. */
}
```
