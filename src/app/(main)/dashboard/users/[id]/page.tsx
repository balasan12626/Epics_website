import { users } from "@/lib/data";
import { User } from "@/lib/types";
import { Header } from "@/components/layout/header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Thermometer,
  HeartPulse,
  Ruler,
  MapPin,
  Clock,
  Wifi,
  Activity,
  Stethoscope,
  Wind,
} from "lucide-react";
import { VitalsChart } from "@/components/dashboard/vitals-chart";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User | undefined = users.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={`User Details: ${user.name}`} />
      <div className="flex-1 overflow-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="text-primary" />
                Current SpO2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{user.vitals.spo2}%</p>
              <p className="text-sm text-muted-foreground">
                Last updated: {format(new Date(user.vitals.timestamp), "PPpp")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="text-primary" />
                Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{user.vitals.heartRate} bpm</p>
              <p className="text-sm text-muted-foreground">
                Last updated: {format(new Date(user.vitals.timestamp), "PPpp")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="text-primary" />
                Blood Pressure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{user.vitals.bloodPressure}</p>
              <p className="text-sm text-muted-foreground">
                Last updated: {format(new Date(user.vitals.timestamp), "PPpp")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="text-primary" />
                Body Temperature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">
                {user.vitals.bodyTemperature.toFixed(1)}°C
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {format(new Date(user.vitals.timestamp), "PPpp")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">{user.location}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-primary" />
                Watch ID
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-mono">{user.watchId}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="text-primary" />
                Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge
                variant={
                  user.connectionStatus === "Connected"
                    ? "default"
                    : "destructive"
                }
                className={user.connectionStatus === 'Connected' ? 'bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-500/30'}
              >
                {user.connectionStatus}
              </Badge>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Vitals History (Last 10 Days)</CardTitle>
            <CardDescription>
              Historical data for SpO2, Heart Rate, and Temperature.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VitalsChart historicalData={user.historicalData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
