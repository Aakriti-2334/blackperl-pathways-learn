import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Clock, ArrowRight, Star } from "lucide-react";
import "./UrgencySection.css";
import certA from "@/assets/certs/a.jpg";
import certB from "@/assets/certs/b.jpg";
import certC from "@/assets/certs/c.jpg";
import certD from "@/assets/certs/d.jpg";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 1,
    minutes: 14,
    seconds: 47
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
                // Reset to original values - final minutes!
                return { days: 0, hours: 1, minutes: 14, seconds: 47 };
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
      name: "Sumit Chhabra",
      role: "Threat Hunter at Microsoft",
      image: "👨‍💻",
      text: "Just completed the Blackperl Threat Hunting course — an incredibly well-structured and hands-on learning experience. It dives deep into attacker tactics, detection techniques, and real-world hunting strategies. The blend of practical labs and expert guidance makes it a must for anyone in a SOC or threat intel role. Highly recommend !!!",
      rating: 5
    },
    {
      name: "Souvik Roy", 
      role: "Detection Engineer at Sophos",
      image: "👨‍💼",
      text: "I have recently purchased BCAD. All sessions are well-structured and clearly explained. The technical concepts are presented with helpful examples, making them easy to understand. The pace of the teacher’s explanations is just right, allowing me to follow along comfortably. Whenever I had any doubts, they helped me as soon as possible—sometimes even through one-on-one calls, if needed..",
      rating: 5
    },
    {
      name: "Eaghalaivan S",
      role: "DFIR specialist at Amazon", 
      image: "👨‍🔬",
      text: "The BCAD Accelerated program from BlackPerl DFIR is outstanding. The course is well-organized, progressing from basics to advanced DFIR techniques. The instructors are highly knowledgeable and responsive, making complex topics clear and engaging. I highly recommend this program for anyone looking to deepen their DFIR expertise.",
      rating: 5
    }
  ];

  const certs = [certA, certB, certC, certD];

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
            <span className="text-cyber-red animate-pulse-cyber">⚠️ FINAL MINUTES!</span>
            <br />
            Last Chance For <span className="text-gradient-primary">Career Freedom</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            <span className="text-cyber-red font-semibold">This price expires in minutes!</span> While others worry about AI taking their jobs, 
            you'll be building an unshakeable career in cybersecurity. Don't let this slip away!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyber-green">₹3,999</div>
              <div className="text-lg text-muted-foreground line-through">Was ₹25,000</div>
              <Badge className="bg-cyber-red text-white mt-2">Save ₹21,000 Today</Badge>
            </div>
            <div className="text-4xl text-muted-foreground">+</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-blue">FREE</div>
              <div className="text-sm text-muted-foreground">Career Coaching</div>
              <div className="text-xs text-muted-foreground">(Worth ₹5,000)</div>
            </div>
          </div>
          
          <Button
  size="lg"
  className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 animate-glow text-lg px-8 py-4"
  onClick={() => window.open('https://rzp.io/rzp/1RJBwLv', '_blank')}
>
  Secure Your Spot Now <ArrowRight className="ml-2 w-6 h-6" />
</Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            <Clock className="w-4 h-4 inline mr-1" />
            Only 3 spots remaining at this price - Timer expires soon!
          </p>

          <div className="cert-scroller mt-8">
            <div className="cert-scroller-inner">
              {[...certs, ...certs].map((cert, index) => (
                <img key={index} src={cert} alt={`Certificate ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Social Proaof / Testimonials */}
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
  🚨 THIS OFFER DISAPPEARS IN {timeLeft.hours} HOURS AND {timeLeft.minutes} MINUTES!
</h3>
            <p className="text-muted-foreground mb-6">
              Join the 15,000+ professionals who chose security over uncertainty. 
              Your future self will thank you for taking action today.
            </p>
            <a href="https://pages.razorpay.com/pl_RMZkRoZfZgDOtF/view" target="_blank" rel="noopener noreferrer">
  <Button size="lg" class="bg-cyber-red hover:bg-cyber-red/80 text-white text-xl px-12 py-4 animate-pulse-cyber">
    Yes, I Want Career Security →
  </Button>
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
