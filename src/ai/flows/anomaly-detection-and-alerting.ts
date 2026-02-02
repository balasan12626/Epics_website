'use server';
/**
 * @fileOverview Anomaly detection and alerting AI agent.
 *
 * - detectAnomaliesAndAlert - A function that handles the anomaly detection and alerting process.
 * - AnomalyDetectionInput - The input type for the detectAnomaliesAndAlert function.
 * - AnomalyDetectionOutput - The return type for the detectAnomaliesAndAlert function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnomalyDetectionInputSchema = z.object({
  userId: z.string().describe('The unique identifier of the user.'),
  spo2: z.number().describe('The SpO2 level of the user.'),
  heartRate: z.number().describe('The heart rate of the user in bpm.'),
  bloodPressure: z.string().describe('The blood pressure of the user (e.g., "120/80").'),
  bodyTemperature: z.number().describe('The body temperature of the user.'),
  historicalData: z.array(z.object({
    spo2: z.number(),
    heartRate: z.number(),
    bloodPressure: z.string(),
    bodyTemperature: z.number(),
    timestamp: z.string(),
  })).describe('Historical vital sign data for the user.'),
});
export type AnomalyDetectionInput = z.infer<typeof AnomalyDetectionInputSchema>;

const AnomalyDetectionOutputSchema = z.object({
  isAnomaly: z.boolean().describe('Whether an anomaly is detected.'),
  alertMessage: z.string().optional().describe('The alert message if an anomaly is detected.'),
});
export type AnomalyDetectionOutput = z.infer<typeof AnomalyDetectionOutputSchema>;

export async function detectAnomaliesAndAlert(input: AnomalyDetectionInput): Promise<AnomalyDetectionOutput> {
  return anomalyDetectionAndAlertingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'anomalyDetectionPrompt',
  input: { schema: AnomalyDetectionInputSchema },
  output: { schema: AnomalyDetectionOutputSchema },
  prompt: `You are an AI assistant specializing in detecting anomalies in users\' vital signs.

You will receive real-time data from various sensors, including SpO2, Heart Rate (bpm), Blood Pressure (systolic/diastolic), and Body Temperature, along with historical data for the user.

Cross-reference the current vital signs with the user\'s historical data to determine if there are any significant anomalies that warrant an immediate notification.

Consider the relationships between multiple sensors (e.g., correlation between high heart rate and low SpO2) and identify patterns that might indicate a potential health issue.

If an anomaly is detected, set the isAnomaly field to true and provide a detailed alert message explaining the nature of the anomaly and the recommended course of action. Otherwise, set isAnomaly to false and leave the alertMessage field empty.

Current Vital Signs:
- SpO2: {{{spo2}}}%
- Heart Rate: {{{heartRate}}} bpm
- Blood Pressure: {{{bloodPressure}}}
- Body Temperature: {{{bodyTemperature}}}°C

Historical Data:
{{#each historicalData}}
- Timestamp: {{{timestamp}}}, SpO2: {{{spo2}}}%, Heart Rate: {{{heartRate}}} bpm, Blood Pressure: {{{bloodPressure}}}, Body Temperature: {{{bodyTemperature}}}°C
{{/each}}
`,
});

const anomalyDetectionAndAlertingFlow = ai.defineFlow(
  {
    name: 'anomalyDetectionAndAlertingFlow',
    inputSchema: AnomalyDetectionInputSchema,
    outputSchema: AnomalyDetectionOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
