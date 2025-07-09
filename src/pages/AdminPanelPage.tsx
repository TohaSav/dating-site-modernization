import { useState } from "react";
import { AdminPanel } from "@/components/pages/AdminPanel";
import { ViewType } from "@/types";

const AdminPanelPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const setCurrentView = (view: ViewType) => {
    if (view === "home") {
      window.location.href = "/";
    }
  };

  return (
    <AdminPanel
      setCurrentView={setCurrentView}
      isAdmin={isAdmin}
      setIsAdmin={setIsAdmin}
    />
  );
};

export default AdminPanelPage;
