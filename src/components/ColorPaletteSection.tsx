"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Check } from "lucide-react";

export function ColorPaletteSection() {
  const colors = [
    {
      name: "Vibrant Purple",
      hex: "#A40CE9",
      bgClass: "bg-[#A40CE9]",
      textClass: "text-[#A40CE9]",
      keywords: "Creativity, Innovation, Impact",
      description: "Reflects creativity and passion for bold, fresh ideas that command attention."
    },
    {
      name: "Crisp White",
      hex: "#FFFFFF",
      bgClass: "bg-white border-2 border-slate-200 dark:border-slate-700",
      textClass: "text-slate-800 dark:text-slate-200",
      keywords: "Clarity, Modernity, Breathability",
      description: "Gives visuals generous space to breathe, letting every typographic detail stand out."
    },
    {
      name: "Bold Black & Obsidian",
      hex: "#0D0714",
      bgClass: "bg-[#0D0714] border-2 border-purple-900/60",
      textClass: "text-slate-900 dark:text-purple-300",
      keywords: "Contrast, Readability, Sophistication",
      description: "Adds deep contrast and timeless sophistication, ensuring crisp legibility everywhere."
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
            Color Palette:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
              Modern Elegance with Impact
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I chose this color palette with intention, not just looks. Together, these colors capture the modern, professional style I bring to every project striking, memorable, and built to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-purple-100 dark:border-purple-900/40 p-8 bg-white dark:bg-[#170F23] shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Color Swatch Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${c.bgClass} shadow-md flex items-center justify-center`}>
                    <Palette className={`w-7 h-7 ${c.name === "Crisp White" ? "text-purple-600" : "text-white"}`} />
                  </div>
                  <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {c.hex}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  {c.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
                  {c.keywords}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-100 dark:border-purple-900/30 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Strategic Visual Architecture</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
