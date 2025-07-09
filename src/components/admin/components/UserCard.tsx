import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { AdminUser } from "../types";

interface UserCardProps {
  user: AdminUser;
  onUserAction: (userId: number, action: string) => void;
}

export const UserCard = ({ user, onUserAction }: UserCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{user.name}</h3>
              {user.verified && (
                <Badge className="bg-blue-100 text-blue-800">
                  Верифицирован
                </Badge>
              )}
              {user.premium && (
                <Badge className="bg-gold-100 text-gold-800">Premium</Badge>
              )}
              {user.online && (
                <Badge className="bg-green-100 text-green-800">Онлайн</Badge>
              )}
            </div>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">
              {user.age} лет, {user.location}
            </p>
            <p className="text-sm text-gray-500">
              Последняя активность: {user.lastActive}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={user.status === "active" ? "destructive" : "default"}
              onClick={() =>
                onUserAction(
                  user.id,
                  user.status === "active" ? "banned" : "active",
                )
              }
            >
              {user.status === "active" ? "Заблокировать" : "Разблокировать"}
            </Button>
            <Button size="sm" variant="outline">
              <Icon name="Edit" className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Icon name="MessageSquare" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
