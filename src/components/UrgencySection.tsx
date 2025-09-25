import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Clock, ArrowRight, Star } from "lucide-react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 55
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                // Reset to original values
                return { days: 6, hours: 23, minutes: 59, seconds: 55 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "SOC Analyst at Microsoft",
      image: "👩‍💻",
      text: "Went from $45K to $135K in 8 months. The hands-on labs were game-changing!",
      rating: 5
    },
    {
      name: "Marcus Johnson", 
      role: "DFIR Specialist at IBM",
      image: "👨‍💼",
      text: "Best investment I ever made. Now leading a team of 12 security analysts.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Threat Hunter at Cisco", 
      image: "👩‍🔬",
      text: "The practical skills got me hired immediately. 200% salary increase!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyber-green/20 rounded-full blur-3xl animate-pulse-cyber" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyber-blue/20 rounded-full blur-2xl animate-pulse-cyber" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown Timer */}
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-6 animate-pulse-cyber bg-cyber-red text-white">
            <Flame className="w-4 h-4 mr-2" />
            LIMITED TIME OFFER EXPIRES IN:
          </Badge>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card border-cyber-red/30 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-cyber-red mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Don't Miss Your <span className="text-cyber-red">Last Chance</span>
            <br />
            For <span className="text-gradient-primary">Career Freedom</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            While others worry about AI taking their jobs, you'll be building an unshakeable career in cybersecurity. 
            This exclusive bundle ends soon - secure your recession-proof future today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyber-green">$1,997</div>
              <div className="text-lg text-muted-foreground line-through">Was $4,995</div>
              <Badge className="bg-cyber-red text-white mt-2">Save $2,998 Today</Badge>
            </div>
            <div className="text-4xl text-muted-foreground">+</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-blue">FREE</div>
              <div className="text-sm text-muted-foreground">Career Coaching</div>
              <div className="text-xs text-muted-foreground">(Worth $500)</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 animate-glow text-lg px-8 py-4">
            Secure Your Spot Now <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            <Clock className="w-4 h-4 inline mr-1" />
            Only 47 spots remaining at this price
          </p>
        </div>
        
        {/* Social Proof / Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-yellow text-cyber-yellow" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-card border border-cyber-red/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-cyber">
            <h3 className="text-3xl font-bold mb-4 text-cyber-red">
              ⚠️ This Offer Disappears Forever In {timeLeft.days} Days
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the 15,000+ professionals who chose security over uncertainty. 
              Your future self will thank you for taking action today.
            </p>
            <Button size="lg" className="bg-cyber-red hover:bg-cyber-red/80 text-white text-xl px-12 py-4 animate-pulse-cyber">
              Yes, I Want Career Security →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;