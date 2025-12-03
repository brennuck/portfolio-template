export interface Education {
    id: string;
    degree: string;
    field: string;
    institution: string;
    startDate: string;
    endDate: string; // Use "Present" if currently enrolled
}

export const education: Education[] = [
    {
        id: "edu-1",
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "UC Berkeley",
        startDate: "2015",
        endDate: "2019",
    },
    {
        id: "edu-2",
        degree: "Full Stack Web Development",
        field: "Certificate Program",
        institution: "App Academy",
        startDate: "2019",
        endDate: "2019",
    },
];

