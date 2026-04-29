"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ProjectItem } from "@/components/ProjectItem";

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="container-tight pt-32 pb-24 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-16"
      >
        <section className="flex flex-col gap-6">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight text-ctp-text">
            Projects.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-ctp-subtext0 leading-relaxed max-w-lg">
            A selection of my recent projects, focusing on AI integrations and full-stack development.
          </motion.p>
        </section>

        <section className="flex flex-col gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div key={project.id || index} variants={itemVariants}>
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </section>
      </motion.div>
    </main>
  );
}
