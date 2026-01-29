"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiExternalLink, HiX } from "react-icons/hi";

type Project = {
  title: string;
  description: string;
  tasks: string[];
  stack: string[];
  github: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Cloud-Native MERN Platform",
    description:
      "MERN stack application deployed on AWS with Kubernetes. Secure authentication and CI/CD automation.",
    tasks: [
      "Designed and deployed scalable backend with Node.js and Express",
      "Implemented JWT-based authentication and role-based access",
      "Containerized with Docker and orchestrated on Kubernetes (EKS)",
      "Built CI/CD pipelines for automated testing and deployment",
      "Configured AWS services (EC2, S3, RDS) for production",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Docker", "Kubernetes", "AWS", "Jenkins"],
    github: "https://github.com/moementrabelsi",
    demo: undefined,
  },
  {
    title: "Kubernetes Infrastructure Automation",
    description:
      "Automated infrastructure provisioning using Terraform. CI/CD pipelines integrated with Jenkins and GitLab CI.",
    tasks: [
      "Defined infrastructure as code with Terraform modules",
      "Provisioned and managed Kubernetes clusters",
      "Integrated Jenkins and GitLab CI for pipeline automation",
      "Configured monitoring and logging for deployed workloads",
      "Documented runbooks and deployment procedures",
    ],
    stack: ["Terraform", "Kubernetes", "Jenkins", "GitLab CI", "Docker", "Linux"],
    github: "https://github.com/moementrabelsi",
    demo: undefined,
  },
  {
    title: "AI Facial Recognition System",
    description:
      "Facial recognition module using TensorFlow and OpenCV. Integrated into a full-stack web application.",
    tasks: [
      "Built face detection and recognition pipeline with TensorFlow and OpenCV",
      "Exposed recognition API for integration with web frontend",
      "Implemented real-time video stream processing",
      "Deployed full-stack application with secure API endpoints",
      "Optimized model inference for production latency",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "React", "Node.js", "Docker"],
    github: "https://github.com/moementrabelsi",
    demo: undefined,
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Projects
        </h2>
        <p className="mt-1 text-xs text-zinc-500 sm:mt-2 sm:text-sm">
          Selected highlights — click a card to open details
        </p>
        <div className="mt-6 flex flex-row gap-4 overflow-x-auto pb-4 scroll-smooth sm:mt-10 sm:gap-6 md:overflow-visible md:pb-0 [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setOpenProject(project)}
              className="glass-subtle glass-hover group flex min-w-[280px] cursor-pointer flex-col rounded-xl p-4 transition-all sm:min-w-[300px] sm:shrink-0 sm:p-6 md:min-w-0 md:flex-1 lg:max-w-[380px]"
            >
              <h3 className="font-heading text-lg font-semibold text-zinc-100 transition-colors group-hover:text-accent-cyan/90">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex-1 space-y-1.5">
                {project.tasks.slice(0, 3).map((task) => (
                  <li
                    key={task}
                    className="flex gap-2 text-xs text-zinc-400 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/80" aria-hidden />
                    <span className="line-clamp-2">{task}</span>
                  </li>
                ))}
                {project.tasks.length > 3 && (
                  <li className="text-xs text-zinc-500">
                    +{project.tasks.length - 3} more — click to open
                  </li>
                )}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-zinc-600/50 bg-zinc-800/50 px-2 py-0.5 text-xs font-medium text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="text-xs text-zinc-500">+{project.stack.length - 5}</span>
                )}
              </div>
              <p className="mt-4 text-xs font-medium text-accent-cyan">
                View details
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {openProject && (
            <motion.div
              key={openProject.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpenProject(null)}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass relative z-10 max-h-[90vh] w-full max-w-lg overflow-hidden rounded-xl border border-zinc-700/50 shadow-2xl sm:max-h-[85vh] sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[90vh] overflow-y-auto p-4 sm:max-h-[85vh] sm:p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 id="project-dialog-title" className="font-heading text-xl font-semibold text-zinc-100 md:text-2xl">
                    {openProject.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setOpenProject(null)}
                    className="shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
                    aria-label="Close"
                  >
                    <HiX className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {openProject.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-cyan">
                    Tasks
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {openProject.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex gap-2 text-sm text-zinc-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/80" aria-hidden />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-cyan">
                    Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {openProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-600/50 bg-zinc-800/50 px-3 py-1.5 text-sm font-medium text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-700/40 pt-6">
                  <a
                    href={openProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-600/50 bg-zinc-800/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan"
                    aria-label={`View ${openProject.title} on GitHub`}
                  >
                    <SiGithub className="h-4 w-4" />
                    Repository
                  </a>
                  {openProject.demo && (
                    <a
                      href={openProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2.5 text-sm font-medium text-accent-cyan transition-colors hover:border-accent-cyan/60 hover:bg-accent-cyan/15"
                      aria-label={`View ${openProject.title} demo`}
                    >
                      <HiExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
