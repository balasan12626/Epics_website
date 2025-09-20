import { User } from './types';
import { subDays, formatISO } from 'date-fns';

const generateHistoricalData = (baseVitals: { spo2: number; bodyTemp: number; altSensor: number }) => {
  return Array.from({ length: 10 }, (_, i) => {
    const timestamp = formatISO(subDays(new Date(), i + 1));
    return {
      spo2: baseVitals.spo2 - Math.random() * 2,
      alternateSensorReading: baseVitals.altSensor - Math.random() * 5,
      bodyTemperature: baseVitals.bodyTemp - Math.random() * 0.5,
      timestamp,
    };
  }).reverse();
};

export const users: User[] = [
  {
    id: 'usr_01H9Z2J4N8PQRSDGZMX1W3T4E5',
    watchId: 'w_A1B2C3D4E5F6',
    name: 'Alice Johnson',
    location: 'New York, USA',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 98,
      alternateSensorReading: 120,
      bodyTemperature: 37.0,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 98, bodyTemp: 37.0, altSensor: 120 }),
  },
  {
    id: 'usr_01H9Z2J4P6QRSDFGZMX1W3T4E6',
    watchId: 'w_F6E5D4C3B2A1',
    name: 'Bob Williams',
    location: 'London, UK',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 92,
      alternateSensorReading: 150,
      bodyTemperature: 38.5,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 96, bodyTemp: 36.8, altSensor: 110 }),
  },
  {
    id: 'usr_01H9Z2J4R9TUVXYZGMX1W3T4E7',
    watchId: 'w_G7H8I9J0K1L2',
    name: 'Charlie Brown',
    location: 'Tokyo, Japan',
    connectionStatus: 'Disconnected',
    vitals: {
      spo2: 99,
      alternateSensorReading: 115,
      bodyTemperature: 36.5,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 99, bodyTemp: 36.5, altSensor: 115 }),
  },
  {
    id: 'usr_01H9Z2J4S1M2N3OPQMX1W3T4E8',
    watchId: 'w_M3N4O5P6Q7R8',
    name: 'Diana Miller',
    location: 'Sydney, Australia',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 97,
      alternateSensorReading: 125,
      bodyTemperature: 37.2,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 97, bodyTemp: 37.2, altSensor: 125 }),
  },
  {
    id: 'usr_01H9Z2J4T4S5R6Q7PMX1W3T4E9',
    watchId: 'w_S9T0U1V2W3X4',
    name: 'Ethan Davis',
    location: 'Berlin, Germany',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 96,
      alternateSensorReading: 130,
      bodyTemperature: 36.9,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 96, bodyTemp: 36.9, altSensor: 130 }),
  },
  {
    id: 'usr_01H9Z2J4V7X8Y9Z0AMX1W3T4F0',
    watchId: 'w_Y5Z6A7B8C9D0',
    name: 'Fiona Garcia',
    location: 'Paris, France',
    connectionStatus: 'Disconnected',
    vitals: {
      spo2: 98,
      alternateSensorReading: 118,
      bodyTemperature: 37.1,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 98, bodyTemp: 37.1, altSensor: 118 }),
  },
  {
    id: 'usr_01H9Z2J4W1B2C3D4EMX1W3T4F1',
    watchId: 'w_E1F2G3H4I5J6',
    name: 'George Rodriguez',
    location: 'Toronto, Canada',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 99,
      alternateSensorReading: 122,
      bodyTemperature: 36.7,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 99, bodyTemp: 36.7, altSensor: 122 }),
  },
  {
    id: 'usr_01H9Z2J4X3K4L5M6NMX1W3T4F2',
    watchId: 'w_K7L8M9N0O1P2',
    name: 'Hannah Wilson',
    location: 'Moscow, Russia',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 95,
      alternateSensorReading: 135,
      bodyTemperature: 37.5,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 95, bodyTemp: 37.5, altSensor: 135 }),
  },
  {
    id: 'usr_01H9Z2J4Y5Q6R7S8TMX1W3T4F3',
    watchId: 'w_Q3R4S5T6U7V8',
    name: 'Ian Martinez',
    location: 'Sao Paulo, Brazil',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 97,
      alternateSensorReading: 128,
      bodyTemperature: 37.3,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 97, bodyTemp: 37.3, altSensor: 128 }),
  },
  {
    id: 'usr_01H9Z2J4Z8W9X0Y1ZMX1W3T4F4',
    watchId: 'w_W9X0Y1Z2A3B4',
    name: 'Jane Smith',
    location: 'Mumbai, India',
    connectionStatus: 'Connected',
    vitals: {
      spo2: 94,
      alternateSensorReading: 95,
      bodyTemperature: 36.2,
      timestamp: new Date().toISOString(),
    },
    historicalData: generateHistoricalData({ spo2: 98, bodyTemp: 36.8, altSensor: 112 }),
  },
];
