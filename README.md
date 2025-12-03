# Portfolio Template

A minimal, responsive portfolio template built with React, TypeScript, and CSS. Clone it, edit a few files, and you have your own portfolio.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Customization

All your personal content lives in `src/data/`. Edit these files to make it yours:

### `siteConfig.ts` — Personal Info

```ts
export const siteConfig = {
    name: "Your Name",
    initials: "YN",
    title: "Your Title",
    email: "you@email.com",
    headline: "Your Name",
    tagline: "Your Title",
    description: "A short intro about yourself...",
    // ...
};
```

### `projects.ts` — Your Work

```ts
export const projects = [
    {
        id: "project-1",
        title: "Project Name",
        description: "What it does...",
        tags: ["React", "TypeScript"],
        link: "https://github.com/...",
    },
    // Add more projects...
];
```

### `experience.ts` — Work History

```ts
export const experience = [
    {
        id: "job-1",
        title: "Your Role",
        company: "Company Name",
        startDate: "2022",
        endDate: "Present",
    },
    // Add more jobs...
];
```

### `skills.ts` — Your Skills

```ts
export const skills = ["TypeScript", "React", "Node.js", "Python"];
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── Layout/
│   └── ThemeToggle/
├── context/           # React context (theme)
├── data/              # ✏️ YOUR CONTENT GOES HERE
│   ├── siteConfig.ts  # Name, bio, social links
│   ├── projects.ts    # Portfolio projects
│   ├── experience.ts  # Work history
│   └── skills.ts      # Skills list
├── pages/             # Route pages
│   ├── Home/
│   ├── About/
│   ├── Work/
│   └── Contact/
├── App.tsx
├── index.css          # Global styles & theme
└── main.tsx
```

## Features

-   Single Page Application with React Router
-   Dark/light mode toggle with localStorage persistence
-   Fully responsive (mobile-first)
-   Centralized content in `src/data/`
-   Component-based architecture
-   CSS custom properties for theming
-   TypeScript throughout

## Styling

Theme colors are in `src/index.css`. Edit the CSS variables to change the look:

```css
[data-theme="dark"] {
    --color-bg: #0a0a0a;
    --color-text: #fafafa;
    /* ... */
}

[data-theme="light"] {
    --color-bg: #fafafa;
    --color-text: #0a0a0a;
    /* ... */
}
```

## Tech Stack

-   **React 19** — UI framework
-   **TypeScript** — Type safety
-   **React Router v6** — Client-side routing
-   **Vite** — Build tool & dev server
-   **CSS** — Styling (no frameworks)

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## License

MIT — use it however you want.
