export interface Job {
    id: string;
    title: string;
    company: string;
    description?: string; // Short description for home page preview
    startDate: string;
    endDate: string; // Use "Present" for current role
}

export const experience: Job[] = [
    {
        id: "job-1",
        title: "Senior Software Engineer",
        company: "Company Name",
        description: "Leading development of scalable web applications and mentoring junior engineers. Focused on improving developer experience and system architecture.",
        startDate: "2022",
        endDate: "Present",
    },
    {
        id: "job-2",
        title: "Software Engineer",
        company: "Previous Company",
        description: "Built and maintained full-stack features for a high-traffic platform. Collaborated with cross-functional teams to deliver user-focused solutions.",
        startDate: "2020",
        endDate: "2022",
    },
];

