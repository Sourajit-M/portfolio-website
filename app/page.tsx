"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { ProjectItem } from "@/components/ProjectItem";
import { TechIcon } from "@/components/TechIcon";

import { portfolioData } from "@/data/portfolio";

import { 
  FaXTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope 
} from "react-icons/fa6";

const PlainIconMap: Record<string, React.ReactNode> = {
  X: <FaXTwitter size={18} />,
  LinkedIn: <FaLinkedin size={18} />,
  GitHub: <FaGithub size={18} />,
  Instagram: <FaInstagram size={18} />,
  Email: <FaEnvelope size={18} />,
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const featuredProject = portfolioData.projects[0];

  return (
    <div className="min-h-screen">
      <main className="container-tight pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-24"
        >
          {/* Hero Section */}
          <section className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ctp-text">
                {portfolioData.name}
              </h1>
              
              <div className="flex items-center flex-wrap gap-2 text-ctp-subtext0 mt-3 text-sm sm:text-base">
                <span>{portfolioData.role}</span>
                <span>•</span>
                <span>{portfolioData.email}</span>
                <button 
                  onClick={copyEmail}
                  className="p-1 hover:text-ctp-text hover:bg-ctp-surface0 rounded transition-colors flex items-center justify-center"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-ctp-green" /> : <Copy size={14} />}
                </button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-ctp-subtext0 leading-relaxed max-w-2xl">
                {portfolioData.description}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-2">
              {portfolioData.connect.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ctp-overlay0 hover:text-ctp-text transition-colors"
                  aria-label={link.label}
                >
                  {PlainIconMap[link.label] || <FaEnvelope size={18} />}
                </a>
              ))}
            </motion.div>
          </section>

          {/* Featured Work */}
          <section className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ctp-overlay1">Featured Work</h2>
              <div className="h-px flex-1 mx-6 bg-ctp-surface0/50" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ProjectItem {...featuredProject} />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                href="/projects" 
                className="group inline-flex items-center gap-2 text-sm font-medium text-ctp-subtext0 hover:text-ctp-mauve transition-colors mt-2"
              >
                View all projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </section>

          {/* Technologies & Tools Section */}
          <section className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <h2 className="text-xl font-bold tracking-tight text-ctp-text">Technologies & Tools</h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {portfolioData.techStack.map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-ctp-surface1 text-ctp-text text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {tech.name}
                  </div>
                  <TechIcon iconName={tech.icon} />
                </div>
              ))}
            </motion.div>
          </section>

        </motion.div>
      </main>
    </div>
  );
}