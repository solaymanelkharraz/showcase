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

      <div className="grid gap-6 lg:grid-cols-4">
        {t.roadmap.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
              {index < 2 ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : index === 2 ? (
                <Sparkles className="h-5 w-5" />
              ) : (
                <Crown className="h-5 w-5" />
              )}
            </div>

            <p className="mb-2 text-xs font-black uppercase tracking-widest text-blue-300">
              {item.status}
            </p>

            <h3 className="mb-3 text-lg font-black">{item.title}</h3>

            <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
