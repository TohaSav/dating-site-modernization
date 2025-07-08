import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Profile } from "@/types";

interface ProfileCardProps {
  profile: Profile;
  isLiked?: boolean;
  showActions?: boolean;
  onClick?: () => void;
  onLike?: (profileId: number) => void;
}

export const ProfileCard = ({
  profile,
  isLiked = false,
  showActions = true,
  onClick,
  onLike,
}: ProfileCardProps) => {
  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
      onClick={onClick}
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
          {showActions && onLike && (
            <Button
              size="sm"
              className={`rounded-full ${isLiked ? "bg-pink-500" : "bg-gray-200 hover:bg-pink-500"}`}
              onClick={(e) => {
                e.stopPropagation();
                onLike(profile.id);
              }}
            >
              <Icon
                name="Heart"
                size={16}
                className={isLiked ? "text-white" : "text-gray-600"}
              />
            </Button>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-3">{profile.bio}</p>
        <div className="flex flex-wrap gap-1">
          {profile.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
