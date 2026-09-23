"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("approach");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = [
        "approach",
        "work",
        "services",
        "testimonials",
        "contact"
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Approach", href: "#approach", id: "approach" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-[#0D0714]/85 border-b border-purple-200/60 dark:border-purple-900/40 shadow-lg shadow-purple-950/5 dark:shadow-purple-950/30 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 font-heading font-extrabold tracking-tight">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md shadow-purple-600/30 group-hover:shadow-purple-500/50 group-hover:scale-105 transition-all duration-300 border border-purple-300/60 dark:border-purple-600/60 bg-[#170F23] flex items-center justify-center p-1">
              <Image
                src="/logo.png"
                alt="Samy21 Design Logo"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`tracking-wider uppercase text-xs sm:text-sm font-bold flex items-center gap-0.5 transition-colors duration-200 ${
                  !isScrolled
                    ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                    : "text-slate-900 dark:text-white"
                }`}>
                Samy21
                <span className="text-purple-400 dark:text-purple-400 font-black">
                  .Design
                </span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-sans font-medium transition-colors duration-200 ${
                  !isScrolled
                    ? "text-purple-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    : "text-purple-700 dark:text-purple-300/80"
                }`}>
                Lead Graphic Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Modern Floating Pill & Hover Spotlight */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className={`hidden md:flex items-center p-1.5 rounded-full border backdrop-blur-xl shadow-lg transition-all duration-300 ${
              !isScrolled
                ? "border-purple-400/30 bg-[#130B1E]/80 shadow-purple-950/50"
                : "border-purple-200/70 dark:border-purple-500/25 bg-white/85 dark:bg-[#150D24]/85 shadow-purple-950/5 dark:shadow-purple-950/40"
            }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  className={`relative px-4 py-1.5 text-xs lg:text-[13px] font-semibold transition-colors duration-200 rounded-full flex items-center gap-1.5 z-10 ${
                    !isScrolled
                      ? isActive
                        ? "text-white"
                        : "text-purple-200/90 hover:text-white"
                      : isActive
                        ? "text-purple-900 dark:text-white"
                        : "text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white"
                  }`}>
                  {/* Sliding Active / Hover Background Pill */}
                  {(isHovered || (isActive && !hoveredLink)) && (
                    <motion.div
                      layoutId="navbar-pill-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                      className={`absolute inset-0 rounded-full border shadow-sm ${
                        !isScrolled
                          ? "bg-gradient-to-r from-purple-600/40 via-purple-500/35 to-purple-600/40 border-purple-400/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                          : "bg-gradient-to-r from-purple-100 to-purple-200/80 dark:from-purple-600/35 dark:via-purple-500/30 dark:to-purple-700/35 border-purple-300/60 dark:border-purple-400/40"
                      }`}
                    />
                  )}

                  {/* Active glowing indicator dot */}
                  {isActive && (
                    <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + CTA Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Enhanced Theme Toggle Button */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme mode"
              className={`relative w-10 h-10 rounded-full border backdrop-blur-xl flex items-center justify-center shadow-md active:scale-95 transition-all duration-300 overflow-hidden group cursor-pointer ${
                !isScrolled
                  ? "border-purple-400/30 bg-[#150D24]/85 shadow-purple-950/40 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                  : "border-purple-200/80 dark:border-purple-500/30 bg-white/90 dark:bg-[#150D24]/90 shadow-purple-950/5 dark:shadow-purple-950/30 hover:border-purple-400 dark:hover:border-purple-400/70 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
              }`}>
              {/* Subtle ambient glow behind icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-amber-500/15 dark:from-purple-500/25 dark:to-amber-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {mounted ? (
                <AnimatePresence mode="wait" initial={false}>
                  {resolvedTheme === "dark" ? (
                    <motion.div
                      key="dark-sun"
                      initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className="relative z-10 flex items-center justify-center">
                      <Sun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.6)] group-hover:rotate-45 transition-transform duration-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="light-moon"
                      initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className="relative z-10 flex items-center justify-center">
                      <Moon className="w-4 h-4 text-purple-700 drop-shadow-[0_0_6px_rgba(124,58,237,0.4)] group-hover:-rotate-12 transition-transform duration-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 sm:px-5 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 hover:from-purple-500 hover:to-purple-600 text-white font-semibold text-xs lg:text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-purple-400/30">
              {/* <Sparkles className="w-3.5 h-3.5 text-purple-200" /> */}
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 text-purple-200" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="md:hidden w-10 h-10 rounded-full border border-purple-200/80 dark:border-purple-500/30 bg-white/90 dark:bg-[#150D24]/90 backdrop-blur-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors">
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-purple-200/60 dark:border-purple-900/60 bg-white/95 dark:bg-[#0D0714]/95 backdrop-blur-2xl px-4 py-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60"
                        : "text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300"
                    }`}>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    )}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30">
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Start a Project & Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
