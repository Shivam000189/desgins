"use client";

import { motion } from "framer-motion";
import { Download, RefreshCw } from "lucide-react";
import type { AnalyticsPeriod } from "@/types/analytics";

interface AnalyticsHeaderProps {
  period: AnalyticsPeriod;
  onPeriodChange: (p: AnalyticsPeriod) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const periods: Array<{ key: AnalyticsPeriod; label: string }> = [
  { key: "7D", label: "7 Days" },
  { key: "30D", label: "30 Days" },
  { key: "Quarter", label: "This Quarter" },
  { key: "YTD", label: "Year to Date" },
];

export default function AnalyticsHeader({
  period,
  onPeriodChange,
  onRefresh,
  isRefreshing,
}: AnalyticsHeaderProps) {
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
            Metrics & Performance
          </p>
        </div>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
          Analytics & Insights
        </h1>

        <p className="mt-1 max-w-xl text-[13px] text-[var(--color-text-muted)] leading-relaxed">
          Measure delivery velocity, track cross-period revenue growth, and evaluate resource allocation.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* Period Selector Tabs */}
        <div className="flex items-center rounded-xl border border-[var(--color-border)] bg-white p-1 shadow-xs">
          {periods.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => onPeriodChange(p.key)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                period === p.key
                  ? "bg-[var(--color-primary-dark)] text-white shadow-xs"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Refresh Action */}
        <button
          type="button"
          onClick={onRefresh}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            border
            border-[var(--color-border)]
            bg-white
            text-[var(--color-text-secondary)]
            shadow-xs
            transition-colors
            hover:border-[var(--color-primary)]
            hover:text-[var(--color-primary-dark)]
          "
          title="Refresh analytics data"
        >
          <RefreshCw
            size={14}
            className={isRefreshing ? "animate-spin text-[var(--color-primary)]" : ""}
          />
        </button>

        {/* Export Action */}
        <button
          type="button"
          onClick={() => alert("Downloading analytics report (PDF/CSV)...")}
          className="
            flex
            h-8
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
            hover:text-[var(--color-text-primary)]
          "
        >
          <Download size={14} />
          <span className="hidden xs:inline">Export</span>
        </button>
      </div>
    </motion.div>
  );
}
