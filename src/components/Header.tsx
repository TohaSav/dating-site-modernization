import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { ViewType } from "@/types";

interface HeaderProps {
  isLoggedIn: boolean;
  matches: number[];
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

export const Header = ({
  isLoggedIn,
  matches,
  currentView,
  setCurrentView,
}: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-2"
          onClick={() => setCurrentView("home")}
          role="button"
        >
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
              <Button variant="ghost" onClick={() => setCurrentView("search")}>
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
              <Button variant="ghost" onClick={() => setCurrentView("profile")}>
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
  );
};
