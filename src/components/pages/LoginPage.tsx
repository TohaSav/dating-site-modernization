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
import { ViewType } from "@/types";

interface LoginPageProps {
  setCurrentView: (view: ViewType) => void;
  handleLogin: () => void;
}

export const LoginPage = ({ setCurrentView, handleLogin }: LoginPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Вход в аккаунт</CardTitle>
          <CardDescription className="text-center">
            Добро пожаловать обратно!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500"
            onClick={handleLogin}
          >
            Войти
          </Button>
          <div className="text-center">
            <Button variant="link" onClick={() => setCurrentView("register")}>
              Нет аккаунта? Регистрация
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
