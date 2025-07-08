import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { ViewType } from "@/types";
import { INTERESTS } from "@/data/constants";

interface ProfilePageProps {
  selectedInterests: string[];
  toggleInterest: (interest: string) => void;
  setCurrentView: (view: ViewType) => void;
}

export const ProfilePage = ({
  selectedInterests,
  toggleInterest,
  setCurrentView,
}: ProfilePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="User" className="mr-2" />
              Мой профиль
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg" />
                <AvatarFallback>Я</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">Ваше Имя, 25</h2>
              <p className="text-gray-500">Москва</p>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <Badge className="bg-blue-500">
                  <Icon name="CheckCircle" size={16} className="mr-1" />
                  Верифицирован
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500 to-blue-500">
                  <Icon name="Crown" size={16} className="mr-1" />
                  Premium
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="info">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Информация</TabsTrigger>
                <TabsTrigger value="photos">Фото</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-4">
                <div>
                  <Label>О себе</Label>
                  <Textarea
                    placeholder="Расскажите о себе..."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Интересы</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {INTERESTS.map((interest) => (
                      <Badge
                        key={interest}
                        variant={
                          selectedInterests.includes(interest)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full">Сохранить изменения</Button>
              </TabsContent>

              <TabsContent value="photos" className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Icon name="Plus" className="text-gray-400" size={32} />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Icon name="Plus" className="text-gray-400" size={32} />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Icon name="Plus" className="text-gray-400" size={32} />
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Upload" className="mr-2" size={16} />
                  Загрузить фото
                </Button>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Показывать в поиске</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Уведомления о сообщениях</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Уведомления о лайках</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
                <Button variant="destructive" className="w-full">
                  Удалить аккаунт
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => setCurrentView("home")}>
            ← Назад на главную
          </Button>
        </div>
      </div>
    </div>
  );
};
