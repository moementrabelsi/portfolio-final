"use client";

import { motion } from "framer-motion";
import { SiKubernetes, SiLinuxfoundation } from "react-icons/si";

const CKA_CREDLY_URL = "https://www.credly.com/badges/39218f61-3f24-4042-8141-f0733109e9bd/public_url";

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Certificates
        </h2>
        <motion.a
          href={CKA_CREDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="glass-subtle glass-hover mt-6 flex flex-wrap items-center gap-4 rounded-xl p-4 transition-colors hover:text-inherit sm:mt-10 sm:gap-8 sm:p-6 md:p-8"
          aria-label="View CKA credential on Credly"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800/80 transition-colors hover:bg-accent-cyan/10 sm:h-16 sm:w-16"
            >
              <SiKubernetes className="h-7 w-7 text-accent-cyan sm:h-9 sm:w-9" aria-hidden />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800/80 transition-colors hover:bg-zinc-700/80 sm:h-16 sm:w-16"
            >
              <SiLinuxfoundation className="h-7 w-7 text-zinc-400 sm:h-9 sm:w-9" aria-label="Linux Foundation" />
            </motion.div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base font-semibold text-zinc-100 sm:text-lg">
              Certified Kubernetes Administrator (CKA)
            </h3>
            <p className="mt-0.5 text-xs text-zinc-400 sm:mt-1 sm:text-sm">
              The Linux Foundation — 2025
            </p>
            <p className="mt-2 whitespace-nowrap text-xs font-medium text-accent-cyan">
              View credential on Credly
            </p>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
