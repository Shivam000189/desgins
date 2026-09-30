export type AnalyticsPeriod = "7D" | "30D" | "Quarter" | "YTD";

export interface AnalyticsKPI {
  id: string;
  title: string;
  value: string;
  numericValue: number;
  change: string;
  trend: "up" | "down";
  isGood: boolean;
  description: string;
  highlight?: boolean;
}

export interface MetricDataPoint {
  period: string;
  income: number;
  expenses: number;
  savings: number;
  isProjected?: boolean;
}

export interface CategoryAllocation {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
  change: string;
}

export interface DepartmentCapacity {
  department: string;
  utilizedHours: number;
  totalCapacity: number;
  utilizationRate: number;
  activeProjects: number;
}

export interface PerformanceInsight {
  id: string;
  type: "positive" | "warning" | "info";
  title: string;
  description: string;
  metric: string;
  timestamp: string;
}
