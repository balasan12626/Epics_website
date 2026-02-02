"use client";

import { VitalSign } from "@/lib/types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

const chartConfig = {
  spo2: {
    label: "SpO2 (%)",
    color: "hsl(var(--primary))",
  },
  bodyTemperature: {
    label: "Temp (°C)",
    color: "hsl(var(--destructive))",
  },
  heartRate: {
    label: "Heart Rate (bpm)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type VitalsChartProps = {
  historicalData: VitalSign[];
};

export function VitalsChart({ historicalData }: VitalsChartProps) {
  const chartData = historicalData.map((data) => ({
    ...data,
    date: format(new Date(data.timestamp), "MMM d"),
  }));

  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            domain={['dataMin - 2', 'dataMax + 2']}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <Tooltip
            content={
              <ChartTooltipContent
                indicator="dot"
                labelFormatter={(label, payload) => {
                  return `Date: ${label}`;
                }}
              />
            }
          />
          <Legend />
          <Line
            yAxisId="left"
            dataKey="spo2"
            type="monotone"
            stroke={chartConfig.spo2.color}
            strokeWidth={2}
            dot={true}
          />
          <Line
            yAxisId="left"
            dataKey="bodyTemperature"
            type="monotone"
            stroke={chartConfig.bodyTemperature.color}
            strokeWidth={2}
            dot={true}
          />
          <Line
            yAxisId="right"
            dataKey="heartRate"
            type="monotone"
            stroke={chartConfig.heartRate.color}
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
