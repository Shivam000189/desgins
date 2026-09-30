"use client";

import { PieChart } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { categoryAllocations } from "@/lib/dashboard/analyticsData";

export default function CategoryBreakdownCard() {
  return (
    <Card variant="default" className="p-4 sm:p-5 flex flex-col justify-between">
      <CardHeader
        title="Cost & Resource Analysis"
        subtitle="Department budget allocation"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
            <PieChart size={16} strokeWidth={2.2} />
          </div>
        }
      />

      {/* Segmented Horizontal Bar */}
      <div className="my-2">
        <div className="h-3 w-full overflow-hidden rounded-full flex gap-0.5 bg-[var(--color-border-light)] p-0.5">
          {categoryAllocations.map((cat) => (
            <div
              key={cat.id}
              className="h-full rounded-xs first:rounded-l-full last:rounded-r-full transition-all duration-300"
              style={{
                width: `${cat.percentage}%`,
                backgroundColor: cat.color,
              }}
              title={`${cat.name}: ${cat.percentage}% ($${cat.amount.toLocaleString()})`}
            />
          ))}
        </div>
      </div>

      {/* Breakdown List */}
      <div className="mt-4 divide-y divide-[var(--color-border-light)] text-xs">
        {categoryAllocations.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="font-semibold text-[var(--color-text-primary)]">
                {cat.name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold tabular-nums text-[var(--color-text-secondary)]">
                ${cat.amount.toLocaleString()}
              </span>
              <span className="w-8 text-right font-medium text-[var(--color-text-muted)] tabular-nums">
                {cat.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
