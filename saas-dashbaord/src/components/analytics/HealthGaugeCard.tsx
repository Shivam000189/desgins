"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";

export default function HealthGaugeCard() {
  const score = 94; // Out of 100
  const strokeWidth = 14;

  return (
    <Card variant="default" className="p-4 sm:p-5 flex flex-col justify-between">
      <CardHeader
        title="Sprint & System Health"
        subtitle="Operational efficiency & quality score"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
            <ShieldCheck size={16} strokeWidth={2.2} />
          </div>
        }
      />

      {/* Semicircle Gauge Canvas */}
      <div className="relative flex flex-col items-center justify-center py-2">
        <svg
          viewBox="0 0 180 105"
          className="w-48 sm:w-56 overflow-visible"
          aria-label={`System health gauge: ${score}%`}
        >
          {/* Background Arc */}
          <path
            d="M 15 95 A 75 75 0 0 1 165 95"
            fill="none"
            stroke="var(--color-border-light)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Progress Arc */}
          <motion.path
            d="M 15 95 A 75 75 0 0 1 165 95"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={235.6}
            initial={{ strokeDashoffset: 235.6 }}
            animate={{ strokeDashoffset: 235.6 * (1 - score / 100) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>

        {/* Center Score */}
        <div className="absolute top-14 flex flex-col items-center text-center">
          <span className="text-3xl font-extrabold tracking-tight tabular-nums text-[var(--color-text-primary)]">
            {score}%
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary-dark)]">
            Optimal
          </span>
        </div>
      </div>

      {/* 3 Metric Pills */}
      <div className="grid grid-cols-3 gap-2 border-t border-[var(--color-border-light)] pt-3 text-center">
        <div className="rounded-xl bg-[var(--color-background-soft)] p-2">
          <span className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase">
            Delivery
          </span>
          <p className="text-xs font-bold text-[var(--color-text-primary)] mt-0.5 tabular-nums">
            96%
          </p>
        </div>

        <div className="rounded-xl bg-[var(--color-background-soft)] p-2">
          <span className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase">
            Budget
          </span>
          <p className="text-xs font-bold text-[var(--color-text-primary)] mt-0.5 tabular-nums">
            94%
          </p>
        </div>

        <div className="rounded-xl bg-[var(--color-background-soft)] p-2">
          <span className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase">
            Quality
          </span>
          <p className="text-xs font-bold text-[var(--color-text-primary)] mt-0.5 tabular-nums">
            98%
          </p>
        </div>
      </div>
    </Card>
  );
}
