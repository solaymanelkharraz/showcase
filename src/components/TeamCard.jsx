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
    <article className="flex items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06]">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-black">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          initials
        )}
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
            href={portfolio}
            target="_blank"
            rel="noreferrer"
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
