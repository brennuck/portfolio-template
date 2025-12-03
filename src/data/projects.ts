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
        id: "project-one",
        title: "Project One",
        description:
            "A brief description of the project and what it accomplishes. Built with modern technologies and best practices.",
        fullDescription: [
            "This project was built to solve a specific problem in the industry. It leverages modern web technologies to deliver a seamless user experience.",
            "The architecture follows best practices with a focus on performance, accessibility, and maintainability. Special attention was paid to the developer experience as well.",
            "Key features include real-time updates, responsive design, and integration with various third-party services.",
        ],
        tags: ["React", "TypeScript", "Node.js"],
        link: "https://example.com",
        github: "https://github.com",
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        ],
    },
    {
        id: "project-two",
        title: "Project Two",
        description: "Another project showcasing different skills and problem-solving approaches.",
        fullDescription: [
            "A comprehensive backend solution built with Python and FastAPI. This project handles high-throughput data processing with efficiency.",
            "The database layer uses PostgreSQL with carefully optimized queries and proper indexing for fast reads and writes.",
        ],
        tags: ["Python", "FastAPI", "PostgreSQL"],
        link: "https://example.com",
        github: "https://github.com",
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
        ],
    },
    {
        id: "project-three",
        title: "Project Three",
        description: "Creative exploration combining design and development to create something unique.",
        fullDescription: [
            "An experimental project exploring the intersection of 3D graphics and web technologies. Built with Next.js for optimal performance and SEO.",
            "Three.js powers the immersive 3D scenes, while GSAP handles smooth animations and transitions throughout the experience.",
            "This project pushed the boundaries of what's possible in the browser, delivering a memorable and interactive experience.",
        ],
        tags: ["Next.js", "Three.js", "GSAP"],
    },
];

export const projectsIntro =
    "A selection of projects I've worked on. Each represents a unique challenge and learning opportunity.";

// Helper to find a project by ID
export const getProjectById = (id: string): Project | undefined => {
    return projects.find((project) => project.id === id);
};
