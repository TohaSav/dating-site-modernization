import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminPanelProps } from "./types";
import { useAdminAuth } from "./hooks/useAdminAuth";
import { useAdminData } from "./hooks/useAdminData";
import { AdminLoginForm } from "./components/AdminLoginForm";
import { AdminHeader } from "./components/AdminHeader";
import { DashboardTab } from "./tabs/DashboardTab";
import { UsersTab } from "./tabs/UsersTab";
import { ReportsTab } from "./tabs/ReportsTab";
import { AnalyticsTab } from "./tabs/AnalyticsTab";
import { ContentTab } from "./tabs/ContentTab";
import { SettingsTab } from "./tabs/SettingsTab";

export const AdminPanel = ({
  setCurrentView,
  isAdmin,
  setIsAdmin,
}: AdminPanelProps) => {
  const {
    loginForm,
    setLoginForm,
    showPassword,
    setShowPassword,
    handleLogin,
    handleLogout,
  } = useAdminAuth(setIsAdmin);

  const { stats, users, reports, handleUserAction, handleReportAction } =
    useAdminData();

  if (!isAdmin) {
    return (
      <AdminLoginForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
        onBack={() => setCurrentView("home")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto">
        <AdminHeader onLogout={() => handleLogout(setCurrentView)} />

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="reports">Жалобы</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="content">Контент</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab stats={stats} />
          </TabsContent>

          <TabsContent value="users">
            <UsersTab users={users} onUserAction={handleUserAction} />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsTab reports={reports} onReportAction={handleReportAction} />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsTab />
          </TabsContent>

          <TabsContent value="content">
            <ContentTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
