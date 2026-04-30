import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  Download,
  FileText,
  Globe,
  Layers,
  Mail,
  Menu,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  X,
  Crown,
  ExternalLink,
} from "lucide-react";

// --- CUSTOM BRAND ICONS ---
const GithubBrand = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinBrand = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const sectionIds = {
  features: "features",
  technologies: "technologies",
  roadmap: "roadmap",
  team: "team",
  demo: "demo",
};

const translations = {
  fr: {
    nav: [
      { label: "Fonctionnalités", id: sectionIds.features },
      { label: "Technologies", id: sectionIds.technologies },
      { label: "Roadmap", id: sectionIds.roadmap },
      { label: "Équipe", id: sectionIds.team },
    ],
    badge: "SI-PRO V1.0 · Projet PFE 2026",
    heroTitle: "Gérez votre facturation comme un vrai SaaS.",
    heroDesc:
      "SmartInvoice Pro aide les freelances et les petites entreprises à créer, envoyer et suivre leurs factures avec une interface moderne, rapide et sécurisée.",
    btnDemo: "Voir la démo",
    btnDoc: "Rapport PFE",
    liveLabel: "APERÇU EN DIRECT",
    featuresTitle: "Fonctionnalités clés",
    featuresDesc:
      "Les fonctionnalités principales de SmartInvoice Pro, sans le théâtre marketing inutile.",
    techTitle: "Stack technique",
    techDesc:
      "Une architecture simple, claire et réaliste pour un projet PFE Full Stack.",
    roadmapTitle: "Roadmap du projet",
    roadmapDesc:
      "Ce qui existe dans la V1 et ce qui peut venir après la soutenance.",
    teamTitle: "L'équipe du projet",
    footer: "SmartInvoice Pro · Projet de Fin d'Études · 2026",
    reportHref: "/rapport-pfe.pdf",
    features: [
      {
        icon: ShieldCheck,
        title: "Authentification sécurisée",
        desc: "Connexion, inscription et routes protégées avec Laravel Sanctum.",
      },
      {
        icon: FileText,
        title: "Factures PDF",
        desc: "Génération automatique de factures professionnelles avec DomPDF.",
      },
      {
        icon: Mail,
        title: "Envoi par email",
        desc: "Envoi SMTP automatique des factures aux clients.",
      },
      {
        icon: BarChart3,
        title: "Dashboard financier",
        desc: "Statistiques claires sur les revenus, factures et clients.",
      },
      {
        icon: CreditCard,
        title: "Freemium & Pro",
        desc: "Gestion des limites gratuites et accès premium par abonnement.",
      },
      {
        icon: Layers,
        title: "CRM simple",
        desc: "Gestion des clients, historique et informations importantes.",
      },
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Laravel 11",
      "Laravel Sanctum",
      "MySQL",
      "DomPDF",
      "SMTP",
    ],
    roadmap: [
      {
        status: "Terminé",
        title: "Authentification",
        desc: "Inscription, connexion, token et routes protégées.",
      },
      {
        status: "Terminé",
        title: "Gestion des factures",
        desc: "Création, listing, calcul TVA/HT/TTC et génération PDF.",
      },
      {
        status: "En cours",
        title: "Dashboard final",
        desc: "Connexion complète avec les vraies statistiques backend.",
      },
      {
        status: "Future version",
        title: "Paiement en ligne",
        desc: "Abonnements, checkout et gestion avancée des plans.",
      },
    ],
  },

  en: {
    nav: [
      { label: "Features", id: sectionIds.features },
      { label: "Technologies", id: sectionIds.technologies },
      { label: "Roadmap", id: sectionIds.roadmap },
      { label: "Team", id: sectionIds.team },
    ],
    badge: "SI-PRO V1.0 · PFE Project 2026",
    heroTitle: "Manage your billing like a real SaaS.",
    heroDesc:
      "SmartInvoice Pro helps freelancers and small businesses create, send, and track invoices with a modern, fast, and secure interface.",
    btnDemo: "Watch demo",
    btnDoc: "PFE Report",
    liveLabel: "LIVE PREVIEW",
    featuresTitle: "Key features",
    featuresDesc:
      "The core features of SmartInvoice Pro, without the usual marketing circus.",
    techTitle: "Technical stack",
    techDesc:
      "A simple, clear, and realistic architecture for a Full Stack PFE project.",
    roadmapTitle: "Project roadmap",
    roadmapDesc:
      "What exists in V1 and what can come after the final presentation.",
    teamTitle: "Project team",
    footer: "SmartInvoice Pro · Final Project · 2026",
    reportHref: "/pfe-report.pdf",
    features: [
      {
        icon: ShieldCheck,
        title: "Secure authentication",
        desc: "Register, login, tokens, and protected routes using Laravel Sanctum.",
      },
      {
        icon: FileText,
        title: "PDF invoices",
        desc: "Automatic professional invoice generation using DomPDF.",
      },
      {
        icon: Mail,
        title: "Email sending",
        desc: "Automatic SMTP invoice delivery to clients.",
      },
      {
        icon: BarChart3,
        title: "Financial dashboard",
        desc: "Clear stats for revenue, invoices, and clients.",
      },
      {
        icon: CreditCard,
        title: "Freemium & Pro",
        desc: "Free limits and premium access through subscription plans.",
      },
      {
        icon: Layers,
        title: "Simple CRM",
        desc: "Manage clients, history, and important client data.",
      },
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Laravel 11",
      "Laravel Sanctum",
      "MySQL",
      "DomPDF",
      "SMTP",
    ],
    roadmap: [
      {
        status: "Done",
        title: "Authentication",
        desc: "Register, login, token system, and protected routes.",
      },
      {
        status: "Done",
        title: "Invoice management",
        desc: "Create, list, calculate TVA/HT/TTC, and generate PDFs.",
      },
      {
        status: "In progress",
        title: "Final dashboard",
        desc: "Full connection with real backend statistics.",
      },
      {
        status: "Future version",
        title: "Online payment",
        desc: "Subscriptions, checkout, and advanced plan management.",
      },
    ],
  },
};

const team = [
  {
    name: "Soulaymane El Kharraz",
    role: "Full Stack Developer",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Omar Ameziane",
    role: "Full Stack Developer",
    github: "#",
    linkedin: "#",
  },
];

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const stats = useMemo(
    () => [
      { label: lang === "fr" ? "Factures / jour" : "Invoices / day", value: "3+" },
      { label: lang === "fr" ? "Modules clés" : "Core modules", value: "6" },
      { label: lang === "fr" ? "Stack Full Stack" : "Full Stack", value: "100%" },
    ],
    [lang]
  );

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-50 selection:bg-blue-500/30">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_35%)]" />
      </div>

      {/* Header */}
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

      <main id="top" className="relative z-10 px-6">
        {/* Hero */}
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

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/5 bg-[#020617] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Dashboard</p>
                    <h2 className="text-2xl font-black">SI-PRO Analytics</h2>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Revenue", value: "24,800 DH" },
                    { label: "Invoices", value: "128" },
                    { label: "Clients", value: "42" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="mt-2 text-lg font-black">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex h-40 items-end gap-2 rounded-2xl border border-blue-500/10 bg-gradient-to-t from-blue-600/20 to-transparent p-4">
                  {[40, 80, 50, 90, 60, 75, 55, 95, 70].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.7, delay: index * 0.05 }}
                      className="flex-1 rounded-t-md bg-blue-500/50"
                    />
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {["Invoice #2026-001", "Invoice #2026-002", "Invoice #2026-003"].map(
                    (invoice) => (
                      <div
                        key={invoice}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm text-slate-300">{invoice}</span>
                        </div>

                        <span className="text-xs text-slate-500">PDF</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Demo */}
        <section id={sectionIds.demo} className="mx-auto max-w-6xl scroll-mt-28 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="group relative"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-500 opacity-20 blur-xl transition group-hover:opacity-40" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-900 p-2 shadow-2xl">
              <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 backdrop-blur-md">
                {t.liveLabel}
              </div>

              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="block w-full rounded-[1.8rem]"
                poster="/demo-poster.png"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section id={sectionIds.features} className="mx-auto max-w-7xl scroll-mt-28 py-20">
          <SectionHeader title={t.featuresTitle} description={t.featuresDesc} />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-black">{feature.title}</h3>

                  <p className="text-sm leading-7 text-slate-400">{feature.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Technologies */}
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

        {/* Roadmap */}
        <section
          id={sectionIds.roadmap}
          className="mx-auto max-w-7xl scroll-mt-28 border-t border-white/10 py-20"
        >
          <SectionHeader title={t.roadmapTitle} description={t.roadmapDesc} />

          <div className="grid gap-6 lg:grid-cols-4">
            {t.roadmap.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  {index < 2 ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : index === 2 ? (
                    <Sparkles className="h-5 w-5" />
                  ) : (
                    <Crown className="h-5 w-5" />
                  )}
                </div>

                <p className="mb-2 text-xs font-black uppercase tracking-widest text-blue-300">
                  {item.status}
                </p>

                <h3 className="mb-3 text-lg font-black">{item.title}</h3>

                <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Team */}
        <section
          id={sectionIds.team}
          className="mx-auto max-w-7xl scroll-mt-28 border-t border-white/10 py-20"
        >
          <h2 className="mb-12 text-center text-3xl font-black md:text-4xl">
            {t.teamTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-xs font-medium text-slate-500">
        {t.footer}
      </footer>
    </div>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
        {description}
      </p>
    </div>
  );
}

function TeamCard({ name, role, github, linkedin }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="flex items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06]">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-black">
        {initials}
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-lg font-black">{name}</h3>
        <p className="text-sm font-medium text-blue-400">{role}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={`${name} GitHub`}
          >
            <GithubBrand className="h-4 w-4" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={`${name} LinkedIn`}
          >
            <LinkedinBrand className="h-4 w-4" />
          </a>

          <a
            href="#"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={`${name} portfolio`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}