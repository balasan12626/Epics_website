import { User } from './types';
import { subDays, formatISO } from 'date-fns';

const generateHistoricalData = (baseVitals: { spo2: number; bodyTemp: number; heartRate: number; bloodPressure: string }) => {
  return Array.from({ length: 10 }, (_, i) => {
    const timestamp = formatISO(subDays(new Date(), i + 1));
    const bpParts = baseVitals.bloodPressure.split('/');
    const systolic = parseInt(bpParts[0]) + Math.floor(Math.random() * 10 - 5);
    const diastolic = parseInt(bpParts[1]) + Math.floor(Math.random() * 6 - 3);

    return {
      spo2: baseVitals.spo2 - Math.random() * 2,
      heartRate: baseVitals.heartRate + Math.floor(Math.random() * 10 - 5),
      bloodPressure: `${systolic}/${diastolic}`,
      bodyTemperature: baseVitals.bodyTemp + (Math.random() * 0.4 - 0.2),
      timestamp,
    };
  }).reverse();
};

export const users: User[] = [
  {
    id: 'usr_01H9Z2J4N8PQRSDGZMX1W3T4E5',
    watchId: 'w_A1B2C3D4E5F6',
    name: 'Arun Kumar',
    location: 'Chennai, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 98,
      heartRate: 72,
      bloodPressure: '120/80',
      bodyTemperature: 37.0,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 98, bodyTemp: 37.0, heartRate: 72, bloodPressure: '120/80' }),
  },
  {
    id: 'usr_01H9Z2J4P6QRSDFGZMX1W3T4E6',
    watchId: 'w_F6E5D4C3B2A1',
    name: 'Priya Dharshini',
    location: 'Coimbatore, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 96,
      heartRate: 78,
      bloodPressure: '118/75',
      bodyTemperature: 36.8,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 96, bodyTemp: 36.8, heartRate: 78, bloodPressure: '118/75' }),
  },
  {
    id: 'usr_01H9Z2J4R9TUVXYZGMX1W3T4E7',
    watchId: 'w_G7H8I9J0K1L2',
    name: 'Karthik Raja',
    location: 'Madurai, Tamil Nadu',
    connectionStatus: 'Disconnected',
    vitals: {
      spo2: 99,
      heartRate: 65,
      bloodPressure: '122/82',
      bodyTemperature: 36.5,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 99, bodyTemp: 36.5, heartRate: 65, bloodPressure: '122/82' }),
  },
  {
    id: 'usr_01H9Z2J4S1M2N3OPQMX1W3T4E8',
    watchId: 'w_M3N4O5P6Q7R8',
    name: 'Meena Kumari',
    location: 'Trichy, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 97,
      heartRate: 82,
      bloodPressure: '125/85',
      bodyTemperature: 37.2,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 97, bodyTemp: 37.2, heartRate: 82, bloodPressure: '125/85' }),
  },
  {
    id: 'usr_01H9Z2J4T4S5R6Q7PMX1W3T4E9',
    watchId: 'w_S9T0U1V2W3X4',
    name: 'Vijay Sethu',
    location: 'Salem, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 96,
      heartRate: 75,
      bloodPressure: '115/78',
      bodyTemperature: 36.9,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 96, bodyTemp: 36.9, heartRate: 75, bloodPressure: '115/78' }),
  },
  {
    id: 'usr_01H9Z2J4V7X8Y9Z0AMX1W3T4F0',
    watchId: 'w_Y5Z6A7B8C9D0',
    name: 'Anitha Raj',
    location: 'Tirunelveli, Tamil Nadu',
    connectionStatus: 'Disconnected',
    vitals: {
      spo2: 98,
      heartRate: 70,
      bloodPressure: '121/79',
      bodyTemperature: 37.1,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 98, bodyTemp: 37.1, heartRate: 70, bloodPressure: '121/79' }),
  },
  {
    id: 'usr_01H9Z2J4W1B2C3D4EMX1W3T4F1',
    watchId: 'w_E1F2G3H4I5J6',
    name: 'Suresh Raina',
    location: 'Erode, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 99,
      heartRate: 68,
      bloodPressure: '119/81',
      bodyTemperature: 36.7,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 99, bodyTemp: 36.7, heartRate: 68, bloodPressure: '119/81' }),
  },
  {
    id: 'usr_01H9Z2J4X3K4L5M6NMX1W3T4F2',
    watchId: 'w_K7L8M9N0O1P2',
    name: 'Divya Bharathi',
    location: 'Vellore, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 95,
      heartRate: 85,
      bloodPressure: '130/88',
      bodyTemperature: 37.5,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 95, bodyTemp: 37.5, heartRate: 85, bloodPressure: '130/88' }),
  },
  {
    id: 'usr_01H9Z2J4Y5Q6R7S8TMX1W3T4F3',
    watchId: 'w_Q3R4S5T6U7V8',
    name: 'Rajesh Khanna',
    location: 'Thoothukudi, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 97,
      heartRate: 74,
      bloodPressure: '124/84',
      bodyTemperature: 37.3,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 97, bodyTemp: 37.3, heartRate: 74, bloodPressure: '124/84' }),
  },
  {
    id: 'usr_01H9Z2J4Z8W9X0Y1ZMX1W3T4F4',
    watchId: 'w_W9X0Y1Z2A3B4',
    name: 'Lakshmi Devi',
    location: 'Tiruppur, Tamil Nadu',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 94,
      heartRate: 90,
      bloodPressure: '135/92',
      bodyTemperature: 36.2,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 94, bodyTemp: 36.2, heartRate: 90, bloodPressure: '135/92' }),
  },
];
