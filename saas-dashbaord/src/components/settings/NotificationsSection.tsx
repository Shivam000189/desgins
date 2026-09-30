"use client";

import { useState } from "react";
import { Mail, Smartphone, Check, Save } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import type { NotificationPreferences } from "@/types/settings";

interface NotificationsSectionProps {
  initialData: NotificationPreferences;
}

export default function NotificationsSection({
  initialData,
}: NotificationsSectionProps) {
  const [prefs, setPrefs] = useState<NotificationPreferences>(initialData);
  const [isSaved, setIsSaved] = useState(false);

  const toggle = (key: keyof NotificationPreferences) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-5">
      {/* Email Notifications */}
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Email Notifications"
          subtitle="Select which sprint updates and financial alerts arrive in your inbox"
          icon={
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
              <Mail size={16} strokeWidth={2.2} />
            </div>
          }
        />

        <div className="divide-y divide-[var(--color-border-light)] text-xs">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Task Assignments
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Notify when a teammate assigns you a sprint task or marks you as reviewer.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("taskAssignedEmail")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.taskAssignedEmail ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.taskAssignedEmail ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Weekly Sprint & Velocity Digest
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Summary of story points completed, velocity trends, and upcoming milestones.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("sprintDigestEmail")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.sprintDigestEmail ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.sprintDigestEmail ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Upcoming Bill & Cash Flow Alerts
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Get notified 3 days before recurring bills and invoices are due.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("billAlertsEmail")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.billAlertsEmail ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.billAlertsEmail ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Security & Audit Alerts
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Critical notifications regarding new session logins and API key generation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("securityAlertsEmail")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.securityAlertsEmail ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.securityAlertsEmail ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Push & In-App Notifications */}
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Push & In-App Notifications"
          subtitle="Real-time alerts displayed while you work in Shivam"
          icon={
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
              <Smartphone size={16} strokeWidth={2.2} />
            </div>
          }
        />

        <div className="divide-y divide-[var(--color-border-light)] text-xs">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Direct Mentions & Comments
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Instant banner notification whenever someone mentions you in a task.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("mentionsPush")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.mentionsPush ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.mentionsPush ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Comment Replies
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                Notify when team members reply to threads you participate in.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle("commentRepliesPush")}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                prefs.commentRepliesPush ? "bg-[var(--color-primary)]" : "bg-neutral-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  prefs.commentRepliesPush ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save */}
        <div className="mt-5 flex items-center justify-end border-t border-[var(--color-border-light)] pt-4">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-primary)] transition-all"
          >
            {isSaved ? (
              <>
                <Check size={14} strokeWidth={2.4} />
                <span>Preferences Saved!</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>Save Notification Settings</span>
              </>
            )}
          </button>
        </div>
      </Card>
    </form>
  );
}
