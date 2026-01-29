"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const EMAIL = "abdelmoementrabelsi@gmail.com";
const LOCATION = "Tunis, Tunisia";
const LINKEDIN = "https://www.linkedin.com/in/abdelmoemen-trabelsi-devops/";
const GITHUB = "https://github.com/moementrabelsi/";
const CV_URL = "/assets/cv.pdf";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Someone"}`);
    const body = encodeURIComponent(
      `${message || ""}\n\n---\nFrom: ${name || "N/A"}\nEmail: ${email || "N/A"}`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setFormStatus("success");
  }

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="section-separator mx-auto max-w-4xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl pt-12 sm:pt-16"
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl md:text-3xl">
          Contact
        </h2>
        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-4 sm:space-y-6">
            <motion.a
              href={`mailto:${EMAIL}`}
              className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-accent-cyan sm:min-h-0 sm:text-base"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiMail className="h-5 w-5 shrink-0" aria-hidden />
              <span className="break-all">{EMAIL}</span>
            </motion.a>
            <p className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400">
              <HiLocationMarker className="h-5 w-5 shrink-0" aria-hidden />
              <span>{LOCATION}</span>
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg glass-subtle px-4 py-3 text-sm text-zinc-300 transition-all hover:border-accent-cyan/30 hover:text-accent-cyan sm:min-h-0 sm:min-w-0"
                aria-label="LinkedIn: Abdelmoemen Trabelsi"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <SiLinkedin className="h-5 w-5 shrink-0 transition-transform hover:scale-110" />
                LinkedIn
              </motion.a>
              <motion.a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg glass-subtle px-4 py-3 text-sm text-zinc-300 transition-all hover:border-accent-cyan/30 hover:text-accent-cyan sm:min-h-0 sm:min-w-0"
                aria-label="GitHub"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <SiGithub className="h-5 w-5 shrink-0 transition-transform hover:scale-110" />
                GitHub
              </motion.a>
              <motion.a
                href={CV_URL}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-3 text-sm font-medium text-accent-cyan transition-all hover:border-accent-cyan/60 hover:bg-accent-cyan/15 sm:min-h-0 sm:min-w-0"
                aria-label="Download CV"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </motion.a>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="glass-subtle rounded-xl p-4 transition-all duration-200 hover:border-zinc-600/40 sm:p-6"
          >
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Name"
              className="input-focus mb-4 w-full rounded-lg border border-zinc-600/50 bg-zinc-900/50 px-4 py-3 text-base text-zinc-100 placeholder-zinc-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
            />
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email"
              className="input-focus mb-4 w-full rounded-lg border border-zinc-600/50 bg-zinc-900/50 px-4 py-3 text-base text-zinc-100 placeholder-zinc-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
            />
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Message"
              className="input-focus mb-4 w-full resize-y rounded-lg border border-zinc-600/50 bg-zinc-900/50 px-4 py-3 text-base text-zinc-100 placeholder-zinc-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
            />
            <motion.button
              type="submit"
              className="btn-primary w-full min-h-[48px] whitespace-nowrap rounded-lg bg-accent-cyan/20 py-3 text-sm font-medium text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send message
            </motion.button>
            {formStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-sm text-accent-cyan"
              >
                Your mail client will open to send the message.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
