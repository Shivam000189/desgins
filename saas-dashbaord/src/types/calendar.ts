export type EventType =
  | "Sprint Milestone"
  | "Team Meeting"
  | "Project Deadline"
  | "Billing Reminder";

export type CalendarViewMode = "month" | "week" | "agenda";

export interface EventAttendee {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
}

export interface CalendarEventItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date format "YYYY-MM-DD"
  startTime: string;
  endTime: string;
  type: EventType;
  platform: string;
  attendees: EventAttendee[];
  color: string;
}
