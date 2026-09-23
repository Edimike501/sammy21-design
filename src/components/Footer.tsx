"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-16 overflow-hidden">
      {/* Subtle Purple Gradient Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info with logo.png */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#170F23] flex items-center justify-center shadow-sm">
              <Image
                src="/logo.png"
                alt="Samy21 Design Logo"
                fill
                sizes="36px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="text-sm font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                SAMY21<span className="text-purple-600 dark:text-purple-400">.DESIGN</span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Samson Oyetunde · Lead Graphic Designer
              </p>
            </div>
          </div>

          {/* Availability Status Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 text-xs text-slate-600 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fast & Fresh Turnaround · Available for New Projects</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-200 dark:border-purple-800/80 bg-white dark:bg-purple-950/30 text-xs font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright and Navigation */}
        <div className="mt-8 pt-8 border-t border-purple-100 dark:border-purple-900/30 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Samy21 Design. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#approach" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Approach
            </a>
            <a href="#work" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
