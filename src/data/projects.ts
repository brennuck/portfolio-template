export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Project One",
        description:
            "A brief description of the project and what it accomplishes. Built with modern technologies and best practices.",
        tags: ["React", "TypeScript", "Node.js"],
        link: "https://github.com",
    },
    {
        id: "project-2",
        title: "Project Two",
        description: "Another project showcasing different skills and problem-solving approaches.",
        tags: ["Python", "FastAPI", "PostgreSQL"],
        link: "https://github.com",
    },
    {
        id: "project-3",
        title: "Project Three",
        description: "Creative exploration combining design and development to create something unique.",
        tags: ["Next.js", "Three.js", "GSAP"],
    },
];

export const workIntro =
    "A selection of projects I've worked on. Each represents a unique challenge and learning opportunity.";
