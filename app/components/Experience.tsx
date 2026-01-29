"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "DevOps Engineer",
    company: "Inoui Agency",
    location: "France",
    period: "Aug 2024 – Present",
    bullets: [
      "Designed, implemented, and maintained scalable Kubernetes clusters",
      "Built CI/CD pipelines using Jenkins, GitLab CI/CD, and Terraform",
      "Deployed and managed AWS infrastructure (EKS, EC2, S3, RDS, IAM)",
      "Implemented monitoring and alerting using Prometheus and Grafana",
      "Containerized applications using Docker",
    ],
  },
  {
    role: "Full-Stack & DevOps Engineer Intern",
    company: "Inoui Agency",
    location: "France",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      "Built responsive user interfaces using Vue.js from Adobe XD designs",
      "Developed a MERN application with secure authentication",
      "Implemented AI-based facial recognition using TensorFlow and OpenCV",
      "Deployed full-stack applications on AWS with Kubernetes",
      "Automated deployments with CI/CD pipelines",
    ],
  },
  {
    role: "DevOps Intern",
    company: "BlueOcean Gaming",
    location: "Slovenia",
    period: "Apr 2023 – Aug 2023",
    bullets: [
      "Assisted in Docker-based application deployments",
      "Supported CI/CD execution and troubleshooting",
      "Monitored services and logs to ensure system stability",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Bee Coders",
    location: "Tunisia",
    period: "Jun 2022 – Aug 2022",
    bullets: [
      "Redesigned a web application using React.js",
      "Integrated RESTful APIs",
      "Used Redux, Axios, and React Router",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Experience
        </h2>
        <div className="mt-8 space-y-0 sm:mt-12">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex gap-4 border-l border-zinc-700/60 pl-6 pb-10 last:pb-0 sm:gap-8 sm:pl-8 sm:pb-12"
            >
              <motion.span
                className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full bg-accent-cyan/80 transition-all duration-300 group-hover:bg-accent-cyan group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                aria-hidden
              />
              <div className="flex-1 rounded-r-lg transition-colors group-hover:bg-white/[0.02] group-hover:pr-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                  <h3 className="font-heading text-base font-semibold text-zinc-100 transition-colors group-hover:text-accent-cyan/90 sm:text-lg">
                    {job.role}
                    <span className="text-accent-cyan"> — {job.company}</span>
                  </h3>
                  <span className="text-xs text-zinc-500 sm:text-sm">{job.period}</span>
                </div>
                <p className="mt-0.5 text-xs text-zinc-500 sm:mt-1 sm:text-sm">{job.location}</p>
                <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-zinc-400 sm:mt-4 sm:space-y-2 sm:text-sm">
                  {job.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 + bi * 0.03 }}
                      className="flex gap-2 transition-colors group-hover:text-zinc-300"
                    >
                      <span className="text-accent-cyan/80 shrink-0">·</span>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
