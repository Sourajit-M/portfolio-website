"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";

interface ProjectItemProps {
  title: string;
  description: string;
  year: string;
  href: string;
  tech?: string[];
  githubUrl?: string;
  image?: string;
  status?: string;
  highlights?: string[];
}

export function ProjectItem({ title, description, year, href, tech, githubUrl, image, status, highlights }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLAnchorElement>(null);
  
  // Mouse position for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the floating image
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate position relative to the container center
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.a
      ref={containerRef}
      href={href !== "#" ? href : githubUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-6 p-6 -mx-6 rounded-2xl hover:bg-ctp-surface0/30 transition-colors border border-transparent hover:border-ctp-surface0/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex flex-col gap-6 z-10 w-full">
          {/* Header & Description */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg text-ctp-text group-hover:text-ctp-mauve transition-colors">
                {title}
              </h3>
              {status === "In development" && (
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-ctp-peach/10 text-ctp-peach rounded border border-ctp-peach/20">
                  WIP
                </span>
              )}
            </div>
            <p className="text-sm text-ctp-subtext0 max-w-2xl leading-relaxed">{description}</p>
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-ctp-text">What I've done</h4>
              <ul className="flex flex-col gap-2">
                {highlights.map((item, i) => (
                  <li key={i} className="text-sm text-ctp-subtext0 flex items-start gap-2">
                    <span className="text-ctp-overlay1 mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technologies & Tools */}
          {tech && tech.length > 0 && (
            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-xs font-bold text-ctp-text">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <div key={t} className="group/tech relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-ctp-surface1 text-ctp-text text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      {t}
                    </div>
                    <TechIcon iconName={t} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 z-10 shrink-0 mt-2 sm:mt-0">
          <span className="text-xs font-mono text-ctp-overlay0">{year}</span>
          <div className="flex items-center gap-2">
            {githubUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(githubUrl, "_blank", "noopener,noreferrer");
                }}
                className="p-1.5 rounded-md hover:bg-ctp-surface1 text-ctp-overlay0 hover:text-ctp-text transition-colors"
                aria-label="View source on GitHub"
              >
                <Github size={20} />
              </button>
            )}
            {href !== "#" && (
              <div className="p-1.5 rounded-md bg-ctp-surface0/50 text-ctp-text opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                <ExternalLink size={20} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Image Reveal (Desktop Only) */}
      {image && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden md:block"
          style={{ x: floatX, y: floatY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: isHovered ? 0.15 : 0, 
              scale: isHovered ? 1 : 0.8,
              rotate: isHovered ? 2 : -5
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-64 h-40 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Fallback gradient if image fails to load or isn't actually there */}
            <div className="absolute inset-0 bg-gradient-to-br from-ctp-mauve to-ctp-blue mix-blend-overlay z-10" />
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover grayscale"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.a>
  );
}
