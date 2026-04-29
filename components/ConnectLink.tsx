"use client";

import { 
  FaXTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
} from "react-icons/fa6";

import { SiGmail } from "react-icons/si";

interface ConnectLinkProps {
  label: string;
  href: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Email: <SiGmail size={20} />,
  X: <FaXTwitter size={20} />,
  LinkedIn: <FaLinkedin size={20} />,
  GitHub: <FaGithub size={20} />,
  Instagram: <FaInstagram size={20} />,
};

export function ConnectLink({ label, href }: ConnectLinkProps) {
  const icon = iconMap[label];
  
  return (
    <a 
      href={href} 
      className="flex items-center justify-center w-12 h-12 rounded-xl bg-ctp-mantle border border-ctp-surface0 hover:bg-ctp-surface0 hover:border-ctp-surface1 text-ctp-overlay0 hover:text-ctp-text transition-all duration-300 shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
