"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#certificates", label: "Certificates", id: "certificates" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const SIDEBAR_WIDTH = 280;
const PROFILE_IMAGE = "/assets/1760485517071.jpg";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    const handler = () => setMatches(m.matches);
    m.addEventListener("change", handler);
    return () => m.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
        whileTap={{ scale: 0.95 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </motion.button>

      {/* Overlay when mobile menu open */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isDesktop ? 0 : mobileOpen ? 0 : -SIDEBAR_WIDTH }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 z-50 flex h-full flex-col border-r border-zinc-800/50 bg-[var(--background)]/95 backdrop-blur-xl"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <div className="flex flex-col gap-6 overflow-y-auto px-5 py-8">
          {/* Profile image and name */}
          <a href="#home" className="flex flex-col items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-cyan/30 ring-offset-2 ring-offset-[var(--background)] transition-all hover:ring-accent-cyan/60">
              <Image
                src={PROFILE_IMAGE}
                alt="Abdelmoemen Trabelsi"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-heading text-sm font-semibold tracking-tight text-zinc-100">
              A. Trabelsi
            </span>
          </a>

          <div className="section-separator" />

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? "bg-accent-cyan/15 text-accent-cyan"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Close button (mobile) */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-3 rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </motion.aside>

    </>
  );
}
