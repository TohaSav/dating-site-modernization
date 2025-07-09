import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconColor: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatsCard = ({
  title,
  value,
  icon,
  iconColor,
  trend,
}: StatsCardProps) => {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Icon name={icon} className={`w-5 h-5 ${iconColor}`} />
          <span className="text-2xl font-bold">{formatValue(value)}</span>
        </div>
        {trend && (
          <p
            className={`text-xs mt-1 ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
          >
            {trend.isPositive ? "↗" : "↘"} {trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
