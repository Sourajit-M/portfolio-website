export const portfolioData = {
  name: "Sourajit Majumder",
  role: "AI Engineer, Backend Developer",
  email: "sourajitm19@gmail.com",
  status: "Available for work",
  description: "3rd-year B.Tech CSE (AIML) student passionate about building practical AI/ML systems, scalable backend applications",
  socials: [
    { name: "GitHub", href: "https://github.com/Sourajit-M", platform: "github" },
    { name: "Twitter", href: "https://x.com/Sourajit_drk", platform: "twitter" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sourajit-majumder-983aa9287", platform: "linkedin" },
  ],
  projects: [
    {
      id: "glaucoma",
      title: "Glaucoma Detection AI",
      description: "Deep learning model that detects glaucoma from retinal scans with high accuracy.",
      longDescription: "Glaucoma is a leading cause of irreversible blindness. This project uses a convolutional neural network trained on retinal fundus images to detect glaucomatous changes with explainability heatmaps.",
      year: "2026",
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
      href: "https://glaucoma-detection-project.vercel.app/",
      githubUrl: "https://github.com/Sourajit-M/glaucoma-detection-project",
      image: "/images/glaucoma-app.png",
      status: "Completed",
      highlights: [
        "94% validation accuracy",
        "Grad-CAM heatmaps for explainability",
        "Production deployment on Vercel + Render"
      ]
    },
    {
      id: "youtube-rag",
      title: "YouTube Semantic Search with RAG",
      description: "Search YouTube transcripts semantically and get AI-generated answers with source attribution.",
      year: "2025",
      tech: ["Python", "LangChain", "FAISS", "FastAPI", "Next.js", "OpenAI"],
      href: "#",
      githubUrl: "https://github.com/Sourajit-M/youtube-semantic-search",
      image: "/images/youtube-rag.png",
      status: "In development",
      highlights: ["Vector similarity search", "LLM-powered Q&A with citations"]
    },
    {
      id: "pern-chat",
      title: "AI-Powered Chat App",
      description: "Real-time chat application with AI-generated conversation summaries.",
      year: "2026",
      tech: ["PostgreSQL", "Express", "React", "Node.js", "Socket.io"],
      href: "#",
      githubUrl: "https://github.com/Sourajit-M/chat-app",
      image: "/images/chat-app.png",
      status: "Completed",
      highlights: ["JWT authentication", "Real-time messaging", "AI summarization"]
    }
  ],
  skills: [
    { name: "AI & ML", items: ["LangChain", "OpenAI API", "TensorFlow", "PyTorch", "FAISS"] },
    { name: "Backend", items: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis"] },
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "DevOps", items: ["Docker", "Git", "Vercel", "Render"] }
  ],
  // experience: [
  //   {
  //     company: "Your Company",
  //     role: "Software Engineer",
  //     period: "2023 — Present",
  //   },
  //   {
  //     company: "Previous Company",
  //     role: "Developer Intern",
  //     period: "2022 — 2023",
  //   }
  // ],
  connect: [
    { label: "X", href: "https://x.com/Sourajit_drk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sourajit-majumder-983aa9287" },
    { label: "GitHub", href: "https://github.com/Sourajit-M" },
    { label: "Instagram", href: "https://www.instagram.com/sourajit__m/" },
    { label: "Email", href: "mailto:sourajitm19@gmail.com" },
  ],
  techStack: [
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind", icon: "SiTailwindcss" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "SiReact" },
    { name: "Figma", icon: "SiFigma" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "AWS", icon: "SiAmazonwebservices" },
    { name: "Postman", icon: "SiPostman" },
  ]
};
