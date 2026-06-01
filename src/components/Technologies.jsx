import React from "react";
import { Code2, Database, Layers, CheckCircle2 } from "lucide-react";
import { sectionIds } from "../data/content";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const getTechDetails = (tech, lang) => {
  const details = {
    "React": { 
      category: "Frontend", 
      desc: lang === "fr" ? "Bibliothèque UI Réactive" : "Reactive UI Library", 
      color: "from-cyan-500/10 via-cyan-500/0 border-cyan-500/20 text-cyan-400" 
    },
    "Tailwind CSS": { 
      category: "Frontend", 
      desc: lang === "fr" ? "Design & Styling Moderne" : "Modern Styling System", 
      color: "from-sky-500/10 via-sky-500/0 border-sky-500/20 text-sky-400" 
    },
    "Framer Motion": { 
      category: "Frontend", 
      desc: lang === "fr" ? "Animations Translucides" : "Smooth Micro-animations", 
      color: "from-purple-500/10 via-purple-500/0 border-purple-500/20 text-purple-400" 
    },
    "Laravel 11": { 
      category: "Backend", 
      desc: lang === "fr" ? "SaaS Core Framework" : "Core SaaS Framework", 
      color: "from-rose-500/10 via-rose-500/0 border-rose-500/20 text-rose-400" 
    },
    "Laravel Sanctum": { 
      category: "Backend", 
      desc: lang === "fr" ? "Sécurité Token API" : "Secure API Authentication", 
      color: "from-orange-500/10 via-orange-500/0 border-orange-500/20 text-orange-400" 
    },
    "MySQL": { 
      category: lang === "fr" ? "Base de données" : "Database", 
      desc: lang === "fr" ? "Stockage Relationnel" : "Relational Storage", 
      color: "from-blue-500/10 via-blue-500/0 border-blue-500/20 text-blue-400" 
    },
    "DomPDF": { 
      category: lang === "fr" ? "Librairie" : "Library", 
      desc: lang === "fr" ? "Moteur de factures PDF" : "PDF Invoice Engine", 
      color: "from-amber-500/10 via-amber-500/0 border-amber-500/20 text-amber-400" 
    },
    "SMTP": { 
      category: "Service", 
      desc: lang === "fr" ? "Notifications d'e-mails" : "SMTP Email Deliverability", 
      color: "from-emerald-500/10 via-emerald-500/0 border-emerald-500/20 text-emerald-400" 
    }
  };
  return details[tech] || { 
    category: "Stack", 
    desc: "Full Stack Module", 
    color: "from-slate-500/10 via-slate-500/0 border-slate-500/20 text-slate-400" 
  };
};

export default function Technologies({ lang, translations }) {
  const t = translations[lang];

  return (
    <section
      id={sectionIds.technologies}
      className="mx-auto max-w-7xl scroll-mt-28 border-t border-white/10 py-20"
    >
      <SectionHeader title={t.techTitle} description={t.techDesc} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.technologies.map((tech, index) => {
          const detail = getTechDetails(tech, lang);
          
          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/5 dark:bg-slate-950/30 dark:hover:bg-slate-950/60 dark:hover:shadow-blue-500/5 ${detail.color}`}
            >
              {/* Internal Glowing Backplate hover */}
              <div className="absolute -inset-px bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.2rem] from-blue-500/5 to-transparent" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition duration-300">
                      {detail.category}
                    </span>
                    {tech.includes("Laravel") || tech === "DomPDF" || tech === "SMTP" ? (
                      <Code2 className="h-4 w-4 text-slate-500 dark:text-slate-400 opacity-80 group-hover:scale-110 group-hover:rotate-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition duration-300" />
                    ) : tech === "MySQL" ? (
                      <Database className="h-4 w-4 text-slate-500 dark:text-slate-400 opacity-80 group-hover:scale-110 group-hover:rotate-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition duration-300" />
                    ) : (
                      <Layers className="h-4 w-4 text-slate-500 dark:text-slate-400 opacity-80 group-hover:scale-110 group-hover:rotate-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition duration-300" />
                    )}
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition duration-300">
                    {tech}
                  </h3>
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition duration-300">
                  {detail.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
