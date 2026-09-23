"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-[#0D0714]/85 border-b border-purple-100 dark:border-[#2E1A47] shadow-lg shadow-purple-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xl sm:text-2xl font-heading font-extrabold tracking-tight"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-purple-400 flex items-center justify-center text-white shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading text-lg font-bold">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#0F172A] dark:text-[#F8FAFC] tracking-wider uppercase text-sm font-semibold">
                Sammy<span className="text-purple-600 dark:text-purple-400">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 dark:text-purple-300/70 uppercase font-sans">
                Lead Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-purple-200/60 dark:border-purple-900/40 bg-white/50 dark:bg-purple-950/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + CTA Button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/60 dark:bg-purple-950/40 flex items-center justify-center text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-700" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white font-medium text-xs lg:text-sm shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="md:hidden w-10 h-10 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/60 dark:bg-purple-950/40 flex items-center justify-center text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden border-b border-purple-100 dark:border-purple-900/60 bg-white/95 dark:bg-[#0D0714]/95 backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-medium text-sm shadow-lg shadow-purple-600/30"
                >
                  <Sparkles className="w-4 h-4" />
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
