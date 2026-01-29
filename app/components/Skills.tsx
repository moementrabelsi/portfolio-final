"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazonwebservices,
  SiJenkins,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiNginx,
  SiLinux,
  SiGit,
  SiTensorflow,
  SiOpencv,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const HARD_SKILLS = [
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Terraform", Icon: SiTerraform },
  { name: "AWS (EC2, S3, RDS, IAM, EKS)", Icon: SiAmazonwebservices },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "GitLab CI/CD", Icon: SiGitlab },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Grafana", Icon: SiGrafana },
  { name: "Ansible", Icon: SiAnsible },
  { name: "NGINX", Icon: SiNginx },
  { name: "Linux", Icon: SiLinux },
  { name: "Git", Icon: SiGit },
  { name: "CloudWatch", Icon: SiAmazonwebservices },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "OpenCV", Icon: SiOpencv },
];

const LANG_SKILLS = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Java", Icon: SiOpenjdk },
  { name: "HTML / CSS", Icon: SiHtml5 },
];

const SOFT_SKILLS = [
  "Problem Solving",
  "System Thinking",
  "Automation Mindset",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
];

const LANGUAGES = [
  { lang: "Arabic", level: "Fluent" },
  { lang: "English", level: "Fluent" },
  { lang: "French", level: "Fluent" },
  { lang: "German", level: "Intermediate" },
];

function SkillGrid({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
    >
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-cyan">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Skills
        </h2>
        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-2">
          <SkillGrid title="Hard Skills" delay={0}>
            <ul className="flex flex-wrap gap-3">
              {HARD_SKILLS.map(({ name, Icon }, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group glass-subtle flex cursor-default items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-zinc-300 transition-all duration-200 hover:border-accent-cyan/25 hover:text-zinc-100 hover:shadow-[0_0_20px_-8px_rgba(34,211,238,0.3)] sm:px-3 sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent-cyan/90 transition-transform group-hover:scale-110" aria-hidden />
                  <span>{name}</span>
                </motion.li>
              ))}
            </ul>
          </SkillGrid>
          <SkillGrid title="Programming Languages" delay={0.05}>
            <ul className="flex flex-wrap gap-3">
              {LANG_SKILLS.map(({ name, Icon }, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-subtle flex cursor-default items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-zinc-300 transition-all duration-200 hover:border-accent-purple/25 hover:text-zinc-100 hover:shadow-[0_0_20px_-8px_rgba(167,139,250,0.3)] sm:px-3 sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent-purple/90" aria-hidden />
                  <span>{name}</span>
                </motion.li>
              ))}
            </ul>
          </SkillGrid>
          <SkillGrid title="Soft Skills" delay={0.1}>
            <ul className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.03, borderColor: "rgba(148, 163, 184, 0.3)" }}
                  className="cursor-default rounded-md border border-zinc-600/50 px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-300 sm:px-3 sm:text-sm"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </SkillGrid>
          <SkillGrid title="Spoken Languages" delay={0.15}>
            <ul className="space-y-2">
              {LANGUAGES.map(({ lang, level }, i) => (
                <motion.li
                  key={lang}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ x: 4 }}
                  className="flex cursor-default justify-between rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-zinc-300 sm:text-sm"
                >
                  <span>{lang}</span>
                  <span className="text-accent-cyan/90">{level}</span>
                </motion.li>
              ))}
            </ul>
          </SkillGrid>
        </div>
      </motion.div>
    </section>
  );
}
