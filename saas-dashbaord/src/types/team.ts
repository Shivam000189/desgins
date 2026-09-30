export type Department =
  | "Product & Design"
  | "Frontend Engineering"
  | "Backend & Infra"
  | "Mobile Engineering"
  | "QA & Security";

export type AccessLevel = "Admin" | "Member" | "Viewer";
export type MemberStatus = "Online" | "Away" | "Offline";

export interface TeamMemberItem {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  role: string;
  department: Department;
  accessLevel: AccessLevel;
  status: MemberStatus;
  email: string;
  location: string;
  timezone: string;
  activeTasksCount: number;
  completedTasksCount: number;
  skills: string[];
  joinedDate: string;
}

export interface TeamStatsSummary {
  total: number;
  online: number;
  departmentsCount: number;
  capacityUtilization: number;
}
