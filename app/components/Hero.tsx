"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROFILE_IMAGE = "/assets/1760485517071.jpg";
const CV_URL = "/assets/cv.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 md:pt-24"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-cyan/20 blur-[100px]"
          aria-hidden
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent-purple/25 blur-[90px]"
          aria-hidden
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[80px]"
          aria-hidden
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-accent-cyan/20 ring-offset-4 ring-offset-[var(--background)] shadow-xl sm:mb-6 sm:h-32 sm:w-32"
        >
          <Image
            src={PROFILE_IMAGE}
            alt="Abdelmoemen Trabelsi"
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-cyan sm:mb-3 sm:text-sm"
        >
          DevOps Engineer | Cloud & Automation
        </motion.p>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl lg:text-6xl">
          Abdelmoemen Trabelsi
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-2 text-base text-accent-cyan sm:text-lg md:text-xl"
        >
          Certified Kubernetes Administrator (CKA)
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base md:text-lg"
        >
          DevOps and Cloud Engineer specialized in designing, automating, and
          deploying scalable cloud-native systems with a strong focus on
          Kubernetes, CI/CD, and AWS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 mb-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:mb-20 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <motion.a
            href="#experience"
            className="btn-primary min-h-[44px] whitespace-nowrap rounded-lg bg-accent-cyan/20 px-4 py-3 text-center text-sm font-medium text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:flex-1 sm:flex-none sm:px-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Experience
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary min-h-[44px] whitespace-nowrap rounded-lg border border-zinc-600 px-4 py-3 text-center text-sm font-medium text-zinc-300 sm:flex-1 sm:flex-none sm:px-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href={CV_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-accent-cyan/40 px-4 py-3 text-sm font-medium text-accent-cyan transition-colors hover:border-accent-cyan/60 hover:bg-accent-cyan/10 sm:flex-1 sm:flex-none sm:px-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-accent-cyan"
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
