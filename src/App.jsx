import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { translations } from "./data/content";
import { scrollToSection } from "./utils/scroll";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Technologies from "./components/Technologies";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const sharedProps = { lang, translations, theme, setTheme };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-50 selection:bg-blue-500/30 transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      {/* Visual Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] transition-colors duration-300" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-[120px] transition-colors duration-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_35%)] transition-colors duration-300" />
      </div>

      <Header
        {...sharedProps}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setLang={setLang}
      />

      <main id="top" className="relative z-10 px-6">
        <Hero {...sharedProps} />
        <Demo {...sharedProps} />
        <Features {...sharedProps} />
        <Technologies {...sharedProps} />
        <Roadmap {...sharedProps} />
        <Team {...sharedProps} />
      </main>

      <Footer {...sharedProps} />

      {/* Floating Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("top")}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 shadow-xl backdrop-blur-md transition-all hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}