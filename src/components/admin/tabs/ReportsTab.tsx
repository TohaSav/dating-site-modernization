import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdminReport } from "../types";
import { ReportCard } from "../components/ReportCard";

interface ReportsTabProps {
  reports: AdminReport[];
  onReportAction: (reportId: number, action: string) => void;
}

export const ReportsTab = ({ reports, onReportAction }: ReportsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Жалобы и модерация</h2>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все</SelectItem>
            <SelectItem value="pending">Ожидают</SelectItem>
            <SelectItem value="resolved">Решены</SelectItem>
            <SelectItem value="dismissed">Отклонены</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            report={report}
            onReportAction={onReportAction}
          />
        ))}
      </div>
    </div>
  );
};
