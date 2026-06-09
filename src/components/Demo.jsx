import React from "react";
import { motion } from "framer-motion";
import { Presentation } from "lucide-react";
import { sectionIds, canvaUrl } from "../data/content";

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
          <div className="pointer-events-none absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            {lang === "fr" ? "VIDÉO DE DÉMO" : "DEMO VIDEO"}
          </div>

          <iframe
            src="https://www.youtube.com/embed/TK7XqbExiWo?rel=0"
            title="SmartInvoice Pro - Demo Video"
            className="block aspect-video w-full rounded-[1.8rem] border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Canva Presentation CTA Card */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2.2rem] border border-white/5 bg-slate-900/30 p-8 backdrop-blur-md md:flex-row transition-all duration-300 hover:border-purple-500/20">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              {lang === "fr" ? "Présentation Canva du projet" : "Project Canva Presentation"}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {lang === "fr" 
                ? "Découvrez l'architecture, les objectifs et la vue d'ensemble de SmartInvoice Pro." 
                : "Explore the architecture, goals, and overview of SmartInvoice Pro."}
            </p>
          </div>
          <a
            href={canvaUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-purple-500/10 px-8 py-4 font-bold text-purple-300 transition hover:-translate-y-0.5 hover:bg-purple-500/20 hover:text-white"
          >
            <Presentation className="h-5 w-5 text-purple-400" />
            <span>{lang === "fr" ? "Ouvrir la présentation" : "Open Presentation"}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
