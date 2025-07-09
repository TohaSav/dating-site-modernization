import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdminUser } from "../types";
import { UserCard } from "../components/UserCard";

interface UsersTabProps {
  users: AdminUser[];
  onUserAction: (userId: number, action: string) => void;
}

export const UsersTab = ({ users, onUserAction }: UsersTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Управление пользователями</h2>
        <div className="flex items-center gap-4">
          <Input placeholder="Поиск пользователей..." className="w-64" />
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все</SelectItem>
              <SelectItem value="active">Активные</SelectItem>
              <SelectItem value="banned">Заблокированные</SelectItem>
              <SelectItem value="premium">Премиум</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onUserAction={onUserAction} />
        ))}
      </div>
    </div>
  );
};
