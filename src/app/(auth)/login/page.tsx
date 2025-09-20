import { LoginForm } from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf } from "lucide-react";

export default function LoginPage() {
  return (
    <Card className="shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-4">
            <Leaf className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Vitality Insights</CardTitle>
        <CardDescription>
          Welcome back! Please login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
