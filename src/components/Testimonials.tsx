"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, CLIENT_LOGOS } from "@/data/portfolioData";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
            Trusted by Visionary Founders &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
              Design Leaders.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Hear directly from the founders, festival directors, and product executives who scaled their businesses with Sammy&apos;s design systems.
          </p>
        </div>

        {/* Client Logos Strip */}
        <div className="mb-20 pb-12 border-b border-purple-100 dark:border-purple-900/30">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Selected Brands & Collaborators
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-purple-100/60 dark:border-purple-900/40 bg-white/40 dark:bg-purple-950/20 backdrop-blur-sm group hover:border-purple-300 dark:hover:border-purple-700/50 transition-all"
              >
                <span className="text-sm font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {logo.name}
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase mt-0.5">
                  {logo.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Quote Block Card with purple accent borders */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border-2 border-purple-500/30 dark:border-purple-500/30 p-8 sm:p-14 bg-purple-50/40 dark:bg-[#170F23] shadow-2xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Decorative Large Background Quote */}
              <Quote className="absolute -top-6 -right-6 w-36 h-36 text-purple-600/10 dark:text-purple-500/10 pointer-events-none" />

              {/* Star Rating & Project Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Engagement: {activeTestimonial.project}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-2xl font-heading font-medium text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed mb-8">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-purple-200/60 dark:border-purple-900/40">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.author}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#0F172A] dark:text-[#F8FAFC]">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {activeTestimonial.role} —{" "}
                    <span className="text-slate-600 dark:text-slate-400">
                      {activeTestimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/40 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/50 hover:text-purple-600 dark:hover:text-purple-300 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-8 bg-purple-600"
                      : "w-2.5 bg-purple-200 dark:bg-purple-900/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/40 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/50 hover:text-purple-600 dark:hover:text-purple-300 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
