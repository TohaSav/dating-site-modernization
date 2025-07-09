import { MambaHomePage } from "./MambaHomePage";
import { ViewType, Profile } from "@/types";

interface HomePageProps {
  isLoggedIn: boolean;
  matches: number[];
  likes: number[];
  profiles: Profile[];
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  handleLike: (profileId: number) => void;
}

export const HomePage = ({ setCurrentView }: HomePageProps) => {
  return <MambaHomePage setCurrentView={setCurrentView} />;
};
