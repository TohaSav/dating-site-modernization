import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { AdminStats } from "@/types";
import { StatsCard } from "../components/StatsCard";

interface DashboardTabProps {
  stats: AdminStats;
}

export const DashboardTab = ({ stats }: DashboardTabProps) => {
  const statsCards = [
    {
      title: "Всего пользователей",
      value: stats.totalUsers,
      icon: "Users",
      iconColor: "text-blue-600",
      trend: { value: "+12% за неделю", isPositive: true },
    },
    {
      title: "Лайки сегодня",
      value: stats.todayLikes,
      icon: "Heart",
      iconColor: "text-pink-600",
      trend: { value: "+8% от вчера", isPositive: true },
    },
    {
      title: "Сообщения",
      value: stats.messages,
      icon: "MessageCircle",
      iconColor: "text-purple-600",
      trend: { value: "+23% за неделю", isPositive: true },
    },
    {
      title: "Жалобы",
      value: stats.reports,
      icon: "AlertTriangle",
      iconColor: "text-red-600",
      trend: { value: "+3 за сегодня", isPositive: false },
    },
  ];

  const weeklyActivity = [
    { label: "Регистрации", value: "1,234" },
    { label: "Матчи", value: "5,678" },
    { label: "Сообщения", value: "12,345" },
    { label: "Премиум подписки", value: "234" },
  ];

  const recentActions = [
    {
      text: "Новый пользователь зарегистрирован",
      time: "2 минуты назад",
      color: "bg-green-500",
    },
    {
      text: "Обновлена система рекомендаций",
      time: "15 минут назад",
      color: "bg-blue-500",
    },
    {
      text: "Поступила новая жалоба",
      time: "1 час назад",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <StatsCard key={index} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" className="w-5 h-5" />
              Активность за неделю
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyActivity.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Clock" className="w-5 h-5" />
              Последние действия
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActions.map((action, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${action.color} rounded-full`}></div>
                  <div className="flex-1">
                    <p className="text-sm">{action.text}</p>
                    <p className="text-xs text-gray-500">{action.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
