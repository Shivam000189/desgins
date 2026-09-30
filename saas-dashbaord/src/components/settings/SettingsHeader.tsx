"use client";

import { motion } from "framer-motion";

export default function SettingsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-1"
    >
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
        <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-[var(--color-primary-dark)]">
          Preferences & System
        </p>
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
        Settings & Configuration
      </h1>

      <p className="max-w-xl text-[13px] text-[var(--color-text-muted)] leading-relaxed">
        Customize your personal profile, workspace billing, notification channels, security policies, and developer API keys.
      </p>
    </motion.div>
  );
}
