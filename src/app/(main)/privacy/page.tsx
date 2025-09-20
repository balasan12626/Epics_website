import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Privacy Policy" />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-xl text-foreground">1. Introduction</h3>
            <p>
              Vitality Insights ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Vitality Insights.
            </p>

            <h3 className="font-semibold text-xl text-foreground">2. Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you create an account. This includes your name and email address. We also collect health-related data from your connected monitoring device, including SpO2 levels, body temperature, location, and other sensor readings.
            </p>

            <h3 className="font-semibold text-xl text-foreground">3. How We Use Your Information</h3>
            <p>
              We use the information we collect to operate, maintain, and provide you with the features and functionality of the service. This includes processing your vital signs data to detect anomalies and send you alerts. We do not sell your personal data.
            </p>

            <h3 className="font-semibold text-xl text-foreground">4. Data Security</h3>
            <p>
              We use commercially reasonable safeguards to help keep the information collected through the service secure and take reasonable steps to verify your identity before granting you access to your account.
            </p>
            
            <h3 className="font-semibold text-xl text-foreground">5. Changes to Our Privacy Policy</h3>
            <p>
              We may modify or update this Privacy Policy from time to time, so you should review this page periodically.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
