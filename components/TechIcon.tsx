"use client";

import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiReact, 
  SiMongodb,
  SiDocker,
  SiJavascript, 
  SiVercel, 
  SiPostman,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiFastapi,
  SiLangchain,
  SiOpenai,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiSocketdotio,
  SiGit,
  SiNotion,
} from "react-icons/si";
import { FaJava,FaNodeJs, FaYoutube } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { Database } from "lucide-react";

interface TechIconProps {
  iconName: string;
}

const iconMap: Record<string, React.ReactNode> = {
  // Existing
  SiNextdotjs: <SiNextdotjs size={24} />,
  SiTailwindcss: <SiTailwindcss size={24} className="text-[#38B2AC]" />,
  SiTypescript: <SiTypescript size={24} className="text-[#3178C6]" />,
  SiReact: <SiReact size={24} className="text-[#61DAFB]" />,
  SiPostman: <SiPostman size={24} className="text-[#FF6C37]" />,
  SiDocker: <SiDocker size={24} className="text-[#0075ea]"/>,
  SiJavascript: <SiJavascript size={24} className="text-[#ebe708]" />,
  SiMongodb: <SiMongodb size={24} className="text-[#00fc08]" />,
  FaJava: <FaJava size={24} className="text-[#c4642d]"/>,
  FaNodeJs : <FaNodeJs  size={24} className="text-[#22e40d]"/>,
  VscVscode : <VscVscode size={24} className="text-[#089fe6]"/>,
  SiGit: <SiGit size={24} className="text-[#FF6C37]" />,
  SiNotion: <SiNotion size={24}/>,
  
  // From Portfolio Projects
  "Next.js": <SiNextdotjs size={22} />,
  "React": <SiReact size={22} className="text-[#61DAFB]" />,
  "Python": <SiPython size={22} className="text-[#3776AB]" />,
  "TensorFlow": <SiTensorflow size={22} className="text-[#FF6F00]" />,
  "OpenCV": <SiOpencv size={22} className="text-[#5C3EE8]" />,
  "FastAPI": <SiFastapi size={22} className="text-[#009688]" />,
  "LangChain": <SiLangchain size={22} />,
  "FAISS": <Database size={22} className="text-[#0052CC]" />,
  "OpenAI": <SiOpenai size={22} />,
  "PostgreSQL": <SiPostgresql size={22} className="text-[#4169E1]" />,
  "Express": <SiExpress size={22} />,
  "Node.js": <SiNodedotjs size={22} className="text-[#339933]" />,
  "Socket.io": <SiSocketdotio size={22} />,
  "Youtube APIs": <FaYoutube size={24} className="text-[#e20909]"/>,
  "Gemini API Key": <RiGeminiFill size={24} className="text-[#196be6]" />,
};

export function TechIcon({ iconName }: TechIconProps) {
  const icon = iconMap[iconName];
  
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ctp-mantle border border-ctp-surface0 hover:bg-ctp-surface0 hover:border-ctp-surface1 text-ctp-overlay0 hover:text-ctp-text transition-all duration-300 shadow-sm">
      {icon ? icon : <span className="text-[11px] font-bold text-ctp-overlay1">{iconName.slice(0, 3).toUpperCase()}</span>}
    </div>
  );
}
