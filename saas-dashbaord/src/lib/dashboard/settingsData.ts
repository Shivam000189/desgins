import type {
  UserProfileSettings,
  WorkspaceSettings,
  NotificationPreferences,
  ApiKeyItem,
  ConnectedApp,
} from "@/types/settings";

export const initialProfileSettings: UserProfileSettings = {
  name: "Shivam Sharma",
  username: "shivam_lead",
  email: "shivam@donezo.io",
  role: "Lead Architect & Fullstack Engineer",
  bio: "Building high-performance SaaS applications, design systems, and financial analytics workflows.",
  timezone: "Pacific Time (US & Canada) - UTC-07:00",
  language: "English (US)",
  currency: "USD ($)",
};

export const initialWorkspaceSettings: WorkspaceSettings = {
  workspaceName: "Donezo Pro",
  slug: "donezo.io/workspace/donezo-pro",
  planName: "Pro Team Tier",
  billingAmount: "$49.00 / month",
  renewalDate: "Oct 24, 2026",
  seatsUsed: 8,
  seatsTotal: 15,
};

export const initialNotifications: NotificationPreferences = {
  taskAssignedEmail: true,
  sprintDigestEmail: true,
  billAlertsEmail: true,
  securityAlertsEmail: true,
  mentionsPush: true,
  commentRepliesPush: true,
  weeklySummaryPush: false,
};

export const initialApiKeys: ApiKeyItem[] = [
  {
    id: "key-1",
    name: "Production Client API",
    prefix: "dk_live_928f41••••••••",
    lastUsed: "2 minutes ago",
    createdDate: "Sep 12, 2026",
  },
  {
    id: "key-2",
    name: "Staging Test Token",
    prefix: "dk_test_104a88••••••••",
    lastUsed: "Yesterday",
    createdDate: "Aug 29, 2026",
  },
];

export const initialConnectedApps: ConnectedApp[] = [
  {
    id: "app-1",
    name: "GitHub Enterprise",
    category: "Source Control & CI",
    iconName: "Github",
    connected: true,
    lastSync: "Synced 5 mins ago",
  },
  {
    id: "app-2",
    name: "Slack Notifications",
    category: "Team Messaging",
    iconName: "MessageSquare",
    connected: true,
    lastSync: "Synced 10 mins ago",
  },
  {
    id: "app-3",
    name: "Google Calendar",
    category: "Meetings & Schedules",
    iconName: "Calendar",
    connected: true,
    lastSync: "Synced 1 hour ago",
  },
  {
    id: "app-4",
    name: "Stripe Billing Connect",
    category: "Payments & Invoicing",
    iconName: "CreditCard",
    connected: true,
    lastSync: "Synced 15 mins ago",
  },
];
