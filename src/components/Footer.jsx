import React from "react";

export default function Footer({ lang, translations }) {
  const t = translations[lang];

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 px-6 py-10 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-300">
      {t.footer}
    </footer>
  );
}
