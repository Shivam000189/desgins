export type TaskPriority = "Urgent" | "High" | "Medium" | "Low";
export type TaskStatus = "Backlog" | "In Progress" | "In Review" | "Completed";
export type TaskCategory =
  | "Product Design"
  | "Frontend"
  | "Backend API"
  | "Mobile App"
  | "Security"
  | "Analytics";

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskAssignee {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
}

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  dueDate: string;
  dueInDays: number;
  progress: number;
  assignees: TaskAssignee[];
  subtasks: Subtask[];
  attachmentsCount: number;
  commentsCount: number;
  tags: string[];
  createdAt: string;
}

export interface TaskStatsSummary {
  total: number;
  inProgress: number;
  inReview: number;
  completed: number;
  completionRate: number;
}
