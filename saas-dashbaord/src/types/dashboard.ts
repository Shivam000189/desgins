
export type ProjectStatus = "Running" | "Completed" | "Pending";
export type TeamMemberStatus = "Online" | "Away" | "Offline";
export type TimeFilter = "This Year" | "This Month" | "Last Year";

export interface StatItem {
  id: string;
  title: string;
  value: number;
  formattedValue?: string;
  change: string;
  description: string;
  iconName: string;
  positive: boolean;
  highlight?: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  progress: number;
  members: string[];
  status: ProjectStatus;
  dueDate?: string;
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  status: TeamMemberStatus;
  email?: string;
}

export interface ReminderItem {
  id: string;
  title: string;
  time: string;
  relativeTime: string;
  date: string;
  platform: string;
  duration: string;
  participants: string[];
  additionalCount: number;
}

export interface MonthData {
  month: string;
  completed: number;
  inProgress: number;
  pending: number;
}
