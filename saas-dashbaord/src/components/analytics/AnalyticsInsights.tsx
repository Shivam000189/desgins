"use client";

import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { performanceInsights } from "@/lib/dashboard/analyticsData";

export default function AnalyticsInsights() {
  return (
    <Card variant="default" className="p-4 sm:p-5 flex flex-col justify-between">
      <CardHeader
        title="AI Insights & Highlights"
        subtitle="Key optimization signals and sprint observations"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
            <Sparkles size={16} strokeWidth={2.2} />
          </div>
        }
      />

      <div className="space-y-3 text-xs">
        {performanceInsights.map((insight) => (
          <div
            key={insight.id}
            className="flex items-start gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-background-soft)] p-3 transition-colors hover:border-[var(--color-primary)]"
          >
            <div className="mt-0.5 shrink-0">
              {insight.type === "positive" ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </div>
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <CheckCircle2 size={14} strokeWidth={2.2} />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-[var(--color-text-primary)]">
                  {insight.title}
                </h4>
                <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)] shadow-2xs">
                  {insight.metric}
                </span>
              </div>
              <p className="mt-1 text-[11.5px] text-[var(--color-text-muted)] leading-relaxed">
                {insight.description}
              </p>
              <span className="mt-1.5 block text-[10px] text-[var(--color-text-light)]">
                {insight.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
