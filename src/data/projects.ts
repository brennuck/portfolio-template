export interface Project {
    id: string;
    title: string;
    description: string; // Short description for listing
    fullDescription?: string[]; // Longer description paragraphs for detail page
    tags: string[];
    link?: string;
    github?: string;
    images?: string[];
    year?: string;
}

export const projects: Project[] = [
    {
        id: "taskflow",
        title: "TaskFlow",
        description:
            "A real-time project management app with drag-and-drop boards, team collaboration, and smart notifications.",
        fullDescription: [
            "TaskFlow started as a side project to scratch my own itch — I wanted a simpler, faster alternative to existing project management tools.",
            "Built with React and TypeScript on the frontend, with a Node.js/Express backend and PostgreSQL database. Real-time updates powered by WebSockets.",
            "Key features include customizable Kanban boards, time tracking, recurring tasks, and integrations with Slack and GitHub.",
        ],
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
        link: "https://taskflow.demo.com",
        github: "https://github.com/johndoe/taskflow",
        images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        ],
        year: "2024",
    },
    {
        id: "weatherwise",
        title: "WeatherWise",
        description:
            "A beautiful weather app with 7-day forecasts, severe weather alerts, and location-based recommendations.",
        fullDescription: [
            "WeatherWise combines data from multiple weather APIs to provide accurate, hyperlocal forecasts.",
            "The app features a clean, intuitive interface with animated weather icons, hourly breakdowns, and smart outfit suggestions based on conditions.",
            "Built as a PWA so it works offline and can be installed on any device.",
        ],
        tags: ["Next.js", "Tailwind CSS", "OpenWeather API", "PWA"],
        link: "https://weatherwise.demo.com",
        github: "https://github.com/johndoe/weatherwise",
        images: [
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
            "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
        ],
        year: "2024",
    },
    {
        id: "devblog",
        title: "DevBlog Engine",
        description: "A minimal, blazing-fast blog platform for developers with MDX support and syntax highlighting.",
        fullDescription: [
            "I built DevBlog because I wanted a blog that loaded instantly and let me write in Markdown with code snippets.",
            "It's a static site generator built on Astro, with automatic syntax highlighting, RSS feeds, and SEO optimization out of the box.",
            "The admin interface uses a headless CMS approach, making it easy to publish from anywhere.",
        ],
        tags: ["Astro", "MDX", "Tailwind CSS", "Vercel"],
        github: "https://github.com/johndoe/devblog",
        year: "2023",
    },
    {
        id: "fittrack",
        title: "FitTrack",
        description: "A fitness tracking app with workout logging, progress charts, and personalized training plans.",
        fullDescription: [
            "FitTrack helps users build consistent workout habits with a simple, no-nonsense interface.",
            "Features include exercise library with video demos, customizable workout templates, and progress tracking with beautiful charts.",
            "Built with React Native for cross-platform mobile support, with a Python/FastAPI backend.",
        ],
        tags: ["React Native", "Python", "FastAPI", "MongoDB"],
        link: "https://fittrack.demo.com",
        images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
        ],
        year: "2023",
    },
];

export const projectsIntro =
    "Here's a selection of projects I've built. Some are tools I use daily, others were experiments that taught me something new.";

// Helper to find a project by ID
export const getProjectById = (id: string): Project | undefined => {
    return projects.find((project) => project.id === id);
};
