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
import { Textarea } from "@/components/ui/textarea";
import { ViewType } from "@/types";

interface RegisterPageProps {
  setCurrentView: (view: ViewType) => void;
  handleRegister: () => void;
}

export const RegisterPage = ({
  setCurrentView,
  handleRegister,
}: RegisterPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Регистрация</CardTitle>
          <CardDescription className="text-center">
            Создайте аккаунт за минуту
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Имя</Label>
              <Input id="firstName" placeholder="Анна" />
            </div>
            <div>
              <Label htmlFor="age">Возраст</Label>
              <Input id="age" type="number" placeholder="25" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label htmlFor="bio">О себе</Label>
            <Textarea id="bio" placeholder="Расскажите о себе..." />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500"
            onClick={handleRegister}
          >
            Создать аккаунт
          </Button>
          <div className="text-center">
            <Button variant="link" onClick={() => setCurrentView("login")}>
              Уже есть аккаунт? Войти
            </Button>
          </div>
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
};
