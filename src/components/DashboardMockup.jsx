import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function DashboardMockup() {
  return (
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
  );
}
