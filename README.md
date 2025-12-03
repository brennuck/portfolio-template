# Portfolio Template

A minimal, responsive portfolio template built with React, TypeScript, and CSS. Fork it, edit a few files, and you have your own portfolio.

## Quick Start

### 1. Fork the repo

Click the **Fork** button in the top right of this page to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
```

### 3. Install & run

```bash
npm install
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) and start customizing!

## Customization

All your personal content lives in `src/data/`. Edit these files to make it yours:

### `siteConfig.ts` — Personal Info & Settings

```ts
export const siteConfig = {
    // Personal Info
    name: "Your Name",
    initials: "YN",
    logo: "",                    // Optional: URL to logo image (replaces initials)
    title: "Your Title",
    email: "you@email.com",
    phone: "",                   // Optional: "5551234567"

    // Hero/Home
    headline: "Your Name",
    tagline: "Your Title",
    description: "A short intro about yourself...",

    // About
    bio: ["Paragraph 1...", "Paragraph 2..."],
    aboutImages: [               // Optional: images for About page gallery
        "https://example.com/photo1.jpg",
    ],

    // Contact
    contactIntro: ["Intro paragraph..."],

    // Availability Status (shows in header & contact page)
    availabilityStatus: true,    // true = show, false = hide
    status: "open",              // "searching" | "open" | "closed"
    statusMessage: "",           // Optional custom message

    // Social Links
    social: {
        github: "https://github.com/...",
        linkedin: "https://linkedin.com/in/...",
        twitter: "https://twitter.com/...",  // Optional
    },
};
```

**Status Options:**
| Status | Color | Pulse | Default Label |
|--------|-------|-------|---------------|
| `searching` | 🟢 Green | ✓ Yes | "Actively searching" |
| `open` | 🟡 Yellow | No | "Open to offers" |
| `closed` | 🔴 Red | No | "Closed to offers" |

### `projects.ts` — Your Work

```ts
export const projects = [
    {
        id: "project-1",
        title: "Project Name",
        description: "Short description for listing...",
        fullDescription: ["Longer description...", "More details..."],
        tags: ["React", "TypeScript"],
        link: "https://live-site.com",      // Optional
        github: "https://github.com/...",   // Optional
        images: ["https://..."],            // Optional
        year: "2024",                       // Optional
    },
];
```

### `experience.ts` — Work History

```ts
export const experience = [
    {
        id: "job-1",
        title: "Your Role",
        company: "Company Name",
        description: "Brief description of your work...",  // Shows on home page
        startDate: "2022",
        endDate: "Present",
    },
];
```

### `education.ts` — Education

```ts
export const education = [
    {
        id: "edu-1",
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "University Name",
        startDate: "2016",
        endDate: "2020",
    },
];
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/           # Nav, logo, status indicator
│   ├── Footer/           # Footer with clock
│   ├── DotClock/         # Dot-matrix clock display
│   ├── StatusIndicator/  # Availability status dot
│   ├── ImageGallery/     # Lightbox image gallery
│   ├── ThemeToggle/      # Dark/light mode toggle
│   ├── PageTransition/   # Animated page transitions
│   └── Layout/
├── context/              # React context (theme)
├── data/                 # ✏️ YOUR CONTENT GOES HERE
│   ├── siteConfig.ts     # Name, bio, social links, status
│   ├── projects.ts       # Portfolio projects
│   ├── experience.ts     # Work history
│   └── education.ts      # Education history
├── pages/                # Route pages
│   ├── Home/             # Landing with previews
│   ├── About/            # Bio, experience, education
│   ├── Projects/         # Project listing
│   ├── ProjectDetail/    # Individual project page
│   └── Contact/          # Contact methods
├── App.tsx
├── index.css             # Global styles & theme
└── main.tsx
```

## Features

-   **Single Page Application** with React Router
-   **Dark/light mode** with localStorage persistence
-   **Availability status** indicator — searchng/open/closed
-   **Dot-matrix clock** in footer showing local time
-   **Image gallery** with lightbox for projects & about page
-   **Page transitions** with reduced-motion support
-   **Fully responsive** (mobile-first design)
-   **Logo support** — use image or fall back to initials
-   **TypeScript** throughout

## Styling

Theme colors are in `src/index.css`. The template uses warm charcoal (dark) and warm sand (light) palettes:

```css
/* Dark theme - Warm Charcoal */
[data-theme="dark"] {
    --color-bg: #121110;
    --color-surface: #1c1b19;
    --color-border: #2e2c28;
    --color-text: #f0ede8;
    --color-text-muted: #8a857d;
    --color-accent: #b5afa5;
}

/* Light theme - Warm Sand */
[data-theme="light"] {
    --color-bg: #f9f7f2;
    --color-surface: #f1efe8;
    --color-border: #e2dfd6;
    --color-text: #2c2416;
    --color-text-muted: #7d7568;
    --color-accent: #5c503e;
}
```

## Tech Stack

-   **React 19** — UI framework
-   **TypeScript** — Type safety
-   **React Router v7** — Client-side routing
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
