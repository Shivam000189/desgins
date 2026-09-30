"use client";

import { useState } from "react";
import { Building2, Sparkles, Check } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import type { WorkspaceSettings } from "@/types/settings";

interface WorkspaceSectionProps {
  initialData: WorkspaceSettings;
}

export default function WorkspaceSection({ initialData }: WorkspaceSectionProps) {
  const [workspace, setWorkspace] = useState<WorkspaceSettings>(initialData);
  const [isSaved, setIsSaved] = useState(false);

  const seatPercent = Math.round((workspace.seatsUsed / workspace.seatsTotal) * 100);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="space-y-5">
      {/* Plan & Subscription Card */}
      <Card variant="highlight" className="relative overflow-hidden p-5 sm:p-6">
        <div className="pattern-hatch-light absolute -right-8 -bottom-8 h-36 w-36 rounded-full pointer-events-none opacity-40" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold text-white mb-2">
              <Sparkles size={12} />
              <span>Active Subscription</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {workspace.planName}
            </h3>
            <p className="text-xs text-emerald-100/90 mt-1">
              {workspace.billingAmount} · Renews on {workspace.renewalDate}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => alert("Redirecting to Stripe Customer Portal...")}
              className="rounded-xl border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Billing Invoices
            </button>
            <button
              type="button"
              onClick={() => alert("Upgrade tier flow...")}
              className="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-[var(--color-primary-dark)] hover:bg-emerald-50 transition-colors"
            >
              Upgrade Seats & Tier
            </button>
          </div>
        </div>

        {/* Seat Usage Bar */}
        <div className="mt-5 border-t border-white/20 pt-4">
          <div className="flex items-center justify-between text-xs text-white mb-1.5">
            <span className="font-medium">Team Seat Allocation</span>
            <span className="font-bold tabular-nums">
              {workspace.seatsUsed} / {workspace.seatsTotal} seats ({seatPercent}%)
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-black/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-300"
              style={{ width: `${seatPercent}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Workspace General Details */}
      <form onSubmit={handleSave}>
        <Card variant="default" className="p-5 sm:p-6">
          <CardHeader
            title="Workspace Details"
            subtitle="Configure workspace name, public domain slug, and branding"
            icon={
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                <Building2 size={16} strokeWidth={2.2} />
              </div>
            }
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Workspace Name *
              </label>
              <input
                type="text"
                required
                value={workspace.workspaceName}
                onChange={(e) =>
                  setWorkspace({ ...workspace, workspaceName: e.target.value })
                }
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Workspace URL Slug
              </label>
              <input
                type="text"
                value={workspace.slug}
                onChange={(e) => setWorkspace({ ...workspace, slug: e.target.value })}
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end border-t border-[var(--color-border-light)] pt-4">
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-primary)] transition-all"
            >
              {isSaved ? (
                <>
                  <Check size={14} strokeWidth={2.4} />
                  <span>Workspace Saved!</span>
                </>
              ) : (
                <span>Save Workspace</span>
              )}
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
}
