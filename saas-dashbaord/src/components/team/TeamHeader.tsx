"use client";

import { motion } from "framer-motion";
import { UserPlus, Download, LayoutGrid, List } from "lucide-react";

interface TeamHeaderProps {
  onInvite: () => void;
  viewMode: "grid" | "table";
  onViewModeChange: (mode: "grid" | "table") => void;
}

export default function TeamHeader({
  onInvite,
  viewMode,
  onViewModeChange,
}: TeamHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-[var(--color-primary-dark)]">
            Organization & Collaboration
          </p>
        </div>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
          Team & Members
        </h1>

        <p className="mt-1 max-w-xl text-[13px] text-[var(--color-text-muted)] leading-relaxed">
          Manage squads, role permissions, active sprint task capacity, and collaborate across global timezones.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* View Toggle */}
        <div className="flex items-center rounded-xl border border-[var(--color-border)] bg-white p-1 shadow-xs">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              viewMode === "grid"
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
            aria-label="Switch to grid view"
          >
            <LayoutGrid size={14} strokeWidth={2.2} />
            <span className="hidden sm:inline">Grid</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("table")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              viewMode === "table"
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
            aria-label="Switch to table view"
          >
            <List size={14} strokeWidth={2.2} />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>

        {/* Export Action */}
        <button
          type="button"
          onClick={() => alert("Exporting team directory roster to CSV...")}
          className="
            flex
            h-9
            items-center
            gap-1.5
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            px-3
            text-xs
            font-medium
            text-[var(--color-text-secondary)]
            shadow-xs
            transition-colors
            hover:border-[var(--color-primary)]
            hover:bg-[var(--color-background-soft)]
            hover:text-[var(--color-text-primary)]
          "
        >
          <Download size={14} strokeWidth={2} />
          <span className="hidden xs:inline">Export</span>
        </button>

        {/* Primary Action: Invite Member */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onInvite}
          className="
            flex
            h-9
            items-center
            gap-1.5
            rounded-xl
            bg-[var(--color-primary-dark)]
            px-3.5
            text-xs
            font-semibold
            text-white
            shadow-xs
            transition-colors
            hover:bg-[var(--color-primary)]
          "
        >
          <UserPlus size={15} strokeWidth={2.4} />
          <span>Invite Member</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
