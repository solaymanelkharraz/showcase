import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle, ArrowRight, Download, ExternalLink } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { sectionIds, githubRepoUrl, livePreviewUrl, figmaUrl } from "../data/content";
import { GithubBrand, FigmaBrand } from "./Icons";
import DashboardMockup from "./DashboardMockup";

export default function Hero({ lang, translations }) {
  const t = translations[lang];

  const stats = useMemo(
    () => [
      { label: lang === "fr" ? "Factures / jour" : "Invoices / day", value: "3+" },
      { label: lang === "fr" ? "Modules clés" : "Core modules", value: "6" },
      { label: lang === "fr" ? "Stack Full Stack" : "Full Stack", value: "100%" },
    ],
    [lang]
  );

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-20 text-center lg:grid-cols-2 lg:pt-28 lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-blue-300">
          <Sparkles className="h-4 w-4" />
          {t.badge}
        </div>

        <h1 className="mb-8 text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-slate-400 lg:mx-0">
          {t.heroDesc}
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <a
            href={livePreviewUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35"
          >
            <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-115" />
            {t.btnLive}
          </a>

          <button
            type="button"
            onClick={() => scrollToSection(sectionIds.demo)}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5 text-blue-400" />
            {t.btnDemo}
          </button>

          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-8 py-4 font-bold text-blue-300 transition hover:-translate-y-0.5 hover:bg-blue-500/20"
          >
            <GithubBrand className="h-5 w-5" />
            {t.btnGithub}
          </a>

          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-pink-500/20 bg-pink-500/10 px-8 py-4 font-bold text-pink-300 transition hover:-translate-y-0.5 hover:bg-pink-500/20"
          >
            <FigmaBrand className="h-5 w-5" />
            {t.btnFigma}
          </a>

          <a
            href={t.reportHref}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Download className="h-5 w-5" />
            {t.btnDoc}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/30 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-900/50"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 blur-lg transition group-hover:opacity-10" />
              <p className="relative z-10 text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent">{item.value}</p>
              <p className="relative z-10 mt-1 text-xs text-slate-500 font-medium group-hover:text-slate-400 transition">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <DashboardMockup />
    </section>
  );
}
