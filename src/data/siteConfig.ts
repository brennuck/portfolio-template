export const siteConfig = {
    // Personal Info
    name: "John Doe",
    initials: "JD",
    logo: "", // Optional: Add logo URL here to replace initials (e.g., "/logo.svg")
    title: "Full Stack Developer",
    email: "john@johndoe.dev",
    phone: "5551234567", // Optional: Add phone number (e.g., "+1 555 123 4567")

    // Hero/Home
    headline: "John Doe",
    tagline: "Full Stack Developer",
    description:
        "Crafting seamless web experiences from front to back. I specialize in React, Node.js, and building products that users love.",
    ctaText: "View my work",
    ctaLink: "/projects",

    // About
    bio: [
        "Hey, I'm John — a full stack developer based in San Francisco with 5+ years of experience building web applications that scale.",
        "I started coding in college and never looked back. There's something magical about turning ideas into working software that people actually use every day.",
        "When I'm not at my keyboard, you'll find me hiking Bay Area trails, experimenting with new recipes, or playing guitar badly but enthusiastically.",
    ],
    // About page images (optional collage/gallery)
    aboutImages: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    ] as string[],

    // Contact
    contactIntro: [
        "I'm always excited to connect with fellow developers, potential collaborators, or anyone working on interesting problems.",
        "Drop me a line — let's build something great together.",
    ],
    availabilityStatus: true, // true = show status indicator, false = hidden
    status: "open" as "searching" | "open" | "closed",
    // searching = green + pulse (Actively searching)
    // open = yellow (Open to offers)
    // closed = red (Closed to offers)
    statusMessage: "", // Optional: Custom message (leave empty to use default)

    // Social Links
    social: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
    },
};
