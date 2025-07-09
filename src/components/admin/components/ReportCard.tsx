import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { AdminReport } from "../types";

interface ReportCardProps {
  report: AdminReport;
  onReportAction: (reportId: number, action: string) => void;
}

export const ReportCard = ({ report, onReportAction }: ReportCardProps) => {
  const getStatusBadge = (status: AdminReport["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="destructive">Ожидает</Badge>;
      case "resolved":
        return <Badge variant="secondary">Решена</Badge>;
      case "dismissed":
        return <Badge variant="outline">Отклонена</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Icon name="AlertTriangle" className="w-5 h-5 text-red-600" />
              <span className="font-semibold">
                Жалоба на {report.reportedUser}
              </span>
              {getStatusBadge(report.status)}
            </div>
            <p className="text-sm text-gray-600">
              Подана пользователем: {report.reportedBy}
            </p>
            <p className="text-sm">
              <span className="font-medium">Причина:</span> {report.reason}
            </p>
            <p className="text-xs text-gray-500">{report.date}</p>
          </div>

          {report.status === "pending" && (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onReportAction(report.id, "resolved")}
              >
                Применить санкции
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onReportAction(report.id, "dismissed")}
              >
                Отклонить
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
