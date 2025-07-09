import { MambaRegisterPage } from "./MambaRegisterPage";
import { ViewType } from "@/types";

interface RegisterPageProps {
  setCurrentView: (view: ViewType) => void;
  handleRegister: () => void;
}

export const RegisterPage = ({
  setCurrentView,
  handleRegister,
}: RegisterPageProps) => {
  return (
    <MambaRegisterPage
      setCurrentView={setCurrentView}
      handleRegister={handleRegister}
    />
  );
};
