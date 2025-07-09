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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { ViewType } from "@/types";

interface MambaLoginPageProps {
  setCurrentView: (view: ViewType) => void;
  handleLogin: () => void;
}

export const MambaLoginPage = ({
  setCurrentView,
  handleLogin,
}: MambaLoginPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-mamba-primary to-mamba-secondary rounded-full flex items-center justify-center">
              <Icon name="Heart" className="text-white" size={24} />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-mamba-primary to-mamba-secondary bg-clip-text text-transparent">
              Мамба
            </span>
          </div>
          <p className="text-gray-600">Добро пожаловать обратно!</p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Вход
            </CardTitle>
            <CardDescription className="text-gray-600">
              Войдите в свой аккаунт, чтобы продолжить общение
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email или номер телефона
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="mt-2 border-gray-300 focus:border-mamba-primary focus:ring-mamba-primary"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 border-gray-300 focus:border-mamba-primary focus:ring-mamba-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Запомнить меня
                  </Label>
                </div>
                <Button
                  variant="link"
                  className="text-mamba-primary hover:text-mamba-secondary p-0 h-auto"
                >
                  Забыли пароль?
                </Button>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-mamba-primary to-mamba-secondary hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold"
              onClick={handleLogin}
            >
              Войти
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">или</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Войти через SMS
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Войти через Google
              </Button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Нет аккаунта?{" "}
                <Button
                  variant="link"
                  className="text-mamba-primary hover:text-mamba-secondary p-0 h-auto font-semibold"
                  onClick={() => setCurrentView("register")}
                >
                  Зарегистрироваться
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setCurrentView("home")}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад на главную
          </Button>
        </div>
      </div>
    </div>
  );
};
