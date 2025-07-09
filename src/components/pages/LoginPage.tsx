import { MambaLoginPage } from "./MambaLoginPage";
import { ViewType } from "@/types";

interface LoginPageProps {
  setCurrentView: (view: ViewType) => void;
  handleLogin: () => void;
}

export const LoginPage = ({ setCurrentView, handleLogin }: LoginPageProps) => {
  return (
    <MambaLoginPage setCurrentView={setCurrentView} handleLogin={handleLogin} />
  );
};
