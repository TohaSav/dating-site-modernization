import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface AdminHeaderProps {
  onLogout: () => void;
}

export const AdminHeader = ({ onLogout }: AdminHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <Icon name="Shield" className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Админка Mamba
          </h1>
          <p className="text-gray-600">Панель управления сайтом знакомств</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          <Icon name="CircleCheck" className="w-4 h-4 mr-1" />
          Онлайн
        </Badge>
        <Button variant="outline" onClick={onLogout}>
          <Icon name="LogOut" className="w-4 h-4 mr-2" />
          Выйти
        </Button>
      </div>
    </div>
  );
};
