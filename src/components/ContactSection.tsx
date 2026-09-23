"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Check,
  Copy,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Identity Design",
    budget: "$5,000 – $10,000",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const directEmail = "oyetundesamson9@gmail.com";
  const whatsappUrl = "https://wa.me/?text=Hi%20Samson,%20I'd%20like%20to%20work%20with%20you%20on%20a%20design%20project";

  const projectTypes = [
    "Brand Identity Design",
    "Marketing & Promotional Materials",
    "Social Media Design",
    "Packaging Design",
    "Presentation Design",
    "Custom Design Project",
  ];

  const budgetTiers = [
    "$1,500 – $3,000",
    "$3,000 – $6,000",
    "$6,000 – $12,000",
    "$12,000+",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#A40CE9", "#7C3AED", "#C084FC", "#38BDF8", "#F472B6"],
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Availability, and Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
                Ready to Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-300">
                  Project?
                </span>
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                If you’re looking for designs that not only look stunning but also deliver real results, you’ve come to the right place. I combine creativity with strategy to create visuals that connect with your audience and inspire them to take action. Let’s work together to bring your ideas to life and take your brand to the next level.
              </p>
            </div>

            {/* Direct Email Badge */}
            <div className="p-5 rounded-2xl border border-purple-200 dark:border-[#2E1A47] bg-purple-50/60 dark:bg-[#170F23] flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Me Directly</p>
                  <a href={`mailto:${directEmail}`} className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block">
                    {directEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/50 text-xs font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors flex items-center gap-1.5 shrink-0 ml-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Direct CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Whatsapp Me</span>
            </a>

            {/* Social Direct Links */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Channels
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#170F23] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 transition-all text-xs font-semibold"
                >
                  <Twitter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Message Me on &quot;X&quot;</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#170F23] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 transition-all text-xs font-semibold"
                >
                  <Instagram className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Latest on Instagram</span>
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-6 border-t border-purple-100 dark:border-purple-900/30 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Fast & Fresh turnaround on all client proposals</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Flawless execution & personalized collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Proposal Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-purple-200 dark:border-[#2E1A47] p-8 sm:p-12 bg-white dark:bg-[#170F23] shadow-2xl relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
                    Proposal Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}. I have received your project details and will prepare a tailored scope and timeline proposal promptly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/40"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-800/80 bg-purple-50/30 dark:bg-[#120A1C] text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@brand.com"
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-800/80 bg-purple-50/30 dark:bg-[#120A1C] text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown / Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Primary Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-800/80 bg-purple-50/30 dark:bg-[#120A1C] text-sm text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-white dark:bg-[#170F23] text-[#0F172A] dark:text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget Range Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Estimated Budget Range (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetTiers.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                            formData.budget === tier
                              ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30"
                              : "border-purple-200 dark:border-purple-900 bg-purple-50/30 dark:bg-[#120A1C] text-slate-700 dark:text-slate-300 hover:border-purple-400"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand, what visual transformation you are looking to achieve, and your timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 dark:border-purple-800/80 bg-purple-50/30 dark:bg-[#120A1C] text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Proposal Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Proposal Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
