"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 space-y-4 border-l-2 border-accent-cyan/30 pl-4 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:pl-6 sm:text-base md:text-lg"
        >
          <p>
            DevOps and Cloud Engineer certified in Kubernetes (CKA), with a
            strong background in software development and application
            architecture. I specialize in automation, cloud infrastructure, and
            deployment of scalable, reliable, and observable systems.
          </p>
          <p>
            I have experience working in international environments across
            Europe and North Africa, contributing to DevOps, cloud, and
            full-stack projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
