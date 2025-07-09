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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { ViewType } from "@/types";

interface MambaRegisterPageProps {
  setCurrentView: (view: ViewType) => void;
  handleRegister: () => void;
}

export const MambaRegisterPage = ({
  setCurrentView,
  handleRegister,
}: MambaRegisterPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
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
          <p className="text-gray-600">
            Присоединяйтесь к миллионам пользователей
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Регистрация
            </CardTitle>
            <CardDescription className="text-gray-600">
              Создайте аккаунт и начните знакомиться уже сегодня
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-gray-700 font-medium">Пол</Label>
                <RadioGroup className="flex space-x-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="text-gray-700">
                      Мужской
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="text-gray-700">
                      Женский
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium"
                  >
                    Имя
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Анна"
                    className="mt-2 border-gray-300 focus:border-mamba-primary focus:ring-mamba-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-gray-700 font-medium">
                    Возраст
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-mamba-primary focus:ring-mamba-primary">
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 63 }, (_, i) => i + 18).map(
                        (age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="city" className="text-gray-700 font-medium">
                  Город
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 border-gray-300 focus:border-mamba-primary focus:ring-mamba-primary">
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="ekaterinburg">Екатеринбург</SelectItem>
                    <SelectItem value="novosibirsk">Новосибирск</SelectItem>
                    <SelectItem value="kazan">Казань</SelectItem>
                    <SelectItem value="rostov">Ростов-на-Дону</SelectItem>
                    <SelectItem value="ufa">Уфа</SelectItem>
                    <SelectItem value="krasnodar">Краснодар</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
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
                <p className="text-xs text-gray-500 mt-1">
                  Минимум 6 символов, включая цифры и буквы
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" className="mt-1" />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    Я согласен с{" "}
                    <Button
                      variant="link"
                      className="text-mamba-primary hover:text-mamba-secondary p-0 h-auto text-sm underline"
                    >
                      Пользовательским соглашением
                    </Button>{" "}
                    и{" "}
                    <Button
                      variant="link"
                      className="text-mamba-primary hover:text-mamba-secondary p-0 h-auto text-sm underline"
                    >
                      Политикой конфиденциальности
                    </Button>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="newsletter" className="mt-1" />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600">
                    Получать новости и специальные предложения
                  </Label>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-mamba-primary to-mamba-secondary hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold"
              onClick={handleRegister}
            >
              Создать аккаунт
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
                Зарегистрироваться через SMS
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
                Зарегистрироваться через Google
              </Button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Уже есть аккаунт?{" "}
                <Button
                  variant="link"
                  className="text-mamba-primary hover:text-mamba-secondary p-0 h-auto font-semibold"
                  onClick={() => setCurrentView("login")}
                >
                  Войти
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
