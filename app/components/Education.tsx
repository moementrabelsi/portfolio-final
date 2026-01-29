"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

const EDUCATION = [
  {
    year: "2024",
    degree: "Engineering Degree in Software Architecture",
    school: "Private Higher School of Engineering and Technology (ESPRIT)",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Education
        </h2>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-1">
          {EDUCATION.map((item, i) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-subtle glass-hover group relative overflow-hidden rounded-2xl p-4 transition-all sm:p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10 transition-colors group-hover:bg-accent-cyan/20 sm:h-14 sm:w-14">
                  <HiAcademicCap className="h-7 w-7 text-accent-cyan" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-full bg-accent-cyan/20 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-accent-cyan sm:px-3 sm:py-1">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-semibold text-zinc-100 sm:mt-3 sm:text-lg md:text-xl">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 transition-colors group-hover:text-zinc-300 sm:mt-1.5 sm:text-sm">
                    {item.school}
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
