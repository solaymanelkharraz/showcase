import React from "react";

export default function Footer({ lang, translations }) {
  const t = translations[lang];

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-xs font-medium text-slate-500">
      {t.footer}
    </footer>
  );
}
