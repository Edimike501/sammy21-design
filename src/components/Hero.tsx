"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* High-Resolution Generated Graphic Design Hero Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/hero_bg.jpg"
          alt="Abstract 3D Graphic Design Studio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Layered Gradient Overlays for optimal text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-white dark:from-[#0D0714]/85 dark:via-[#0D0714]/75 dark:to-[#0D0714] backdrop-blur-[1px]" />
      <div className="absolute inset-0 -z-10 purple-mesh-gradient opacity-40" />

      {/* Ambient Radial Purple Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC] leading-[1.12]">
            Transforming Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-500 dark:from-purple-400 dark:via-fuchsia-300 dark:to-purple-200">
              Striking Visuals
            </span>
          </motion.h1>

          {/* Subtext from Gamma Site */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-200 max-w-2xl leading-relaxed font-normal">
            Creative, purposeful, and tailored designs that connect with your
            audience and elevate your brand.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Solid Purple CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white font-semibold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              <span>Work With Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Outlined Secondary CTA */}
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-purple-600/80 dark:border-purple-400 text-purple-700 dark:text-purple-300 bg-white/70 dark:bg-purple-950/40 backdrop-blur-md hover:bg-purple-50 dark:hover:bg-purple-900/40 font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              <span>View Portfolio</span>
            </a>
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 pt-8 border-t border-purple-200/60 dark:border-purple-900/40 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-700 dark:text-purple-400">
                4+
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-700 dark:text-purple-400">
                100+
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                Visual Designs
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-700 dark:text-purple-400">
                Fast & Fresh
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                Creative Turnaround
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-700 dark:text-purple-400">
                100%
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                Flawless Execution
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
