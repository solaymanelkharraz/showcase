import React from "react";
import { Code2, Database, Layers } from "lucide-react";
import { sectionIds } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Technologies({ lang, translations }) {
  const t = translations[lang];

  return (
    <section
      id={sectionIds.technologies}
      className="mx-auto max-w-7xl scroll-mt-28 border-t border-white/10 py-20"
    >
      <SectionHeader title={t.techTitle} description={t.techDesc} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.technologies.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
            {tech.includes("Laravel") || tech === "DomPDF" || tech === "SMTP" ? (
              <Code2 className="h-5 w-5 text-blue-400" />
            ) : tech === "MySQL" ? (
              <Database className="h-5 w-5 text-blue-400" />
            ) : (
              <Layers className="h-5 w-5 text-blue-400" />
            )}

            <span className="font-bold">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
