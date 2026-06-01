import React from "react";

export default function SectionHeader({ title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base font-medium transition-colors">
        {description}
      </p>
    </div>
  );
}
