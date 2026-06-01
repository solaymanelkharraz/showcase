import React from "react";
import { motion } from "framer-motion";
import { sectionIds } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Features({ lang, translations }) {
  const t = translations[lang];

  return (
    <section id={sectionIds.features} className="mx-auto max-w-7xl scroll-mt-28 py-20">
      <SectionHeader title={t.featuresTitle} description={t.featuresDesc} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/5 dark:bg-slate-950/30 dark:hover:bg-slate-950/50 dark:hover:shadow-blue-500/5"
            >
              {/* Radial gradient background hover highlight */}
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.2rem]" />
              
              <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:border-blue-500">
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
              </div>

              <h3 className="relative z-10 mb-3 text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">{feature.title}</h3>

              <p className="relative z-10 text-sm leading-7 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">{feature.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
