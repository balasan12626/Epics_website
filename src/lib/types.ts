export type VitalSign = {
  spo2: number;
  heartRate: number;
  bloodPressure: string;
  bodyTemperature: number;
  timestamp: string;
};

export type User = {
  id: string;
  watchId: string;
  name: string;
  location: string;
  connectionStatus: "Connected" | "Disconnected";
  vitals: VitalSign;
  historicalData: VitalSign[];
};
