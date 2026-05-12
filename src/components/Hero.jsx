import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle, ArrowRight, Download } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { sectionIds } from "../data/content";
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
          <button
            type="button"
            onClick={() => scrollToSection(sectionIds.demo)}
            className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            <PlayCircle className="h-5 w-5" />
            {t.btnDemo}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>

          <a
            href={t.reportHref}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Download className="h-5 w-5" />
            {t.btnDoc}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-2xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <DashboardMockup />
    </section>
  );
}
