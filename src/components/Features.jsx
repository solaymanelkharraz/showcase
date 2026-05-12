import React from "react";
import { motion } from "framer-motion";
import { sectionIds } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Features({ lang, translations }) {
  const t = translations[lang];

  return (
    <section id={sectionIds.features} className="mx-auto max-w-7xl scroll-mt-28 py-20">
      <SectionHeader title={t.featuresTitle} description={t.featuresDesc} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t.features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-black">{feature.title}</h3>

              <p className="text-sm leading-7 text-slate-400">{feature.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
