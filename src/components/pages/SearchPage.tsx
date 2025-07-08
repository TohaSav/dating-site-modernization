import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { ProfileCard } from "@/components/ProfileCard";
import { ViewType, Profile } from "@/types";
import { INTERESTS, CITIES } from "@/data/constants";

interface SearchPageProps {
  profiles: Profile[];
  likes: number[];
  ageRange: [number, number];
  selectedInterests: string[];
  setCurrentView: (view: ViewType) => void;
  setAgeRange: (range: [number, number]) => void;
  toggleInterest: (interest: string) => void;
  handleLike: (profileId: number) => void;
}

export const SearchPage = ({
  profiles,
  likes,
  ageRange,
  selectedInterests,
  setCurrentView,
  setAgeRange,
  toggleInterest,
  handleLike,
}: SearchPageProps) => {
  return (
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
                    {CITIES.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Интересы</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {INTERESTS.slice(0, 4).map((interest) => (
                    <Badge
                      key={interest}
                      variant={
                        selectedInterests.includes(interest)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => toggleInterest(interest)}
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
};
