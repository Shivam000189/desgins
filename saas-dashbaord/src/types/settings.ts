export type SettingsTab =
  | "profile"
  | "workspace"
  | "notifications"
  | "security"
  | "integrations";

export interface UserProfileSettings {
  name: string;
  username: string;
  email: string;
  role: string;
  bio: string;
  timezone: string;
  language: string;
  currency: string;
}

export interface WorkspaceSettings {
  workspaceName: string;
  slug: string;
  planName: string;
  billingAmount: string;
  renewalDate: string;
  seatsUsed: number;
  seatsTotal: number;
}

export interface NotificationPreferences {
  taskAssignedEmail: boolean;
  sprintDigestEmail: boolean;
  billAlertsEmail: boolean;
  securityAlertsEmail: boolean;
  mentionsPush: boolean;
  commentRepliesPush: boolean;
  weeklySummaryPush: boolean;
}

export interface ApiKeyItem {
  id: string;
  name: string;
  prefix: string;
  lastUsed: string;
  createdDate: string;
}

export interface ConnectedApp {
  id: string;
  name: string;
  category: string;
  iconName: string;
  connected: boolean;
  lastSync: string;
}
