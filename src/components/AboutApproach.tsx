"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Target, Heart } from "lucide-react";

export function AboutApproach() {
  return (
    <section id="approach" className="py-24 sm:py-32 relative overflow-hidden bg-purple-50/50 dark:bg-[#120A1C]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
            The Essence of Our Approach:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
              Blending Creativity with Strategy
            </span>
          </h2>
        </div>

        {/* Top Story Narrative */}
        <div className="max-w-4xl space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-16">
          <p>
            Hi, I’m <strong className="font-bold text-[#0F172A] dark:text-white">Samson Oyetunde</strong>, the creative behind{" "}
            <strong className="font-bold text-purple-700 dark:text-purple-400">Samy21 Design</strong>. Born in 2002, I’ve been designing for over{" "}
            <strong className="font-bold text-[#0F172A] dark:text-white">four years</strong>, turning ideas into visuals that connect, inspire, and stick in people’s minds.
          </p>
          <p>
            For me, design is more than making things look good it’s about telling stories, sparking emotions, and making every pixel count. From bold branding to sleek digital designs, I create work that feels personal, memorable, and impactful.
          </p>
          <p className="text-purple-900 dark:text-purple-200 font-medium">
            If you’ve got an idea, I’ve got the creativity to make it shine.
          </p>
        </div>

        {/* Dual Structure: Designer Photo & Dual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Photo */}
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-purple-300/80 dark:border-purple-600/40 shadow-2xl shadow-purple-900/20 group"
            >
              <Image
                src="/portfolio/ChatGPT-Image-Aug-14-2025-03_08_17-PM.png"
                alt="Samson Oyetunde — Lead Graphic Designer at Samy21 Design"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-heading font-bold text-lg">
                  Samson Oyetunde
                </p>
                <p className="text-purple-300 text-xs font-medium">
                  Creative Director & Lead Designer · Samy21 Design
                </p>
              </div>
            </motion.div>
          </div>

          {/* Pillars: Beyond Aesthetics & Strategy-Driven Results */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Beyond Aesthetics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-purple-200/80 dark:border-purple-900/50 p-8 bg-white dark:bg-[#170F23] shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
                Beyond Aesthetics
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Designs that resonate emotionally.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Visuals that speak to your target audience.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Artistry with a purpose.</span>
                </li>
              </ul>
            </motion.div>

            {/* Strategy-Driven Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-purple-200/80 dark:border-purple-900/50 p-8 bg-white dark:bg-[#170F23] shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
                Strategy-Driven Results
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Goal-oriented design decisions.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Solutions crafted for tangible outcomes.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Conversion-focused visual communication.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
