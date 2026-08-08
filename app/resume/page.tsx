"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Resume() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="container-tight pt-32 pb-24 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-20"
      >
        {/* Header */}
        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Resume</h2>
            <p className="text-zinc-400 mt-2">
              View and download my professional resume.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 w-full">
            <div className="relative w-full aspect-8.5/11">
              <iframe
                src="/Resume_Imp.pdf"
                className="absolute top-0 left-0 w-full h-full"
                title="Resume"
              />
            </div>
          </div>
        </section>

        {/* Experience Section
        <section className="flex flex-col gap-8">
          <motion.div variants={itemVariants} className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ctp-overlay1">Experience</h2>
            <div className="h-px flex-1 mx-6 bg-ctp-surface0/50" />
          </motion.div>

          <div className="flex flex-col gap-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExperienceItem {...exp} />
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Skills Section */}
        <section className="flex flex-col gap-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ctp-overlay1">
              Skills
            </h2>
            <div className="h-px flex-1 mx-6 bg-ctp-surface0/50" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {portfolioData.skills.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                <h3 className="font-medium text-ctp-text">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-ctp-crust border border-ctp-surface0 rounded-md text-ctp-subtext0"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}
