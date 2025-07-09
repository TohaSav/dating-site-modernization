import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export const ContentTab = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};
