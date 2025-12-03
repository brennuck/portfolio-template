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
        institution: "University Name",
        startDate: "2016",
        endDate: "2020",
    },
];

