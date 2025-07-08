import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { ViewType, Message, Profile } from "@/types";

interface ChatPageProps {
  matches: number[];
  currentChat: number | null;
  messageText: string;
  setCurrentView: (view: ViewType) => void;
  setCurrentChat: (chatId: number) => void;
  setMessageText: (text: string) => void;
  handleSendMessage: () => void;
  getProfile: (id: number) => Profile | undefined;
  getChatMessages: (chatId: number) => Message[];
}

export const ChatPage = ({
  matches,
  currentChat,
  messageText,
  setCurrentView,
  setCurrentChat,
  setMessageText,
  handleSendMessage,
  getProfile,
  getChatMessages,
}: ChatPageProps) => {
  const currentProfile = currentChat ? getProfile(currentChat) : null;
  const currentMessages = currentChat ? getChatMessages(currentChat) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 h-[80vh]">
          {/* Список чатов */}
          <Card>
            <CardHeader>
              <h3 className="font-bold flex items-center">
                <Icon name="MessageCircle" className="mr-2" />
                Чаты
              </h3>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {matches.map((matchId) => {
                  const profile = getProfile(matchId);
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
              {currentChat && currentProfile ? (
                <>
                  <CardHeader className="border-b">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={currentProfile.image} />
                        <AvatarFallback>
                          {currentProfile.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{currentProfile.name}</h4>
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
                      {currentMessages.map((message) => (
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
                      {currentMessages.length === 0 && (
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
};
