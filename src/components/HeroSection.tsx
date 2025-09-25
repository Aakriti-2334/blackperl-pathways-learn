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
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 animate-pulse-cyber">
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
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              While AI eliminates jobs, cybersecurity creates them. Join 15K+ professionals who've landed 
              <span className="text-cyber-green font-semibold"> 3x salary jobs</span> through our 
              expert-led training programs and real-world labs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-green flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 mr-2" />
                  3x
                </div>
                <div className="text-sm text-muted-foreground">Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue">15K+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-yellow">95%</div>
                <div className="text-sm text-muted-foreground">Job Placement Rate</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-cyber transition-all duration-300 animate-glow">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Target className="mr-2 w-5 h-5" />
                Explore Paths
              </Button>
            </div>
          </div>
          
          {/* Right Content - Lead Form */}
          <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card animate-float">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cyber-green mb-2">Start Your Cybersecurity Career</h3>
              <p className="text-muted-foreground">Get exclusive access to our career roadmap and salary negotiation guide</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Experience Level</label>
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                  <option>Select your experience level</option>
                  <option>Complete Beginner</option>
                  <option>Some IT Experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-cyber transition-all duration-300 py-3">
                Get Free Career Guide Now →
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                * All fields are required. We respect your privacy and never share your data.
              </p>
            </form>
            
            {/* Company Logos */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-3">Trusted by professionals at:</p>
              <div className="flex justify-center items-center gap-6 opacity-60">
                <span className="text-sm font-semibold">Microsoft</span>
                <span className="text-sm font-semibold">IBM</span>
                <span className="text-sm font-semibold">Cisco</span>
                <span className="text-sm font-semibold">Accenture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;