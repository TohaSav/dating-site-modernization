import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Header } from "@/components/Header";
import { ProfileCard } from "@/components/ProfileCard";
import { ViewType, Profile } from "@/types";

interface HomePageProps {
  isLoggedIn: boolean;
  matches: number[];
  likes: number[];
  profiles: Profile[];
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  handleLike: (profileId: number) => void;
}

export const HomePage = ({
  isLoggedIn,
  matches,
  likes,
  profiles,
  currentView,
  setCurrentView,
  handleLike,
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header
        isLoggedIn={isLoggedIn}
        matches={matches}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

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
            <ProfileCard
              key={profile.id}
              profile={profile}
              isLiked={likes.includes(profile.id)}
              onLike={handleLike}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
