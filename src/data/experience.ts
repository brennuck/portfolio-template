export interface Job {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string; // Use "Present" for current role
}

export const experience: Job[] = [
    {
        id: "job-1",
        title: "Senior Software Engineer",
        company: "Company Name",
        startDate: "2022",
        endDate: "Present",
    },
    {
        id: "job-2",
        title: "Software Engineer",
        company: "Previous Company",
        startDate: "2020",
        endDate: "2022",
    },
];

