import { SignupForm } from "@/components/auth/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf } from "lucide-react";

export default function SignupPage() {
  return (
    <Card className="shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-4">
            <Leaf className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
        <CardDescription>
          Join Vitality Insights to monitor health vitals.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
    </Card>
  );
}
