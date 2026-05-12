import React from "react";

export default function SectionHeader({ title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
        {description}
      </p>
    </div>
  );
}
