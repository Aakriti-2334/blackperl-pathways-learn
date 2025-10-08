import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import client1 from "@/assets/trust/1.png";
import client2 from "@/assets/trust/2.png";
import client3 from "@/assets/trust/3.png";
import client4 from "@/assets/trust/4.png";
import client5 from "@/assets/trust/5.png";


const corporateClients = [
  { logo: client1 },
  { logo: client2 },
  { logo: client3 },
  { logo: client4 },
  { logo: client5 },
  { logo: client1 }
];

const trainingFeatures = [
  "Customized curriculum aligned with your security needs",
  "On-site or remote training options",
  "Hands-on labs with real-world scenarios",
  "Expert instructors with industry experience",
  "Post-training support and certification",
  "Flexible scheduling for your team"
];

const trainingPrograms = [
  {
    title: "SOC Team Training",
    description: "Upskill your SOC analysts with advanced threat detection and response techniques",
    duration: "2-4 weeks",
    icon: "🛡️"
  },
  {
    title: "Incident Response Bootcamp",
    description: "Prepare your IR team to handle critical security incidents effectively",
    duration: "3-5 weeks",
    icon: "🚨"
  },
  {
    title: "Threat Hunting Program",
    description: "Train your team to proactively hunt advanced threats in your environment",
    duration: "4-6 weeks",
    icon: "🎯"
  },
  {
    title: "Security Engineering Workshop",
    description: "Enable your developers to build secure applications from the ground up",
    duration: "2-3 weeks",
    icon: "🔧"
  }
];

const CorporateTraining = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-accent border-accent">
            ENTERPRISE SOLUTIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient-cyber">Leading Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fortune 500 companies and top enterprises choose us to upskill their cybersecurity teams with cutting-edge training programs.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8 font-semibold">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {corporateClients.map((client, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/8">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center">
                    <img src={client.logo} alt="Client Logo" className="h-30 w-30 object-contain mb-4" />

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Why Choose Us */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Why Top Companies Choose Us
              </h3>
              <p className="text-muted-foreground">
                We've trained over 200+ enterprise security teams, helping them stay ahead of evolving cyber threats with practical, hands-on training.
              </p>
            </div>

            <div className="space-y-4">
              {trainingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Teams Trained</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">5000+</div>
                <div className="text-sm text-muted-foreground">Professionals</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Training Programs */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Our Corporate Programs</h3>
            {trainingPrograms.map((program, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {program.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-lg">{program.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {program.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        

               
      </div>
    </section>
  );
};

export default CorporateTraining;
