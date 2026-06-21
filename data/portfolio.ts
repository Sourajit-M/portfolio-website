import { icons } from "lucide-react";

export const portfolioData = {
  name: "Sourajit Majumder",
  role: "Engineer",
  email: "sourajitm19@gmail.com",
  status: "Available for work",
  description: "Building practical and scalable AI/ML systems",
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
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
      href: "https://glaucoma-detection-project.vercel.app/",
      githubUrl: "https://github.com/Sourajit-M/glaucoma-detection-project",
      image: "/images/glaucoma-app.png",
      status: "Completed",
      highlights: [
        "Built a clinical-grade AI system that detects glaucoma from eye images with 94.5% AUC and 87.1% accuracy, beating traditional ML models by 15%",
        "Used ResNet-18 for image classification and U-Net for optic disc/cup segmentation, plus Grad-CAM to show doctors why the AI made its decision.",
        "Used ONYX instead of Pytorch for better performance."
      ]
    },
    {
      id: "youtube-knowledge-engine",
      title: "YouTube Knowledge Engine (Hybrid RAG)",
      description: "A high-performance RAG platform for querying YouTube channel content with semantic precision and keyword-exact retrieval.",
      year: "2025",
      tech: ["Python", "Gemini API Key", "FAISS", "Youtube APIs", "FastAPI", 'LangChain'],
      href: "https://youtube-rag-engine.onrender.com/",
      githubUrl: "https://github.com/Sourajit-M/youtube-semantic-search",
      image: "/images/youtube-rag.png",
      status: "Production-Ready",
      highlights: [
        "Implemented a Hybrid Retrieval system using Reciprocal Rank Fusion (RRF) to combine Vector (Semantic) and BM25 (Keyword) search, significantly improving retrieval accuracy over standard RAG.",
        "Engineered a lightweight, CPU-optimized embedding pipeline using FastEmbed (ONNX), reducing memory overhead by 80% compared to traditional PyTorch-based transformers.",
        "Built an automated ingestion pipeline with a background scheduler and SQLite metadata tracking to handle multi-video processing and transcript extraction (yt-dlp) asynchronously."
      ]
    },
    {
      id: "local-ai-inference",
      title: "Local AI Inference Platform",
      description: "A high-performance local AI model benchmarking platform for profiling latency, throughput, cold-starts, and parameter isolation.",
      year: "2026",
      tech: ["Python", "FastAPI", "SQLite", "Ollama", "React", "TypeScript", "Recharts"],
      href: "#",
      githubUrl: "https://github.com/Sourajit-M/local-ai-inference-platform",
      image: "/images/local-ai-inference.png",
      status: "Completed",
      highlights: [
        "Designed a local LLM benchmarking pipeline utilizing Ollama to profile TTFT, throughput (TPS), and latency across Llama 3.2, Qwen 2.5, and Phi 3 Mini.",
        "Engineered comparative analytics dashboards to isolate temperature behaviors (0.0 vs 0.7) and analyze GPU cache-warming and WSL2 cold-start performance.",
        "Built a FastAPI backend with SQLite relational storage and a glassmorphic React frontend featuring side-by-side Recharts visualizations."
      ]
    }
  ],
  skills: [
    { name: "AI & ML", items: ["LangChain", "OpenAI API", "Ollama", "TensorFlow", "PyTorch", "FAISS"] },
    { name: "Backend", items: ["Python", "Node.js", "FastAPI", "PostgreSQL", "SQLite", "Redis"] },
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
    { name: "Javascript", icon: "SiJavascript"},
    { name: "Java", icon: "FaJava" },
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Docker", icon:"SiDocker" },
    { name: "Mongodb", icon:"SiMongodb" },
    { name:"VS Code", icon: "VscVscode"},
    { name:"Git", icon:"SiGit" },
    { name: "Notion", icon: "SiNotion" }
  ]
};
