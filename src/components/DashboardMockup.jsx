import React from "react";
import { motion } from "framer-motion";
import { RotateCw, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import { livePreviewUrl } from "../data/content";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative w-full"
    >
      <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-3 shadow-2xl backdrop-blur-xl">
        {/* Browser Top Bar */}
        <div className="mb-3 flex items-center justify-between px-3">
          {/* Controls */}
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* Navigation Arrows */}
          <div className="hidden gap-3 text-slate-500 sm:flex">
            <ArrowLeft className="h-4 w-4 cursor-not-allowed opacity-50" />
            <ArrowRight className="h-4 w-4 cursor-not-allowed opacity-50" />
          </div>

          {/* URL Bar */}
          <div className="flex flex-1 max-w-md items-center justify-center gap-2 rounded-xl border border-white/5 bg-slate-900/50 px-4 py-1.5 text-xs text-slate-400 mx-4">
            <Lock className="h-3.5 w-3.5 text-emerald-400/90" />
            <span className="truncate tracking-wide text-slate-300">smartinvoice-six.vercel.app</span>
            <RotateCw className="h-3 w-3 text-slate-500 hover:text-slate-300 cursor-pointer ml-auto" />
          </div>

          {/* Spacer for layout balancing */}
          <div className="w-12 sm:w-16" />
        </div>

        {/* Live Website Frame */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-slate-950 shadow-inner h-[460px]">
          <iframe
            src={livePreviewUrl}
            title="SmartInvoice Pro Live Preview"
            className="h-full w-full border-0 bg-slate-900"
            sandbox="allow-scripts allow-same-origin allow-forms"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}
