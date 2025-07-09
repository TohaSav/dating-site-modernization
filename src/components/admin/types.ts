import { Profile, AdminStats } from "@/types";

export interface AdminUser extends Profile {
  email: string;
  status: "active" | "banned" | "suspended";
  lastActive: string;
}

export interface AdminReport {
  id: number;
  reportedUser: string;
  reportedBy: string;
  reason: string;
  status: "pending" | "resolved" | "dismissed";
  date: string;
}

export interface AdminLoginForm {
  email: string;
  password: string;
}

export interface AdminPanelProps {
  setCurrentView: (view: any) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}
