import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { ViewType } from "@/types";

interface MambaHomePageProps {
  setCurrentView: (view: ViewType) => void;
}

export const MambaHomePage = ({ setCurrentView }: MambaHomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-mamba-primary to-mamba-secondary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-mamba-primary to-mamba-secondary bg-clip-text text-transparent">
                Мамба
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-mamba-primary"
              >
                Анкеты
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-mamba-primary"
              >
                Симпатии
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-mamba-primary"
              >
                Сообщения
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-mamba-primary"
              >
                Подарки
              </Button>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setCurrentView("login")}
                className="border-mamba-primary text-mamba-primary hover:bg-mamba-primary hover:text-white"
              >
                Вход
              </Button>
              <Button
                className="bg-gradient-to-r from-mamba-primary to-mamba-secondary hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => setCurrentView("register")}
              >
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-mamba-primary to-mamba-secondary bg-clip-text text-transparent">
                  Знакомства
                </span>
                <br />
                <span className="text-gray-800">без границ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Более 40 миллионов пользователей по всему миру. Найдите свою
                любовь уже сегодня!
              </p>

              {/* Quick Registration Form */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Быстрая регистрация</CardTitle>
                  <CardDescription>
                    Присоединяйтесь к миллионам пользователей
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Пол
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Мужской</SelectItem>
                          <SelectItem value="female">Женский</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Возраст
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Возраст" />
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
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="border-gray-300"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-mamba-primary to-mamba-secondary hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg"
                    onClick={() => setCurrentView("register")}
                  >
                    Начать знакомства
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg"
                        alt="Анкета"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
                      <Badge className="absolute bottom-2 left-2 bg-mamba-primary">
                        <Icon name="Verified" size={12} className="mr-1" />
                        Проверено
                      </Badge>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-lg">Анна, 25</h3>
                      <p className="text-sm text-gray-600">Москва</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg"
                        alt="Анкета"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute bottom-2 left-2 bg-mamba-accent text-gray-800">
                        <Icon name="Crown" size={12} className="mr-1" />
                        VIP
                      </Badge>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-lg">Максим, 28</h3>
                      <p className="text-sm text-gray-600">СПб</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4 mt-8">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg"
                        alt="Анкета"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-lg">София, 23</h3>
                      <p className="text-sm text-gray-600">Екатеринбург</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg"
                        alt="Анкета"
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute bottom-2 left-2 bg-mamba-secondary text-white">
                        <Icon name="Heart" size={12} className="mr-1" />
                        Популярно
                      </Badge>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-lg">Дмитрий, 30</h3>
                      <p className="text-sm text-gray-600">Новосибирск</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-mamba-primary to-mamba-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">40 млн пользователей</h3>
                <p className="text-gray-600">
                  Огромная база анкет по всему миру
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-mamba-secondary to-mamba-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Безопасность</h3>
                <p className="text-gray-600">
                  Проверенные анкеты и защищенные данные
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-mamba-accent to-mamba-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Удобное общение</h3>
                <p className="text-gray-600">
                  Мессенджер, видеозвонки и подарки
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Profiles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Популярные анкеты
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg"
                    alt={`Анкета ${i + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
                  {i % 3 === 0 && (
                    <Badge className="absolute bottom-2 left-2 bg-mamba-primary text-white">
                      <Icon name="Verified" size={12} className="mr-1" />
                      Проверено
                    </Badge>
                  )}
                  {i % 4 === 0 && (
                    <Badge className="absolute bottom-2 left-2 bg-mamba-accent text-gray-800">
                      <Icon name="Crown" size={12} className="mr-1" />
                      VIP
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    {
                      [
                        "Анна",
                        "Максим",
                        "София",
                        "Дмитрий",
                        "Мария",
                        "Алексей",
                        "Елена",
                        "Сергей",
                      ][i]
                    }
                    , {20 + i * 2}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {
                      [
                        "Москва",
                        "СПб",
                        "Екатеринбург",
                        "Новосибирск",
                        "Казань",
                        "Ростов",
                        "Уфа",
                        "Краснодар",
                      ][i]
                    }
                  </p>
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-mamba-primary border-mamba-primary hover:bg-mamba-primary hover:text-white"
                    >
                      <Icon name="Heart" size={14} className="mr-1" />
                      Нравится
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-mamba-secondary hover:bg-mamba-secondary hover:text-white"
                    >
                      <Icon name="MessageCircle" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-mamba-primary to-mamba-secondary hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={() => setCurrentView("search")}
            >
              Посмотреть все анкеты
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-mamba-primary to-mamba-secondary rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold">Мамба</span>
              </div>
              <p className="text-gray-400">
                Крупнейшая сеть знакомств в России и СНГ. Более 40 миллионов
                пользователей.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Знакомства</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Анкеты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Поиск
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Симпатии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сообщения
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Сервис</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Подарки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    VIP статус
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Мобильное приложение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Реклама
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Мамба. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
