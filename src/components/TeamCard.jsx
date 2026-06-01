import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubBrand, LinkedinBrand } from "./Icons";

export default function TeamCard({ name, role, github, linkedin, portfolio, image }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const tags = name.toLowerCase().includes("soulaymane") 
    ? ["React Core", "Laravel 11", "Tailwind CSS", "Architecture UI"]
    : ["APIs Sanctum", "DomPDF Engine", "SMTP Mailer", "MySQL Database"];

  return (
    <article className="group relative flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 dark:border-white/5 dark:bg-slate-950/30 dark:hover:bg-slate-950/50 dark:hover:shadow-blue-500/5">
      {/* Background Hover Accent */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.2rem]" />
      
      {/* Fallback & Image Wrapper */}
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 text-2xl font-black text-white shadow-lg shadow-blue-900/35">
        <span className="absolute transition-transform duration-500 group-hover:scale-90 group-hover:rotate-6">{initials}</span>
        {image && (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
      </div>

      <div className="relative z-10 flex-1 min-w-0 text-center md:text-left">
        <h3 className="truncate text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">{name}</h3>
        <p className="text-sm font-bold text-blue-600 dark:text-blue-400/90 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{role}</p>

        {/* Contribution Tags */}
        <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg px-2 py-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:border-blue-500/10 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center md:justify-start gap-2.5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 p-2.5 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-slate-300 dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
            aria-label={`${name} GitHub`}
          >
            <GithubBrand className="h-4 w-4" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 p-2.5 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600"
            aria-label={`${name} LinkedIn`}
          >
            <LinkedinBrand className="h-4 w-4" />
          </a>

          <a
            href={portfolio}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 p-2.5 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white dark:hover:border-indigo-600"
            aria-label={`${name} portfolio`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
