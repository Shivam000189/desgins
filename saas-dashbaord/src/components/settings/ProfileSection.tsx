"use client";

import { useState } from "react";
import { Camera, Check, Save } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import type { UserProfileSettings } from "@/types/settings";

interface ProfileSectionProps {
  initialData: UserProfileSettings;
}

export default function ProfileSection({ initialData }: ProfileSectionProps) {
  const [profile, setProfile] = useState<UserProfileSettings>(initialData);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Personal Details"
          subtitle="Update your personal identification and public profile"
        />

        {/* Avatar Upload Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-[var(--color-border-light)] pb-5 mb-5">
          <div className="relative">
            <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[var(--color-primary-dark)] text-2xl font-bold text-white shadow-sm">
              SS
            </div>
            <button
              type="button"
              onClick={() => alert("Upload photo prompt...")}
              className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-xl bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] shadow-xs hover:text-[var(--color-primary-dark)]"
              title="Change photo"
            >
              <Camera size={13} />
            </button>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Profile Photo
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              JPG, GIF or PNG. Maximum size 4MB.
            </p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => alert("Upload photo...")}
                className="rounded-lg border border-[var(--color-border)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
              >
                Change Avatar
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Username
            </label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Job Title
            </label>
            <input
              type="text"
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Short Bio
            </label>
            <textarea
              rows={3}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
            />
          </div>
        </div>
      </Card>

      {/* Regional & System Preferences */}
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Regional Preferences"
          subtitle="Configure default localization and currency display"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Timezone
            </label>
            <select
              value={profile.timezone}
              onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
            >
              <option value="Pacific Time (US & Canada) - UTC-07:00">
                Pacific Time (UTC-07:00)
              </option>
              <option value="Eastern Time (US & Canada) - UTC-04:00">
                Eastern Time (UTC-04:00)
              </option>
              <option value="Greenwich Mean Time (UTC+00:00)">
                London / GMT (UTC+00:00)
              </option>
              <option value="Central European Time (UTC+01:00)">
                Berlin / CET (UTC+01:00)
              </option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Language
            </label>
            <select
              value={profile.language}
              onChange={(e) => setProfile({ ...profile, language: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
            >
              <option value="English (US)">English (US)</option>
              <option value="English (UK)">English (UK)</option>
              <option value="Spanish (ES)">Spanish</option>
              <option value="German (DE)">German</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
              Primary Currency
            </label>
            <select
              value={profile.currency}
              onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
              className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-white px-2.5 text-xs text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus-visible:outline-none"
            >
              <option value="USD ($)">USD ($)</option>
              <option value="EUR (€)">EUR (€)</option>
              <option value="GBP (£)">GBP (£)</option>
            </select>
          </div>
        </div>

        {/* Save Bar */}
        <div className="mt-6 flex items-center justify-end border-t border-[var(--color-border-light)] pt-4">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[var(--color-primary)]"
          >
            {isSaved ? (
              <>
                <Check size={14} strokeWidth={2.4} />
                <span>Changes Saved!</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>Save Profile Changes</span>
              </>
            )}
          </button>
        </div>
      </Card>
    </form>
  );
}
