import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { AdminLoginForm as AdminLoginFormType } from "../types";

interface AdminLoginFormProps {
  loginForm: AdminLoginFormType;
  setLoginForm: (
    form:
      | AdminLoginFormType
      | ((prev: AdminLoginFormType) => AdminLoginFormType),
  ) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  handleLogin: () => void;
  onBack: () => void;
}

export const AdminLoginForm = ({
  loginForm,
  setLoginForm,
  showPassword,
  setShowPassword,
  handleLogin,
  onBack,
}: AdminLoginFormProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Icon name="Shield" className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Панель администратора
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <Label htmlFor="admin-password">Пароль</Label>
            <div className="relative">
              <Input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  name={showPassword ? "EyeOff" : "Eye"}
                  className="w-4 h-4"
                />
              </Button>
            </div>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleLogin}
          >
            Войти в панель
          </Button>
          <Button variant="outline" className="w-full" onClick={onBack}>
            ← Назад на сайт
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
