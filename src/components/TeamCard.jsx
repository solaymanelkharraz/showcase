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

  return (
    <article className="group relative flex items-center gap-6 overflow-hidden rounded-[2.2rem] border border-white/5 bg-slate-950/30 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-slate-950/50 hover:shadow-xl hover:shadow-blue-500/5">
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.2rem]" />
      
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-black text-white shadow-lg shadow-blue-900/35">
        <span className="absolute transition-transform duration-300 group-hover:scale-95">{initials}</span>
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

      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="truncate text-lg font-black text-slate-100 group-hover:text-white transition-colors">{name}</h3>
        <p className="text-sm font-semibold text-blue-400/90 group-hover:text-blue-400 transition-colors">{role}</p>

        <div className="mt-4 flex gap-2.5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-white"
            aria-label={`${name} GitHub`}
          >
            <GithubBrand className="h-4 w-4" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            aria-label={`${name} LinkedIn`}
          >
            <LinkedinBrand className="h-4 w-4" />
          </a>

          <a
            href={portfolio}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            aria-label={`${name} portfolio`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
