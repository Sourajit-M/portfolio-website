export const featuredProject = {
  id: "glaucoma",
  title: "Glaucoma Detection AI",
  description: "Deep learning model that detects glaucoma from retinal scans with high accuracy. Features Grad-CAM heatmap visualization for doctor interpretability and clinical deployment.",
  longDescription: "Glaucoma is a leading cause of irreversible blindness. This project uses a convolutional neural network trained on retinal fundus images to detect glaucomatous changes. The model outputs both a classification and an explainability heatmap, making it suitable for clinical decision support.",
  role: "Model Architecture, Training, API Development, Deployment",
  tech: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
  demoUrl: "https://glaucoma-detection-project.vercel.app/",
  githubUrl: "https://github.com/Sourajit-M/glaucoma-detection",
  image: "/images/glaucoma-demo.png", // You'll add this screenshot
  highlights: [
    "94% validation accuracy on test dataset",
    "Grad-CAM heatmaps for model explainability",
    "Production deployment on Vercel + Render",
    "HIPAA-aligned data handling practices"
  ]
};

export const otherProjects = [
  {
    id: "youtube-rag",
    title: "YouTube Semantic Search with RAG",
    description: "Search YouTube transcripts semantically and get AI-generated answers with source attribution. Uses RAG architecture for accurate, context-aware responses.",
    tech: ["Python", "LangChain", "FAISS", "FastAPI", "Next.js", "OpenAI"],
    demoUrl: null, // Coming soon
    githubUrl: "https://github.com/Sourajit-M/youtube-rag", // Create this repo
    image: "/images/youtube-rag.png",
    status: "In Development" as const, // Shows a badge
    highlights: [
      "Vector similarity search over video transcripts",
      "LLM-powered Q&A with source citations",
      "Streaming responses for real-time feedback"
    ]
  },
  {
    id: "pern-chat",
    title: "AI-Powered Chat App (PERN Stack)",
    description: "Real-time chat application with AI-generated conversation summaries. Features user authentication, message history, and AI meeting notes.",
    tech: ["PostgreSQL", "Express", "React", "Node.js", "Socket.io", "OpenAI API"],
    demoUrl: null, // Add if deployed
    githubUrl: "https://github.com/Sourajit-M/pern-chat-app",
    image: "/images/chat-app.png",
    status: "Completed" as const,
    highlights: [
      "JWT authentication with refresh tokens",
      "Real-time messaging with Socket.io",
      "AI-powered conversation summarization",
      "PostgreSQL with Prisma ORM"
    ]
  }
];

// Skills grouped by category
export const skillCategories = [
  {
    name: "AI & Machine Learning",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "TensorFlow", "PyTorch", "FAISS"]
  },
  {
    name: "Backend Development",
    skills: ["Python", "Node.js", "FastAPI", "Express", "PostgreSQL", "Redis"]
  },
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "Vercel", "Render", "Postman", "VS Code"]
  }
];