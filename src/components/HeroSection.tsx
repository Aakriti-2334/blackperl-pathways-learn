import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";
import { ArrowRight, Shield, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Animated overlay patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6 animate-pulse-cyber flex items-center">
          <Shield className="w-4 h-4 mr-2" />
          RECESSION-PROOF YOUR CAREER
        </Badge>

        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Master{" "}
          <span className="text-gradient-primary">Cybersecurity</span>
          <br />
          Skills That{" "}
          <span className="text-cyber-yellow">Matter</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
          While AI eliminates jobs, cybersecurity creates them. Join 15K+ professionals who've landed 
          <span className="text-cyber-green font-semibold"> 3x salary jobs</span> through our 
          expert-led training programs and real-world labs.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div>
            <div className="text-3xl font-bold text-cyber-green flex items-center justify-center">
              <TrendingUp className="w-8 h-8 mr-2" />
              3x
            </div>
            <div className="text-sm text-muted-foreground text-center">Salary Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyber-blue text-center">15K+</div>
            <div className="text-sm text-muted-foreground text-center">Students Trained</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyber-yellow text-center">95%</div>
            <div className="text-sm text-muted-foreground text-center">Job Placement Rate</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 animate-glow">
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Target className="mr-2 w-5 h-5" />
            Explore Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
