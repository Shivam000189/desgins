"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import SettingsHeader from "@/components/settings/SettingsHeader";
import SettingsTabs from "@/components/settings/SettingsTabs";
import ProfileSection from "@/components/settings/ProfileSection";
import WorkspaceSection from "@/components/settings/WorkspaceSection";
import NotificationsSection from "@/components/settings/NotificationsSection";
import SecuritySection from "@/components/settings/SecuritySection";
import IntegrationsSection from "@/components/settings/IntegrationsSection";

import {
  initialProfileSettings,
  initialWorkspaceSettings,
  initialNotifications,
} from "@/lib/dashboard/settingsData";
import type { SettingsTab } from "@/types/settings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

  return (
    <DashboardLayout sidebar={<Sidebar />} header={<DashboardHeader />}>
      <div className="space-y-5">
        {/* Header */}
        <SettingsHeader />

        {/* Tab Pills Navigation */}
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Section by Tab */}
        <div>
          {activeTab === "profile" && (
            <ProfileSection initialData={initialProfileSettings} />
          )}

          {activeTab === "workspace" && (
            <WorkspaceSection initialData={initialWorkspaceSettings} />
          )}

          {activeTab === "notifications" && (
            <NotificationsSection initialData={initialNotifications} />
          )}

          {activeTab === "security" && <SecuritySection />}

          {activeTab === "integrations" && <IntegrationsSection />}
        </div>
      </div>
    </DashboardLayout>
  );
}
