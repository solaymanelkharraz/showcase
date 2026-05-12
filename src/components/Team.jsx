import React from "react";
import { sectionIds, team } from "../data/content";
import TeamCard from "./TeamCard";

export default function Team({ lang, translations }) {
  const t = translations[lang];

  return (
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
  );
}
