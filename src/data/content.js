import {
  ShieldCheck,
  FileText,
  Mail,
  BarChart3,
  CreditCard,
  Layers,
} from "lucide-react";

export const sectionIds = {
  features: "features",
  technologies: "technologies",
  roadmap: "roadmap",
  team: "team",
  demo: "demo",
};

export const translations = {
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
    btnGithub: "Code Source",
    btnLive: "Démo en direct",
    btnFigma: "Maquette Figma",
    btnCanva: "Présentation Canva",
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
    reportHref: "/rapport-de-PFE-ISTA-NTIC.pdf",
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
    btnGithub: "Source Code",
    btnLive: "Live Preview",
    btnFigma: "Figma Design",
    btnCanva: "Canva Presentation",
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
    reportHref: "/rapport-de-PFE-ISTA-NTIC.pdf",
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

export const team = [
  {
    name: "Soulaymane El Kharraz",
    role: "Full Stack Developer",
    github: "https://github.com/solaymanelkharraz",
    linkedin: "https://www.linkedin.com/in/soulayman-elkharraz-31b66a336",
    portfolio: "https://portfolio-2cd93f.gitlab.io/",
    image: "/solayman.jpg",
  },
  {
    name: "Omar Ameziane",
    role: "Full Stack Developer",
    github: "https://github.com/amezianeomar",
    linkedin: "https://www.linkedin.com/in/omar-ameziane-40364a336/",
    portfolio: "https://portfolio-45d240.gitlab.io/",
    image: "/omar.jpeg",
  },
];

export const githubRepoUrl = "https://github.com/amezianeomar/smartinvoice";
export const livePreviewUrl = "https://smartinvoice-six.vercel.app";
export const figmaUrl = "https://www.figma.com/proto/nyyR1jQExSKTzLqQmYSmDE/SmartInvoice?node-id=14-751&t=z3YOMfvl4gJonlzv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A751";
export const canvaUrl = "https://canva.link/dmkahbcitbkhi7j";


