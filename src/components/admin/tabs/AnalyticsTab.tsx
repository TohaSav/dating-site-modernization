import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AnalyticsTab = () => {
  const popularInterests = [
    { name: "Путешествия", percentage: 42 },
    { name: "Спорт", percentage: 38 },
    { name: "Музыка", percentage: 35 },
    { name: "Кино", percentage: 32 },
  ];

  const userGeography = [
    { city: "Москва", count: 3245 },
    { city: "Санкт-Петербург", count: 1876 },
    { city: "Екатеринбург", count: 743 },
    { city: "Новосибирск", count: 621 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Аналитика и статистика</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Популярные интересы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {popularInterests.map((interest, index) => (
                <div key={index} className="flex justify-between">
                  <span>{interest.name}</span>
                  <span className="font-medium">{interest.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>География пользователей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userGeography.map((location, index) => (
                <div key={index} className="flex justify-between">
                  <span>{location.city}</span>
                  <span className="font-medium">
                    {location.count.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
