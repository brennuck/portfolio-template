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
        title: "Senior Full Stack Developer",
        company: "TechFlow Inc.",
        description: "Leading a team of 4 engineers building a real-time analytics platform. Reduced page load times by 60% and implemented CI/CD pipelines.",
        startDate: "2022",
        endDate: "Present",
    },
    {
        id: "job-2",
        title: "Full Stack Developer",
        company: "StartupXYZ",
        description: "Built the core product from 0 to 50k users. Owned the entire stack from React frontend to Node.js microservices on AWS.",
        startDate: "2020",
        endDate: "2022",
    },
    {
        id: "job-3",
        title: "Frontend Developer",
        company: "Digital Agency Co.",
        description: "Delivered 20+ client projects ranging from e-commerce sites to interactive dashboards. Specialized in performance optimization.",
        startDate: "2019",
        endDate: "2020",
    },
];

