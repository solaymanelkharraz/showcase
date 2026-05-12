import React from "react";
import { motion } from "framer-motion";
import { sectionIds } from "../data/content";

export default function Demo({ lang, translations }) {
  const t = translations[lang];

  return (
    <section id={sectionIds.demo} className="mx-auto max-w-6xl scroll-mt-28 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55 }}
        className="group relative"
      >
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-500 opacity-20 blur-xl transition group-hover:opacity-40" />

        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-900 p-2 shadow-2xl">
          <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            {t.liveLabel}
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="block w-full rounded-[1.8rem]"
            poster="/demo-poster.png"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
