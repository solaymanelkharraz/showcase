import React from "react";
import { FileText, Globe, Menu, X, Sun, Moon } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { GithubBrand } from "./Icons";
import { githubRepoUrl } from "../data/content";

export default function Header({
  lang,
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
  translations,
  theme,
  setTheme,
}) {
  const t = translations[lang];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 dark:border-white/10 dark:bg-[#020617]/75 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="Go to top"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/25 transition duration-300 group-hover:scale-105">
            <FileText className="h-6 w-6 text-white" />
          </div>

          <div className="text-left">
            <span className="block text-lg font-black tracking-tight text-slate-900 dark:text-slate-50 transition duration-300">
              SmartInvoice Pro
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400 transition duration-300">SI-PRO</span>
          </div>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {t.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 transition-all duration-300 dark:hover:bg-white/10 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => setLang((current) => (current === "fr" ? "en" : "fr"))}
            className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 transition dark:hover:bg-white/10 cursor-pointer"
            aria-label="Change language"
          >
            <Globe className="h-4 w-4" />
            {lang.toUpperCase()}
          </button>

          {/* GitHub Link */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-bold text-blue-600 dark:text-blue-300 transition hover:bg-blue-500/20 hover:text-blue-800 dark:hover:text-blue-100"
            aria-label="GitHub Repository"
          >
            <GithubBrand className="h-4 w-4" />
            <span>{t.btnGithub}</span>
          </a>
        </nav>

        {/* Mobile Toggle and Theme Switcher wrapper */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2 text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#020617] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {t.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setLang((current) => (current === "fr" ? "en" : "fr"))}
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-3 text-sm font-bold text-slate-800 dark:text-slate-300 cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              {lang === "fr" ? "Switch to English" : "Passer en français"}
            </button>

            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-3 text-sm font-bold text-blue-600 dark:text-blue-300"
            >
              <GithubBrand className="h-4 w-4" />
              <span>{t.btnGithub}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
