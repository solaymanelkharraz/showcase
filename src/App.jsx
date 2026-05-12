import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { translations } from "./data/content";

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

  const sharedProps = { lang, translations };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-50 selection:bg-blue-500/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      {/* Visual Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_35%)]" />
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
    </div>
  );
}