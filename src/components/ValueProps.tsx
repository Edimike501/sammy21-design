"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, TrendingUp, Sparkles, Eye } from "lucide-react";

export function ValueProps() {
  const pillars = [
    {
      icon: Compass,
      title: "Intuitive Design",
      headline: "Design that feels natural — see, understand, and connect instantly.",
      description:
        "Visuals that your audience just gets without friction. Intuitive layout hierarchies and clear sightlines that guide viewers smoothly toward your core message.",
      badge: "Natural Flow",
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      headline: "Strategic placement of calls-to-action to convert visitors.",
      description:
        "A high-converting design is more than just pretty pictures; it's a strategic asset optimized to turn your audience into valuable clients and loyal brand advocates.",
      badge: "Strategic ROI",
    },
    {
      icon: Sparkles,
      title: "Visually Striking",
      headline: "Turn heads and stop the scroll in competitive feeds.",
      description:
        "Every pixel with purpose. Bold color chemistry, bespoke typography, and polished perfection that ensure your brand commands attention in digital and print mediums.",
      badge: "Stop the Scroll",
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
            Crafting Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
              Digital Presence
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A high-converting design is more than just pretty pictures; it’s a strategic asset. I design modern, clean, and visually striking designs specifically optimized to turn your audience into valuable clients.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-purple-100 dark:border-purple-900/40 p-8 bg-purple-50/50 dark:bg-purple-950/20 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700/60 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700/50 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100/80 dark:bg-purple-900/40 px-3 py-1 rounded-full border border-purple-200/50 dark:border-purple-800/40">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-200/90 mb-4">
                    {pillar.headline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-100 dark:border-purple-900/30 flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                  Every pixel with purpose
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
