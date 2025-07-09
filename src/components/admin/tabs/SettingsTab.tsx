import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SettingsTab = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};
