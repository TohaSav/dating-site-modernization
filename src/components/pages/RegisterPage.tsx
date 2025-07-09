import { MambaRegisterPage } from "./MambaRegisterPage";
import { ViewType, RegistrationData } from "@/types";

interface RegisterPageProps {
  setCurrentView: (view: ViewType) => void;
  handleRegister: (data: RegistrationData) => void;
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
