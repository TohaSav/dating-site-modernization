import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { ViewType, Profile } from "@/types";

interface MatchesPageProps {
  matches: number[];
  profiles: Profile[];
  setCurrentView: (view: ViewType) => void;
  setCurrentChat: (chatId: number) => void;
  getProfile: (id: number) => Profile | undefined;
}

export const MatchesPage = ({
  matches,
  profiles,
  setCurrentView,
  setCurrentChat,
  getProfile,
}: MatchesPageProps) => {
  const handleChatClick = (profileId: number) => {
    setCurrentChat(profileId);
    setCurrentView("chat");
  };

  return (
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
                  const profile = getProfile(matchId);
                  return profile ? (
                    <Card
                      key={profile.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleChatClick(profile.id)}
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
};
