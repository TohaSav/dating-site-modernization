import { useState } from "react";
import { ADMIN_CREDENTIALS } from "../constants";
import { AdminLoginForm } from "../types";

export const useAdminAuth = (setIsAdmin: (isAdmin: boolean) => void) => {
  const [loginForm, setLoginForm] = useState<AdminLoginForm>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (
      loginForm.email === ADMIN_CREDENTIALS.email &&
      loginForm.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAdmin(true);
    } else {
      alert("Неверный логин или пароль");
    }
  };

  const handleLogout = (setCurrentView: (view: any) => void) => {
    setIsAdmin(false);
    setCurrentView("home");
  };

  return {
    loginForm,
    setLoginForm,
    showPassword,
    setShowPassword,
    handleLogin,
    handleLogout,
  };
};
