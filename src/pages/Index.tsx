import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likes, setLikes] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [currentChat, setCurrentChat] = useState<number | null>(null);
  const [messageText, setMessageText] = useState("");
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [adminLogin, setAdminLogin] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Данные профилей
  const profiles = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      location: "Москва",
      bio: "Люблю путешествия, фотографию и хорошую компанию 📸✈️",
      image: "/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg",
      interests: ["Путешествия", "Фотография", "Кино"],
      verified: true,
      premium: true,
      online: true,
    },
    {
      id: 2,
      name: "Максим",
      age: 28,
      location: "Санкт-Петербург",
      bio: "Программист и меломан. Ищу спутницу для концертов и долгих прогулок 🎵",
      image: "/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg",
      interests: ["Музыка", "IT", "Спорт"],
      verified: true,
      premium: false,
      online: false,
    },
    {
      id: 3,
      name: "София",
      age: 23,
      location: "Москва",
      bio: "Художница и любительница кофе. Нарисую твой портрет! ☕🎨",
      image: "/img/232ac293-fdff-4f40-9c0b-87d0eeb45092.jpg",
      interests: ["Искусство", "Кофе", "Книги"],
      verified: false,
      premium: true,
      online: true,
    },
  ];

  const interests = [
    "Путешествия",
    "Спорт",
    "Музыка",
    "Фотография",
    "Кино",
    "Книги",
    "Кулинария",
    "Искусство",
    "IT",
    "Танцы",
  ];

  const handleLike = (profileId: number) => {
    if (!likes.includes(profileId)) {
      setLikes([...likes, profileId]);
      // Симуляция взаимного лайка
      if (Math.random() > 0.5) {
        setMatches([...matches, profileId]);
        toast({
          title: "Новый матч! 💕",
          description: "Вы понравились друг другу!",
        });
      } else {
        toast({
          title: "Лайк отправлен! ❤️",
          description: "Ждем ответной реакции",
        });
      }
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim() && currentChat) {
      const newMessage = {
        id: messages.length + 1,
        chatId: currentChat,
        text: messageText,
        sender: "me",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessageText("");

      // Симуляция ответа
      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          chatId: currentChat,
          text: "Привет! Как дела? 😊",
          sender: "other",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, reply]);
      }, 2000);
    }
  };

  const handleAdminLogin = () => {
    if (
      adminLogin === "toly.akuloff@yandex.ru" &&
      adminPassword === "908908Tolya--Qwe"
    ) {
      setIsAdmin(true);
      setCurrentView("admin");
      toast({
        title: "Добро пожаловать, администратор!",
        description: "Вы успешно вошли в админ-панель",
      });
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный логин или пароль",
        variant: "destructive",
      });
    }
  };

  // Главная страница
  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-pink-500" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              LoveSpace
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={() => setCurrentView("login")}>
                  Войти
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
                  onClick={() => setCurrentView("register")}
                >
                  Регистрация
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("search")}
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Поиск
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("matches")}
                  className="relative"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  Матчи
                  {matches.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500">
                      {matches.length}
                    </Badge>
                  )}
                </Button>
                <Button variant="ghost" onClick={() => setCurrentView("chat")}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Чат
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("profile")}
                >
                  <Icon name="User" size={20} className="mr-2" />
                  Профиль
                </Button>
                <Button variant="ghost" onClick={() => setCurrentView("admin")}>
                  <Icon name="Settings" size={20} className="mr-2" />
                  Админ
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Найди свою
          </span>
          <br />
          <span className="text-gray-800">вторую половинку</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Современная платформа знакомств с умным алгоритмом подбора,
          видеозвонками и системой верификации
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
            onClick={() => setCurrentView("register")}
          >
            <Icon name="Heart" size={20} className="mr-2" />
            Начать знакомства
          </Button>
          <Button size="lg" variant="outline">
            <Icon name="Play" size={20} className="mr-2" />
            Посмотреть видео
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon
                name="Zap"
                size={48}
                className="mx-auto text-pink-500 mb-4"
              />
              <CardTitle>Умный матчинг</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Алгоритм совместимости на основе интересов, ценностей и
                предпочтений
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto text-blue-500 mb-4"
              />
              <CardTitle>Поиск рядом</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Находите людей в вашем городе и районе с помощью геолокации
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon
                name="Shield"
                size={48}
                className="mx-auto text-green-500 mb-4"
              />
              <CardTitle>Безопасность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Система верификации профилей и модерация контента
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preview Profiles */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Знакомьтесь прямо сейчас
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className="overflow-hidden hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-64 object-cover"
                />
                {profile.online && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
                )}
                {profile.verified && (
                  <Badge className="absolute top-4 left-4 bg-blue-500">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    Верифицирован
                  </Badge>
                )}
                {profile.premium && (
                  <Badge className="absolute bottom-4 left-4 bg-gradient-to-r from-pink-500 to-blue-500">
                    <Icon name="Crown" size={16} className="mr-1" />
                    Premium
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      {profile.name}, {profile.age}
                    </h3>
                    <p className="text-gray-500 flex items-center">
                      <Icon name="MapPin" size={16} className="mr-1" />
                      {profile.location}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className={`rounded-full ${likes.includes(profile.id) ? "bg-pink-500" : "bg-gray-200 hover:bg-pink-500"}`}
                    onClick={() => handleLike(profile.id)}
                  >
                    <Icon
                      name="Heart"
                      size={16}
                      className={
                        likes.includes(profile.id)
                          ? "text-white"
                          : "text-gray-600"
                      }
                    />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-3">{profile.bio}</p>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="text-xs"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  // Остальные компоненты будут в следующем обновлении
  const renderLogin = () => (
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
            onClick={() => {
              setIsLoggedIn(true);
              setCurrentView("home");
            }}
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

  const renderRegister = () => (
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
            onClick={() => {
              setIsLoggedIn(true);
              setCurrentView("home");
            }}
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

  const renderSearch = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Search" className="mr-2" />
              Поиск людей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label>
                  Возраст: {ageRange[0]}-{ageRange[1]}
                </Label>
                <Slider
                  value={ageRange}
                  onValueChange={setAgeRange}
                  max={60}
                  min={18}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Город</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="ekb">Екатеринбург</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Интересы</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interests.slice(0, 4).map((interest) => (
                    <Badge
                      key={interest}
                      variant={
                        selectedInterests.includes(interest)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => {
                        if (selectedInterests.includes(interest)) {
                          setSelectedInterests(
                            selectedInterests.filter((i) => i !== interest),
                          );
                        } else {
                          setSelectedInterests([
                            ...selectedInterests,
                            interest,
                          ]);
                        }
                      }}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className="overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-64 object-cover"
                />
                {profile.online && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {profile.name}, {profile.age}
                </h3>
                <p className="text-gray-600 mb-3">{profile.bio}</p>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Icon name="X" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-pink-500 hover:bg-pink-600"
                    onClick={() => handleLike(profile.id)}
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Star" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => setCurrentView("home")}>
            ← Назад на главную
          </Button>
        </div>
      </div>
    </div>
  );

  const renderMatches = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Heart" className="mr-2 text-pink-500" />
              Ваши матчи ({matches.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {matches.length === 0 ? (
              <div className="text-center py-12">
                <Icon
                  name="Heart"
                  size={64}
                  className="mx-auto text-gray-300 mb-4"
                />
                <p className="text-gray-500">
                  Пока нет матчей. Продолжайте знакомиться!
                </p>
                <Button
                  className="mt-4"
                  onClick={() => setCurrentView("search")}
                >
                  Найти людей
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {matches.map((matchId) => {
                  const profile = profiles.find((p) => p.id === matchId);
                  return profile ? (
                    <Card
                      key={profile.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => {
                        setCurrentChat(profile.id);
                        setCurrentView("chat");
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={profile.image} />
                            <AvatarFallback>{profile.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-bold">{profile.name}</h4>
                            <p className="text-sm text-gray-500">
                              Нажмите для общения
                            </p>
                          </div>
                          <Icon
                            name="MessageCircle"
                            className="text-blue-500"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ) : null;
                })}
              </div>
            )}
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

  const renderChat = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 h-[80vh]">
          {/* Список чатов */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MessageCircle" className="mr-2" />
                Чаты
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {matches.map((matchId) => {
                  const profile = profiles.find((p) => p.id === matchId);
                  return profile ? (
                    <div
                      key={profile.id}
                      className={`p-3 cursor-pointer hover:bg-gray-100 border-b ${
                        currentChat === profile.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setCurrentChat(profile.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={profile.image} />
                          <AvatarFallback>{profile.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium">{profile.name}</h4>
                          <p className="text-sm text-gray-500">
                            Последнее сообщение...
                          </p>
                        </div>
                        {profile.online && (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ) : null;
                })}
                {matches.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    Нет активных чатов
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Окно чата */}
          <div className="md:col-span-2">
            <Card className="h-full flex flex-col">
              {currentChat ? (
                <>
                  <CardHeader className="border-b">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={
                            profiles.find((p) => p.id === currentChat)?.image
                          }
                        />
                        <AvatarFallback>
                          {profiles.find((p) => p.id === currentChat)?.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">
                          {profiles.find((p) => p.id === currentChat)?.name}
                        </h4>
                        <p className="text-sm text-green-500">В сети</p>
                      </div>
                      <div className="ml-auto flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Icon name="Phone" size={16} />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="Video" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {messages
                        .filter((m) => m.chatId === currentChat)
                        .map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.sender === "me"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              <p>{message.text}</p>
                              <p className="text-xs opacity-70 mt-1">
                                {message.timestamp.toLocaleTimeString("ru", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      {messages.filter((m) => m.chatId === currentChat)
                        .length === 0 && (
                        <div className="text-center text-gray-500 py-8">
                          <Icon
                            name="MessageCircle"
                            size={48}
                            className="mx-auto mb-4 opacity-50"
                          />
                          <p>Начните общение!</p>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Напишите сообщение..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                      />
                      <Button onClick={handleSendMessage}>
                        <Icon name="Send" size={16} />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon
                      name="MessageCircle"
                      size={64}
                      className="mx-auto mb-4 opacity-50"
                    />
                    <p>Выберите чат для начала общения</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => setCurrentView("home")}>
            ← Назад на главную
          </Button>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
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
                    {interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant={
                          selectedInterests.includes(interest)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
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

  const renderAdmin = () => {
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
                <h3 className="text-2xl font-bold">1,247</h3>
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
                <h3 className="text-2xl font-bold">8,934</h3>
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
                <h3 className="text-2xl font-bold">2,156</h3>
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
                <h3 className="text-2xl font-bold">12</h3>
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

  // Рендер в зависимости от текущего вида
  switch (currentView) {
    case "login":
      return renderLogin();
    case "register":
      return renderRegister();
    case "search":
      return renderSearch();
    case "matches":
      return renderMatches();
    case "chat":
      return renderChat();
    case "profile":
      return renderProfile();
    case "admin":
      return renderAdmin();
    default:
      return renderHome();
  }
};

export default Index;
