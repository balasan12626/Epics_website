"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { users as initialUsers } from "@/lib/data";
import { User } from "@/lib/types";
import {
  detectAnomaliesAndAlert,
  AnomalyDetectionOutput,
} from "@/ai/flows/anomaly-detection-and-alerting";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Loader,
  XCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "../ui/card";

export function UserTable() {
  const router = useRouter();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [anomalyStatus, setAnomalyStatus] = useState<Record<string, AnomalyDetectionOutput & { checking: boolean }>>({});

  const [isPending, startTransition] = useTransition();

  const handleRowClick = (userId: string) => {
    router.push(`/dashboard/users/${userId}`);
  };

  const checkAnomaly = (user: User) => {
    startTransition(async () => {
      setAnomalyStatus(prev => ({ ...prev, [user.id]: { isAnomaly: false, checking: true } }));
      try {
        const result = await detectAnomaliesAndAlert({
          userId: user.id,
          spo2: user.vitals.spo2,
          heartRate: user.vitals.heartRate,
          bloodPressure: user.vitals.bloodPressure,
          bodyTemperature: user.vitals.bodyTemperature,
          historicalData: user.historicalData,
        });

        setAnomalyStatus(prev => ({ ...prev, [user.id]: { ...result, checking: false } }));

        if (result.isAnomaly) {
          toast({
            variant: "destructive",
            title: `Anomaly Detected for ${user.name}`,
            description: result.alertMessage,
          });
        }
      } catch (error) {
        console.error("Failed to check for anomalies:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not perform anomaly check.",
        });
        setAnomalyStatus(prev => ({ ...prev, [user.id]: { isAnomaly: false, checking: false } }));
      }
    });
  };

  const AnomalyIndicator = ({ userId, userName }: { userId: string, userName: string }) => {
    const status = anomalyStatus[userId];
    if (status?.checking) {
      return <Loader className="h-5 w-5 animate-spin text-muted-foreground" />;
    }
    if (status?.isAnomaly) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{status.alertMessage}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    if (status && !status.isAnomaly) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>No anomalies detected for {userName}.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Click "Check Vitals" to run anomaly detection.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-center">SpO2</TableHead>
                <TableHead className="text-center">Heart Rate (bpm)</TableHead>
                <TableHead className="text-center">BP (mmHg)</TableHead>
                <TableHead className="text-center">Temp (°C)</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Anomaly</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  onClick={() => handleRowClick(user.id)}
                  className="cursor-pointer"
                >
                  <TableCell>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">ID: {user.watchId}</div>
                  </TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell className="text-center font-semibold">
                    <span className={user.vitals.spo2 < 95 ? "text-destructive" : "text-green-500"}>
                      {user.vitals.spo2}%
                    </span>
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    <span className={(user.vitals.heartRate > 100 || user.vitals.heartRate < 60) ? "text-amber-500" : "text-blue-500"}>
                      {user.vitals.heartRate}
                    </span>
                  </TableCell>
                  <TableCell className="text-center font-mono">
                    {user.vitals.bloodPressure}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={user.vitals.bodyTemperature > 37.5 ? "text-destructive" : ""}>
                      {user.vitals.bodyTemperature.toFixed(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        user.connectionStatus === "Connected"
                          ? "default"
                          : "destructive"
                      }
                      className={user.connectionStatus === 'Connected' ? 'bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-500/30'}
                    >
                      {user.connectionStatus === "Connected" ? <CheckCircle2 className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
                      {user.connectionStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                      <AnomalyIndicator userId={user.id} userName={user.name} />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        checkAnomaly(user);
                      }}
                      disabled={anomalyStatus[user.id]?.checking}
                    >
                      Check Vitals
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
