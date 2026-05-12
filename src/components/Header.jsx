import React from "react";
import { FileText, Globe, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/scroll";

export default function Header({
  lang,
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
  translations,
}) {
  const t = translations[lang];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-3"
          aria-label="Go to top"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <FileText className="h-6 w-6" />
          </div>

          <div className="text-left">
            <span className="block text-lg font-black tracking-tight">
              SmartInvoice Pro
            </span>
            <span className="block text-xs text-slate-400">SI-PRO</span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setLang((current) => (current === "fr" ? "en" : "fr"))}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold transition hover:bg-white/10"
            aria-label="Change language"
          >
            <Globe className="h-4 w-4" />
            {lang.toUpperCase()}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#020617] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {t.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-300 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setLang((current) => (current === "fr" ? "en" : "fr"))}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold"
            >
              <Globe className="h-4 w-4" />
              {lang === "fr" ? "Switch to English" : "Passer en français"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
