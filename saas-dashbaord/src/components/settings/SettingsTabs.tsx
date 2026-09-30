"use client";

import { User, Building2, Bell, ShieldCheck, KeyRound } from "lucide-react";
import type { SettingsTab } from "@/types/settings";

interface SettingsTabsProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
}

const tabs: Array<{ id: SettingsTab; label: string; icon: React.ElementType }> = [
  { id: "profile", label: "My Profile", icon: User },
  { id: "workspace", label: "Workspace & Billing", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security & Auth", icon: ShieldCheck },
  { id: "integrations", label: "API & Integrations", icon: KeyRound },
];

export default function SettingsTabs({
  activeTab,
  onTabChange,
}: SettingsTabsProps) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-[var(--color-border-light)] bg-white p-1.5 shadow-xs no-scrollbar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`
              flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              px-3.5
              py-2
              text-xs
              font-semibold
              transition-all
              ${
                isActive
                  ? "bg-[var(--color-primary-dark)] text-white shadow-xs"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text-primary)]"
              }
            `}
          >
            <Icon size={15} strokeWidth={isActive ? 2.4 : 1.8} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
