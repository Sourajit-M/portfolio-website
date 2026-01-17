export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured: boolean;
    status?: "Done" | "In Progress" | "Planned";
}

export const siteConfig = {
    name: "Sourajit Majumder",
    title: "Full Stack Developer",
    bio: "A Full Stack Developer aiming for AI Engineering. I build pixel-perfect web experiences with modern tools like Next.js, Bun, and Tailwind.",
    email: "sourajitm19@gmail.com",
    location: "India",
    socials: {
        github: "https://github.com/Sourajit-M", // Add your links
        twitter: "https://github.com/",
        linkedin: "www.linkedin.com/in/sourajit-majumder-983aa9287",
    },
    skills: ["Next.js", "React", "TypeScript", "Bun", "Tailwind CSS", "Node.js", "PostgreSQL"],
    currentlyLearning: "Agentic AI",
    projects: [
        {
            id: "1",
            title: "Portfolio Website",
            description: "A modern, minimalist portfolio built with Next.js 15, Tailwind v4, and framer-motion. Focuses on performance and clean design.",
            technologies: ["Next.js", "Tailwind", "TypeScript"],
            featured: true,
            status: "In Progress"
        },
        {
            id: "2",
            title: "AI Chat Interface",
            description: "An experimental chat interface exploring semantic search and RAG concepts.",
            technologies: ["React", "AI SDK", "Python"],
            featured: true,
            status: "Planned"
        }
    ] as Project[]
};
