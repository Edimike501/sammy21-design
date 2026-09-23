"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Palette,
  Type,
  Layout,
  TrendingUp,
  Quote,
  CheckCircle2,
  Calendar,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { CaseStudy } from "@/data/portfolioData";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"strategy" | "comparison" | "gallery">("strategy");

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal / Drawer Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl h-full sm:h-auto sm:max-h-[92vh] flex flex-col bg-white dark:bg-[#120A1C] border border-purple-200 dark:border-[#2E1A47] sm:rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-purple-100 dark:border-purple-900/40 bg-white/90 dark:bg-[#120A1C]/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                {caseStudy.category}
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-500 dark:text-slate-400">
                {caseStudy.year} · {caseStudy.industry}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10 custom-scrollbar">
            {/* Title & Metadata Hero */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                Client: {caseStudy.client}
              </p>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
                {caseStudy.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
                {caseStudy.subtitle}
              </p>

              {/* Deliverables Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {caseStudy.deliverables.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-purple-50 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/40"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Mockup Banner */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-purple-200 dark:border-purple-800/60 shadow-md">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>

            {/* Results KPI Highlight Banner */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-purple-400/30 pb-4 md:pb-0 md:pr-6">
                  <div className="text-4xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300">
                    {caseStudy.results.stat}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-200 uppercase mt-1">
                    {caseStudy.results.label}
                  </p>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <Quote className="w-6 h-6 text-purple-300/60 shrink-0 mt-1" />
                    <p className="italic text-sm sm:text-base text-purple-100">
                      &quot;{caseStudy.results.quote}&quot;
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-purple-300 tracking-wide pl-8">
                    — {caseStudy.results.author}
                  </p>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="rounded-2xl p-6 sm:p-8 border border-purple-100 dark:border-purple-900/40 bg-purple-50/50 dark:bg-purple-950/20">
              <h3 className="text-lg font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Interactive Tabs for In-Depth Exploration */}
            <div>
              <div className="flex items-center gap-3 border-b border-purple-100 dark:border-purple-900/40 pb-3 mb-6">
                <button
                  onClick={() => setActiveTab("strategy")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "strategy"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-950/30"
                  }`}
                >
                  Design Strategy & Rationale
                </button>

                {caseStudy.beforeImage && caseStudy.afterImage && (
                  <button
                    onClick={() => setActiveTab("comparison")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === "comparison"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-950/30"
                    }`}
                  >
                    Before / After Slider
                  </button>
                )}

                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "gallery"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-950/30"
                  }`}
                >
                  Multi-Angle Gallery
                </button>
              </div>

              {/* Tab 1: Strategy & Visual Rationale */}
              {activeTab === "strategy" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Color Psychology */}
                  <div className="p-6 rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-4">
                      <Palette className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                      Color Psychology
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {caseStudy.strategy.colorPsychology}
                    </p>
                  </div>

                  {/* Typography Rationale */}
                  <div className="p-6 rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-4">
                      <Type className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                      Typography Rationale
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {caseStudy.strategy.typographyRationale}
                    </p>
                  </div>

                  {/* Layout & Grid */}
                  <div className="p-6 rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-4">
                      <Layout className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                      Layout & Visual Grid
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {caseStudy.strategy.layoutAndGrid}
                    </p>
                  </div>

                  {/* Key Execution Decisions */}
                  <div className="md:col-span-3 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/20 dark:bg-purple-950/10">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] mb-3">
                      Key Execution Decisions:
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.strategy.keyDecisions.map((decision, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Before / After Slider */}
              {activeTab === "comparison" && caseStudy.beforeImage && caseStudy.afterImage && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Drag the central slider left or right to inspect the transformation from legacy design to high-impact identity:
                  </p>
                  <BeforeAfterSlider
                    beforeImage={caseStudy.beforeImage}
                    afterImage={caseStudy.afterImage}
                  />
                </div>
              )}

              {/* Tab 3: Multi-Angle Gallery */}
              {activeTab === "gallery" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {caseStudy.galleryImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden border border-purple-200 dark:border-purple-800/50 group"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${caseStudy.title} view ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to achieve similar commercial results for your brand?
                </p>
                <p className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  Book a strategic brand consultation with Sammy.
                </p>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
