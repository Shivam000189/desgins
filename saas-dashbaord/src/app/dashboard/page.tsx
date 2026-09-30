"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import DashboardOverview from "@/components/dashboard/Overview/DashboardOverview";
import ProjectStats from "@/components/dashboard/Overview/ProjectStats";

import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function DashboardPage() {
  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      header={<DashboardHeader />}
    >
      <div className="space-y-5">
        {/* =========================================
            PAGE INTRO
        ========================================= */}

        <DashboardOverview />

        {/* =========================================
            STATISTICS
        ========================================= */}

        <ProjectStats />

        {/* =========================================
            DASHBOARD GRID
        ========================================= */}

        <DashboardGrid />
      </div>
    </DashboardLayout>
  );
}
