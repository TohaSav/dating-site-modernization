import { useState } from "react";
import { AdminStats } from "@/types";
import { AdminUser, AdminReport } from "../types";
import { MOCK_STATS, MOCK_USERS, MOCK_REPORTS } from "../constants";

export const useAdminData = () => {
  const [stats, setStats] = useState<AdminStats>(MOCK_STATS);
  const [users, setUsers] = useState<AdminUser[]>(MOCK_USERS);
  const [reports, setReports] = useState<AdminReport[]>(MOCK_REPORTS);

  const handleUserAction = (userId: number, action: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, status: action as AdminUser["status"] }
          : user,
      ),
    );
  };

  const handleReportAction = (reportId: number, action: string) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === reportId
          ? { ...report, status: action as AdminReport["status"] }
          : report,
      ),
    );
  };

  return {
    stats,
    users,
    reports,
    handleUserAction,
    handleReportAction,
  };
};
