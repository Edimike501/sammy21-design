"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolioData";
import { CaseStudyModal } from "@/components/CaseStudyModal";

type FilterCategory = "All Work" | "Brand Identity" | "Social Media & Flyers" | "Packaging" | "UI/Digital";

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All Work");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filterTabs: FilterCategory[] = [
    "All Work",
    "Brand Identity",
    "Social Media & Flyers",
    "Packaging",
    "UI/Digital",
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Work") return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              Curated Case Studies &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
                Visual Impact.
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Explore how intentional visual systems, packaging ergonomics, and brand architecture solve high-stakes business challenges.
            </p>
          </div>

          <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 px-4 py-2 rounded-xl self-start md:self-end">
            ⚡ Click any case study for deep-dive strategy & metrics
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const count =
              tab === "All Work"
                ? CASE_STUDIES.length
                : CASE_STUDIES.filter((c) => c.category === tab).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === tab
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-white dark:bg-purple-950/30 text-slate-600 dark:text-slate-300 border border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700/60"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab
                      ? "bg-purple-800 text-purple-200"
                      : "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Grid with Framer Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCaseStudy(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-900/40 bg-white dark:bg-[#170F23] shadow-md hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-purple-950/20">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-600/90 text-white backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold text-purple-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs shadow-xl shadow-purple-900/50 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </span>
                  </div>

                  {/* Bottom Thumbnail Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                      {project.client}
                    </p>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-purple-200 transition-colors line-clamp-1">
                      {project.title.split("—")[0]}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Proof Summary */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Quick Metric Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/40 text-purple-800 dark:text-purple-300 text-xs font-semibold mb-4">
                      <span className="font-extrabold text-purple-600 dark:text-purple-400">
                        {project.results.stat}
                      </span>
                      <span>{project.results.label}</span>
                    </div>
                  </div>

                  {/* Footer link trigger */}
                  <div className="pt-4 border-t border-purple-100 dark:border-purple-900/30 flex items-center justify-between text-xs font-bold text-purple-700 dark:text-purple-400 group-hover:text-purple-500 transition-colors">
                    <span>Inspect Design Strategy</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Deep-Dive Sheet Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
