import { CheckCircle2, Clock, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8 cyber-glow">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <CheckCircle2 className="w-24 h-24 text-primary relative" strokeWidth={1.5} />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
            Payment Successful!
          </h1>
          <p className="text-xl text-foreground/90">
            Thank you for purchasing our cybersecurity bundle
          </p>
        </div>

        {/* Access Information */}
        <div className="bg-card/50 rounded-lg p-6 space-y-4 border border-primary/20">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">Access Timeline</h3>
              <p className="text-muted-foreground">
                You will receive access to your purchased bundle within the next <span className="text-primary font-semibold">24 hours</span>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">Check Your Email</h3>
              <p className="text-muted-foreground">
                We'll send you an email with your login credentials and access instructions shortly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-2">What's Next?</h3>
              <p className="text-muted-foreground">
                Once you receive access, you can start your cybersecurity learning journey immediately with our expert-led courses.
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> If you don't receive the email within 24 hours, please check your spam folder or contact our support team (admin@blackperldfir.com).
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8"
          >
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
