import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { ViewType, Profile, AdminStats } from "@/types";

interface AdminPanelProps {
  setCurrentView: (view: ViewType) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const AdminPanel = ({
  setCurrentView,
  isAdmin,
  setIsAdmin,
}: AdminPanelProps) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 12547,
    todayLikes: 8934,
    messages: 45231,
    reports: 23,
  });

  const [users, setUsers] = useState<
    (Profile & { email: string; status: string; lastActive: string })[]
  >([
    {
      id: 1,
      name: "Анна Петрова",
      age: 28,
      location: "Москва",
      bio: "Люблю путешествовать и изучать новые языки",
      image: "/api/placeholder/400/400",
      interests: ["Путешествия", "Языки", "Фотография"],
      verified: true,
      premium: true,
      online: true,
      email: "anna.petrova@example.com",
      status: "active",
      lastActive: "2024-01-15 14:30",
    },
    {
      id: 2,
      name: "Михаил Иванов",
      age: 32,
      location: "СПб",
      bio: "Веб-разработчик, люблю кодить и играть в теннис",
      image: "/api/placeholder/400/400",
      interests: ["Программирование", "Теннис", "Кино"],
      verified: false,
      premium: false,
      online: false,
      email: "michael.ivanov@example.com",
      status: "banned",
      lastActive: "2024-01-14 20:15",
    },
  ]);

  const [reports, setReports] = useState([
    {
      id: 1,
      reportedUser: "Михаил Иванов",
      reportedBy: "Анна Петрова",
      reason: "Неуместные сообщения",
      status: "pending",
      date: "2024-01-15 10:30",
    },
    {
      id: 2,
      reportedUser: "Олег Смирнов",
      reportedBy: "Мария Козлова",
      reason: "Подозрительная активность",
      status: "resolved",
      date: "2024-01-14 16:45",
    },
  ]);

  const handleLogin = () => {
    if (
      loginForm.email === "toly.akuloff@yandex.ru" &&
      loginForm.password === "908908Tolya--Qwe"
    ) {
      setIsAdmin(true);
    } else {
      alert("Неверный логин или пароль");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentView("home");
  };

  const handleUserAction = (userId: number, action: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, status: action } : user,
      ),
    );
  };

  const handleReportAction = (reportId: number, action: string) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === reportId ? { ...report, status: action } : report,
      ),
    );
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Icon name="Shield" className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Панель администратора
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                type="email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <Label htmlFor="admin-password">Пароль</Label>
              <div className="relative">
                <Input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  placeholder="••••••••"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    name={showPassword ? "EyeOff" : "Eye"}
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={handleLogin}
            >
              Войти в панель
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setCurrentView("home")}
            >
              ← Назад на сайт
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Icon name="Shield" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Админка Mamba
              </h1>
              <p className="text-gray-600">
                Панель управления сайтом знакомств
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="CircleCheck" className="w-4 h-4 mr-1" />
              Онлайн
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <Icon name="LogOut" className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="reports">Жалобы</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="content">Контент</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Всего пользователей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold">
                      {stats.totalUsers.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    ↗ +12% за неделю
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Лайки сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Icon name="Heart" className="w-5 h-5 text-pink-600" />
                    <span className="text-2xl font-bold">
                      {stats.todayLikes.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">↗ +8% от вчера</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Сообщения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="MessageCircle"
                      className="w-5 h-5 text-purple-600"
                    />
                    <span className="text-2xl font-bold">
                      {stats.messages.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    ↗ +23% за неделю
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Жалобы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="AlertTriangle"
                      className="w-5 h-5 text-red-600"
                    />
                    <span className="text-2xl font-bold">{stats.reports}</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">↗ +3 за сегодня</p>
                </CardContent>
              </Card>
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
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Регистрации</span>
                      <span className="font-medium">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Матчи</span>
                      <span className="font-medium">5,678</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Сообщения</span>
                      <span className="font-medium">12,345</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Премиум подписки
                      </span>
                      <span className="font-medium">234</span>
                    </div>
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
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          Новый пользователь зарегистрирован
                        </p>
                        <p className="text-xs text-gray-500">2 минуты назад</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          Обновлена система рекомендаций
                        </p>
                        <p className="text-xs text-gray-500">15 минут назад</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">Поступила новая жалоба</p>
                        <p className="text-xs text-gray-500">1 час назад</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Управление пользователями</h2>
              <div className="flex items-center gap-4">
                <Input placeholder="Поиск пользователей..." className="w-64" />
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="active">Активные</SelectItem>
                    <SelectItem value="banned">Заблокированные</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{user.name}</h3>
                          {user.verified && (
                            <Badge className="bg-blue-100 text-blue-800">
                              Верифицирован
                            </Badge>
                          )}
                          {user.premium && (
                            <Badge className="bg-gold-100 text-gold-800">
                              Premium
                            </Badge>
                          )}
                          {user.online && (
                            <Badge className="bg-green-100 text-green-800">
                              Онлайн
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-500">
                          {user.age} лет, {user.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          Последняя активность: {user.lastActive}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant={
                            user.status === "active" ? "destructive" : "default"
                          }
                          onClick={() =>
                            handleUserAction(
                              user.id,
                              user.status === "active" ? "banned" : "active",
                            )
                          }
                        >
                          {user.status === "active"
                            ? "Заблокировать"
                            : "Разблокировать"}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Edit" className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="MessageSquare" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
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
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {reports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon
                            name="AlertTriangle"
                            className="w-5 h-5 text-red-600"
                          />
                          <span className="font-semibold">
                            Жалоба на {report.reportedUser}
                          </span>
                          <Badge
                            variant={
                              report.status === "pending"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {report.status === "pending" ? "Ожидает" : "Решена"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Подана пользователем: {report.reportedBy}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Причина:</span>{" "}
                          {report.reason}
                        </p>
                        <p className="text-xs text-gray-500">{report.date}</p>
                      </div>

                      {report.status === "pending" && (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              handleReportAction(report.id, "resolved")
                            }
                          >
                            Применить санкции
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleReportAction(report.id, "resolved")
                            }
                          >
                            Отклонить
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Аналитика и статистика</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Популярные интересы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Путешествия</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Спорт</span>
                      <span className="font-medium">38%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Музыка</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Кино</span>
                      <span className="font-medium">32%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>География пользователей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Москва</span>
                      <span className="font-medium">3,245</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Санкт-Петербург</span>
                      <span className="font-medium">1,876</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Екатеринбург</span>
                      <span className="font-medium">743</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Новосибирск</span>
                      <span className="font-medium">621</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <h2 className="text-2xl font-bold">Управление контентом</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Системные уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Создать уведомление</Label>
                    <Textarea placeholder="Текст уведомления..." />
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Label>Отправить всем пользователям</Label>
                  </div>
                  <Button>Отправить уведомление</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Настройки приложения</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Регистрация новых пользователей</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Система рекомендаций</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Отправка push-уведомлений</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Режим обслуживания</Label>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Настройки системы</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Изменить пароль администратора</Label>
                    <Input type="password" placeholder="Новый пароль" />
                  </div>
                  <div>
                    <Label>Подтвердить пароль</Label>
                    <Input type="password" placeholder="Подтвердите пароль" />
                  </div>
                  <Button>Обновить пароль</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Резервное копирование</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Автоматическое резервное копирование</Label>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>Последнее резервное копирование</Label>
                    <p className="text-sm text-gray-600">15.01.2024 в 03:00</p>
                  </div>
                  <Button>Создать резервную копию</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
