"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/Header/DashboardHeader";

import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import AnalyticsKPIs from "@/components/analytics/AnalyticsKPIs";
import CashFlowPerformanceChart from "@/components/analytics/CashFlowPerformanceChart";
import HealthGaugeCard from "@/components/analytics/HealthGaugeCard";
import CategoryBreakdownCard from "@/components/analytics/CategoryBreakdownCard";
import TeamWorkloadCard from "@/components/analytics/TeamWorkloadCard";
import AnalyticsInsights from "@/components/analytics/AnalyticsInsights";

import {
  analyticsKPIsByPeriod,
  chartDataByPeriod,
} from "@/lib/dashboard/analyticsData";
import type { AnalyticsPeriod } from "@/types/analytics";

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<AnalyticsPeriod>("30D");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const kpis = analyticsKPIsByPeriod[period] || analyticsKPIsByPeriod["30D"];
  const chartData = chartDataByPeriod[period] || chartDataByPeriod["30D"];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <DashboardLayout sidebar={<Sidebar />} header={<DashboardHeader />}>
      <div className="space-y-5">
        {/* Header with Period Selector */}
        <AnalyticsHeader
          period={period}
          onPeriodChange={setPeriod}
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
        />

        {/* 4 KPI Summary Cards */}
        <AnalyticsKPIs kpis={kpis} />

        {/* Hero Cash Flow & Velocity Chart */}
        <CashFlowPerformanceChart data={chartData} />

        {/* Second Row: Cost Analysis + Health Semicircle Gauge */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <CategoryBreakdownCard />
          <HealthGaugeCard />
        </div>

        {/* Third Row: Workload Capacity + AI Insights */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <TeamWorkloadCard />
          <AnalyticsInsights />
        </div>
      </div>
    </DashboardLayout>
  );
}
