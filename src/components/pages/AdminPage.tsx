import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { ViewType, Profile } from "@/types";
import { ADMIN_STATS } from "@/data/constants";

interface AdminPageProps {
  isAdmin: boolean;
  adminLogin: string;
  adminPassword: string;
  profiles: Profile[];
  setCurrentView: (view: ViewType) => void;
  setAdminLogin: (login: string) => void;
  setAdminPassword: (password: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  handleAdminLogin: () => void;
}

export const AdminPage = ({
  isAdmin,
  adminLogin,
  adminPassword,
  profiles,
  setCurrentView,
  setAdminLogin,
  setAdminPassword,
  setIsAdmin,
  handleAdminLogin,
}: AdminPageProps) => {
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center">
              <Icon name="Shield" className="mr-2" />
              Админ-панель
            </CardTitle>
            <CardDescription className="text-center">
              Доступ только для администраторов
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="adminLogin">Логин</Label>
              <Input
                id="adminLogin"
                type="email"
                placeholder="admin@example.com"
                value={adminLogin}
                onChange={(e) => setAdminLogin(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="adminPassword">Пароль</Label>
              <Input
                id="adminPassword"
                type="password"
                placeholder="••••••••"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-red-500 to-orange-500"
              onClick={handleAdminLogin}
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти в админ-панель
            </Button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setCurrentView("home")}
            >
              ← Назад
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Icon name="Shield" className="mr-3 text-red-500" />
            Админ-панель LoveSpace
          </h1>
          <p className="text-gray-600">Управление платформой знакомств</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Icon
                name="Users"
                size={48}
                className="mx-auto text-blue-500 mb-2"
              />
              <h3 className="text-2xl font-bold">
                {ADMIN_STATS.totalUsers.toLocaleString()}
              </h3>
              <p className="text-gray-600">Всего пользователей</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Icon
                name="Heart"
                size={48}
                className="mx-auto text-pink-500 mb-2"
              />
              <h3 className="text-2xl font-bold">
                {ADMIN_STATS.todayLikes.toLocaleString()}
              </h3>
              <p className="text-gray-600">Лайков сегодня</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Icon
                name="MessageCircle"
                size={48}
                className="mx-auto text-green-500 mb-2"
              />
              <h3 className="text-2xl font-bold">
                {ADMIN_STATS.messages.toLocaleString()}
              </h3>
              <p className="text-gray-600">Сообщений</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Icon
                name="AlertTriangle"
                size={48}
                className="mx-auto text-orange-500 mb-2"
              />
              <h3 className="text-2xl font-bold">{ADMIN_STATS.reports}</h3>
              <p className="text-gray-600">Жалоб</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="reports">Жалобы</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Управление пользователями</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={profile.image} />
                          <AvatarFallback>{profile.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">
                            {profile.name}, {profile.age}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {profile.location}
                          </p>
                        </div>
                        {profile.verified && (
                          <Badge className="bg-blue-500">Верифицирован</Badge>
                        )}
                        {profile.premium && (
                          <Badge className="bg-gradient-to-r from-pink-500 to-blue-500">
                            Premium
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Ban" size={16} />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Жалобы пользователей</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">
                        Жалоба на неподобающее поведение
                      </h4>
                      <Badge variant="destructive">Высокий приоритет</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Пользователь отправлял неподобающие сообщения
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm">Рассмотреть</Button>
                      <Button size="sm" variant="outline">
                        Отклонить
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Аналитика платформы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-4">Активность по дням</h4>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">График активности</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Популярные города</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Москва</span>
                        <span className="font-bold">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Санкт-Петербург</span>
                        <span className="font-bold">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Екатеринбург</span>
                        <span className="font-bold">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки платформы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Регистрация новых пользователей</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Автоматическая модерация</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Push-уведомления</Label>
                  <Switch defaultChecked />
                </div>
                <Button className="w-full mt-6">Сохранить настройки</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => {
              setIsAdmin(false);
              setCurrentView("home");
            }}
          >
            ← Выйти из админ-панели
          </Button>
        </div>
      </div>
    </div>
  );
};
