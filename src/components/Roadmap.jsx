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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.roadmap.map((item, index) => {
          const isDone = item.status.toLowerCase().includes("terminé") || item.status.toLowerCase() === "done";
          const isInProgress = item.status.toLowerCase().includes("cours") || item.status.toLowerCase() === "in progress";
          
          let statusStyle = "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400";
          let badgeStyle = "text-indigo-400";
          if (isDone) {
            statusStyle = "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400";
            badgeStyle = "text-emerald-400";
          } else if (isInProgress) {
            statusStyle = "bg-amber-500/10 border border-amber-500/20 text-amber-400";
            badgeStyle = "text-amber-400";
          }

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-white/5 bg-slate-950/30 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-slate-950/40"
            >
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${statusStyle}`}>
                {index < 2 ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : index === 2 ? (
                  <Sparkles className="h-5 w-5" />
                ) : (
                  <Crown className="h-5 w-5" />
                )}
              </div>

              <p className={`mb-2 text-xs font-black uppercase tracking-widest ${badgeStyle}`}>
                {item.status}
              </p>

              <h3 className="mb-3 text-lg font-black text-slate-100 group-hover:text-white transition-colors">{item.title}</h3>

              <p className="text-sm leading-7 text-slate-400 group-hover:text-slate-350 transition-colors">{item.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
