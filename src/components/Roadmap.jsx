import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Crown } from "lucide-react";
import { sectionIds } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Roadmap({ lang, translations }) {
  const t = translations[lang];

  return (
    <section
      id={sectionIds.roadmap}
      className="mx-auto max-w-7xl scroll-mt-28 border-t border-white/10 py-20"
    >
      <SectionHeader title={t.roadmapTitle} description={t.roadmapDesc} />

      <div className="relative">
        {/* Desktop Pipeline Connection Gradient Line */}
        <div className="absolute top-[2.75rem] left-12 right-12 hidden h-[2px] bg-gradient-to-r from-emerald-500/70 via-amber-500/70 to-indigo-500/25 lg:block z-0" />

        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.roadmap.map((item, index) => {
            const isDone = item.status.toLowerCase().includes("terminé") || item.status.toLowerCase() === "done";
            const isInProgress = item.status.toLowerCase().includes("cours") || item.status.toLowerCase() === "in progress";
                        let statusStyle = "bg-indigo-50 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400";
            let badgeStyle = "text-indigo-600 bg-indigo-50 border border-indigo-100 dark:text-indigo-400/90 dark:bg-indigo-500/5 dark:border-indigo-500/10";
            let glowColor = "from-indigo-600/5";
            if (isDone) {
              statusStyle = "bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-500/15 dark:border-emerald-500/25 dark:text-emerald-400";
              badgeStyle = "text-emerald-600 bg-emerald-50 border border-emerald-100 dark:text-emerald-400/90 dark:bg-emerald-500/5 dark:border-emerald-500/10";
              glowColor = "from-emerald-500/5";
            } else if (isInProgress) {
              statusStyle = "bg-amber-50 border border-amber-200 text-amber-600 dark:bg-amber-500/15 dark:border-amber-500/25 dark:text-amber-400";
              badgeStyle = "text-amber-600 bg-amber-50 border border-amber-100 dark:text-amber-400/90 dark:bg-amber-500/5 dark:border-amber-500/10";
              glowColor = "from-amber-500/5";
            }

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 dark:border-white/5 dark:bg-slate-950/30 dark:hover:bg-slate-950/40 dark:hover:shadow-2xl dark:hover:shadow-blue-500/5"
              >
                {/* Visual Glow Accent */}
                <div className={`absolute -inset-px bg-gradient-to-br ${glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.2rem]`} />

                {/* Milestone Node Badge */}
                <div className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${statusStyle}`}>
                  {index < 2 ? (
                    <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                  ) : index === 2 ? (
                    <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                  ) : (
                    <Crown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                  )}
                </div>

                <div className="relative z-10">
                  <span className={`inline-block mb-3.5 text-[10px] font-black uppercase tracking-wider rounded-lg px-2.5 py-0.5 ${badgeStyle}`}>
                    {item.status}
                  </span>

                  <h3 className="mb-3 text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">{item.title}</h3>

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-350 transition-colors">{item.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
