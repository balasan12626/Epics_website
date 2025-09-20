import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="About Vitality Insights" />
      <div className="flex-1 overflow-auto p-4 md:p-6 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Leaf className="h-12 w-12 text-primary" />
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <p>
              Vitality Insights is a state-of-the-art health monitoring solution designed to provide real-time insights into personal well-being. Our platform leverages advanced sensor technology and cutting-edge artificial intelligence to track key vital signs, identify potential health anomalies, and provide timely alerts.
            </p>
            <p>
              Our core mission is to empower individuals and caregivers with actionable data, fostering proactive health management and peace of mind. By combining data from multiple sensors—including SpO2, body temperature, and more—we offer a comprehensive view of a user's health status.
            </p>
            <p>
              The intelligent alerting system is at the heart of our platform. It analyzes current and historical data to distinguish between minor fluctuations and significant deviations that may require attention, effectively reducing false positives and ensuring that notifications are both meaningful and timely.
            </p>
            <p>
              We are committed to privacy, security, and user-centric design, ensuring that your health data is not only insightful but also protected.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
