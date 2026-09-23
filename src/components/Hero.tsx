"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0D0714]">
      {/* High-Resolution Generated Graphic Design Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero_bg.jpg"
          alt="Abstract 3D Graphic Design Studio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-85"
        />
        {/* Subtle Vignette & Gradient Fade at bottom to transition smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-[#0D0714]/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.12] drop-shadow-lg"
          >
            Transforming Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200">
              Striking Visuals
            </span>
          </motion.h1>

          {/* Subtext from Gamma Site */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-purple-100 max-w-2xl leading-relaxed font-normal drop-shadow-md"
          >
            Creative, purposeful, and tailored designs that connect with your audience and elevate your brand.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Solid Purple CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 text-white font-semibold text-base shadow-2xl shadow-purple-600/40 hover:shadow-purple-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Outlined Secondary CTA */}
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-purple-400/80 text-purple-100 bg-purple-950/40 backdrop-blur-md hover:bg-purple-900/60 hover:text-white font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              <span>View Portfolio</span>
            </a>
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 pt-8 border-t border-purple-500/20 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-300">
                4+
              </p>
              <p className="text-xs text-purple-200/80 font-medium uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-300">
                100+
              </p>
              <p className="text-xs text-purple-200/80 font-medium uppercase tracking-wider mt-1">
                Visual Designs
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-300">
                Fast & Fresh
              </p>
              <p className="text-xs text-purple-200/80 font-medium uppercase tracking-wider mt-1">
                Creative Turnaround
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-purple-300">
                100%
              </p>
              <p className="text-xs text-purple-200/80 font-medium uppercase tracking-wider mt-1">
                Flawless Execution
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
