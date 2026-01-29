"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";

const PROFILE_IMAGE = "/assets/1760485517071.jpg";
const GITHUB_URL = "https://github.com/moementrabelsi/";

const MAIN_LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const MORE_LINKS = [
  { href: "#education", label: "Education", id: "education" },
  { href: "#certificates", label: "Certificates", id: "certificates" },
  { href: "#skills", label: "Skills", id: "skills" },
];

const ALL_LINKS = [...MAIN_LINKS, ...MORE_LINKS];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ALL_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMoreActive = MORE_LINKS.some((l) => l.id === activeId);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="mx-auto w-full max-w-4xl">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "glass border-zinc-700/40 px-3 py-3 shadow-xl shadow-black/20 sm:px-4 md:px-6"
              : "glass-subtle border-zinc-700/20 px-3 py-3 sm:px-4 md:px-6"
          }`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center justify-between sm:justify-start">
              <motion.a
                href="#home"
                className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-cyan/30 ring-offset-2 ring-offset-transparent">
                  <Image
                    src={PROFILE_IMAGE}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-heading truncate text-sm font-semibold leading-tight tracking-tight text-zinc-100">
                    Abdelmoemen Trabelsi
                  </span>
                  <span className="truncate text-xs font-medium text-zinc-500">
                    DevOps and Cloud Engineer
                  </span>
                </div>
              </motion.a>

              <motion.button
                type="button"
                aria-label="Toggle menu"
                className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100 sm:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                    mobileOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                    mobileOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                    mobileOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </motion.button>
            </div>

            <ul className="hidden items-center justify-end gap-1 sm:flex">
              {MAIN_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                      activeId === link.id
                        ? "bg-accent-cyan/15 text-accent-cyan"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`nav-link flex items-center gap-0.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                    isMoreActive
                      ? "bg-accent-cyan/15 text-accent-cyan"
                      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                  }`}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                >
                  More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full z-10 mt-1 min-w-[140px] rounded-lg border border-zinc-700/50 bg-[var(--background)]/95 py-1 shadow-xl backdrop-blur-xl"
                    >
                      {MORE_LINKS.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className={`block px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 ${
                              activeId === link.id
                                ? "bg-accent-cyan/15 text-accent-cyan"
                                : "text-zinc-300 hover:text-zinc-100"
                            }`}
                            onClick={() => setMoreOpen(false)}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <motion.a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100"
                  aria-label="GitHub profile"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SiGithub className="h-5 w-5" />
                </motion.a>
              </li>
            </ul>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-zinc-700/40 pt-3 sm:hidden"
              >
                <ul className="flex flex-col gap-0.5 pb-2">
                  {MAIN_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <a
                        href={link.href}
                        className={`block min-h-[44px] rounded-lg px-3 py-3 text-sm font-medium transition-colors sm:min-h-0 sm:py-2.5 ${
                          activeId === link.id
                            ? "bg-accent-cyan/15 text-accent-cyan"
                            : "text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  {MORE_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: (MAIN_LINKS.length + i) * 0.03 }}
                    >
                      <a
                        href={link.href}
                        className={`block min-h-[44px] rounded-lg px-3 py-3 text-sm font-medium transition-colors sm:min-h-0 sm:py-2.5 ${
                          activeId === link.id
                            ? "bg-accent-cyan/15 text-accent-cyan"
                            : "text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: (MAIN_LINKS.length + MORE_LINKS.length) * 0.03 }}
                    className="border-t border-zinc-700/40 pt-2 mt-2"
                  >
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-zinc-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      <SiGithub className="h-5 w-5 shrink-0" />
                      GitHub
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
