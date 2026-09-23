"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Package,
  Layers,
  Presentation,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW_STEPS, SERVICES } from "@/data/portfolioData";

export function ProcessAndServices() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return Sparkles;
      case "Layers":
        return Layers;
      case "Box":
        return Package;
      case "Presentation":
        return Presentation;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden bg-purple-50/40 dark:bg-[#11091A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= Part 1: Creative Process Timeline ================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              From Raw Ambition to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
                Iconic Reality.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              A frictionless, 5-phase strategic sprint ensuring zero scope ambiguity, complete creative alignment, and enterprise-grade outputs.
            </p>
          </div>

          {/* Interactive Steps Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {WORKFLOW_STEPS.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  activeStepIndex === idx
                    ? "bg-purple-600 text-white border-purple-500 shadow-xl shadow-purple-600/25 scale-[1.02]"
                    : "bg-white dark:bg-[#170F23] text-slate-700 dark:text-slate-300 border-purple-100 dark:border-purple-900/40 hover:border-purple-300"
                }`}
              >
                <span
                  className={`text-xs font-black tracking-widest block mb-1 ${
                    activeStepIndex === idx ? "text-purple-200" : "text-purple-600 dark:text-purple-400"
                  }`}
                >
                  PHASE {step.step}
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold block line-clamp-1">
                  {step.phase.split(" ")[0]} {step.phase.split(" ")[1]}
                </span>
                <span
                  className={`text-[10px] block mt-1 ${
                    activeStepIndex === idx ? "text-purple-100" : "text-slate-400"
                  }`}
                >
                  {step.duration}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-purple-200 dark:border-[#2E1A47] p-8 sm:p-12 bg-white dark:bg-[#170F23] shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-heading font-black text-xl flex items-center justify-center">
                      {WORKFLOW_STEPS[activeStepIndex].step}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        {WORKFLOW_STEPS[activeStepIndex].phase}
                      </h3>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        Typical Timeline: {WORKFLOW_STEPS[activeStepIndex].duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {WORKFLOW_STEPS[activeStepIndex].description}
                  </p>
                </div>

                {/* Outputs & Deliverables for this step */}
                <div className="lg:w-80 p-6 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200 mb-4">
                    Key Phase Outputs:
                  </h4>
                  <ul className="space-y-3">
                    {WORKFLOW_STEPS[activeStepIndex].outputs.map((out, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= Part 2: Core Services Matrix ================= */}
        <div id="services">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
              Core Creative Services &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
                Design Solutions.
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              High-value creative firepower designed to elevate brand equity, launch flagship products, and dominate saturated categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((srv, index) => {
              const Icon = getServiceIcon(srv.icon);
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-purple-100 dark:border-purple-900/40 p-8 sm:p-10 bg-white dark:bg-[#170F23] shadow-lg hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-300 dark:hover:border-purple-700/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-700/50 flex items-center justify-center text-purple-700 dark:text-purple-300 shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-0.5">
                          {srv.idealFor}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    {/* Deliverables Bullet Points with Purple Icons */}
                    <div className="space-y-2.5 mb-8">
                      {srv.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom CTA */}
                  <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Tailored Fixed-Fee or Retainer Sprints
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
