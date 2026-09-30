"use client";

import { UsersRound } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { departmentCapacities } from "@/lib/dashboard/analyticsData";

export default function TeamWorkloadCard() {
  return (
    <Card variant="default" className="p-4 sm:p-5 flex flex-col justify-between">
      <CardHeader
        title="Workload & Capacity"
        subtitle="Sprint hours utilized vs available"
        icon={
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
            <UsersRound size={16} strokeWidth={2.2} />
          </div>
        }
      />

      <div className="space-y-3.5 text-xs">
        {departmentCapacities.map((dept) => (
          <div key={dept.department} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {dept.department}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[var(--color-text-muted)]">
                  {dept.utilizedHours}h / {dept.totalCapacity}h
                </span>
                <span className="font-bold tabular-nums text-[var(--color-primary-dark)]">
                  {dept.utilizationRate}%
                </span>
              </div>
            </div>

            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border-light)]">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  dept.utilizationRate >= 90
                    ? "bg-orange-500"
                    : "bg-[var(--color-primary)]"
                }`}
                style={{ width: `${dept.utilizationRate}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
