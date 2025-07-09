export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  image: string;
  interests: string[];
  verified: boolean;
  premium: boolean;
  online: boolean;
}

export interface UserProfile extends Profile {
  email: string;
  gender: "male" | "female";
  firstName: string;
}

export interface RegistrationData {
  firstName: string;
  age: number;
  city: string;
  email: string;
  password: string;
  gender: "male" | "female";
  agreeToTerms: boolean;
  agreeToNewsletter: boolean;
}

export interface Message {
  id: number;
  chatId: number;
  text: string;
  sender: "me" | "other";
  timestamp: Date;
}

export type ViewType =
  | "home"
  | "login"
  | "register"
  | "search"
  | "matches"
  | "chat"
  | "profile"
  | "admin"
  | "adminka";

export interface AppState {
  currentView: ViewType;
  isLoggedIn: boolean;
  likes: number[];
  matches: number[];
  messages: Message[];
  currentChat: number | null;
  messageText: string;
  ageRange: [number, number];
  selectedInterests: string[];
  adminLogin: string;
  adminPassword: string;
  isAdmin: boolean;
  userProfile: UserProfile | null;
}

export interface AdminStats {
  totalUsers: number;
  todayLikes: number;
  messages: number;
  reports: number;
}
