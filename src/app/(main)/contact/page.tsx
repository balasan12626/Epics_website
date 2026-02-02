import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Contact Us" />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <p className="text-muted-foreground">
              Have questions or need support? Reach out to us through any of the channels below. We're here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <span>abc@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>+91 8778725356</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <span>
                  Salem, 636201<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
