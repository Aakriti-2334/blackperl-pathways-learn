import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  AlertTriangle, 
  Search, 
  Shield, 
  Zap,
  Settings,
  Users,
  BookOpen,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Award,
  Briefcase
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import archan from "@/assets/legends/archan.jpg";
import rajshekhar from "@/assets/legends/rajshkhar.jpg";
import arpit from "@/assets/legends/arpit.jpg";
import souvik from "@/assets/legends/souvik.jpg";

// Curriculum Data
const curriculumStages = [
  {
    stage: "Stage 1",
    title: "Detection & Monitoring",
    description: "Master SIEM tools, log analysis, and continuous monitoring techniques to identify threats in real-time.",
    icon: Monitor,
    color: "cyber-green",
    skills: ["SIEM Management", "Log Analysis", "Network Monitoring", "Threat Detection"],
    courses: ["SOC Analyst Path", "Security Operations"]
  },
  {
    stage: "Stage 2", 
    title: "Incident Response",
    description: "Learn to rapidly respond to security incidents, contain threats, and minimize business impact.",
    icon: AlertTriangle,
    color: "cyber-red",
    skills: ["Incident Handling", "Forensics", "Containment", "Recovery Planning"],
    courses: ["DFIR Analyst Path", "Incident Response"]
  },
  {
    stage: "Stage 3",
    title: "Threat Analysis",
    description: "Develop skills to analyze and understand cyber threats, attack patterns, and adversary tactics.",
    icon: Search,
    color: "cyber-blue",
    skills: ["Threat Intelligence", "IOC Analysis", "Attack Patterns", "MITRE ATT&CK"],
    courses: ["Threat Hunter Path", "Cyber Intelligence"]
  },
  {
    stage: "Stage 4",
    title: "Vulnerability Management", 
    description: "Identify, assess, and remediate security vulnerabilities across enterprise environments.",
    icon: Shield,
    color: "cyber-yellow",
    skills: ["Vulnerability Assessment", "Risk Scoring", "Patch Management", "Compliance"],
    courses: ["Vulnerability Management", "Risk Assessment"]
  },
  {
    stage: "Stage 5",
    title: "Security Architecture",
    description: "Design secure systems and implement defense-in-depth strategies for robust protection.",
    icon: Settings,
    color: "cyber-green",
    skills: ["Secure Design", "Zero Trust", "Network Segmentation", "Security Controls"],
    courses: ["Security Architecture", "Cloud Security"]
  },
  {
    stage: "Stage 6", 
    title: "Automation & Orchestration",
    description: "Automate security processes and orchestrate incident response workflows for efficiency.",
    icon: Zap,
    color: "cyber-blue",
    skills: ["SOAR Platforms", "Security Automation", "Playbook Development", "API Integration"],
    courses: ["Security Automation", "SOAR Implementation"]
  },
  {
    stage: "Stage 7",
    title: "Threat Hunting",
    description: "Proactively hunt for advanced threats and unknown attacks hiding in your environment.",
    icon: Search,
    color: "cyber-red",
    skills: ["Hunting Methodologies", "Behavioral Analysis", "Advanced Analytics", "Threat Modeling"],
    courses: ["Advanced Threat Hunting", "Behavioral Analytics"]
  }
];

// Mentors Data
const mentors = [
  {
    name: "Archan Choudhary",
    title: "Founder & CEO Blackperld DFIR",
    experience: "18+ Years",
    specialization: "DFIR & Threat Intelligence",
    achievements: [
      "Led SOC teams at Fortune 500 companies",
      "Trained 5000+ security professionals"
    ],
    image: archan
  },
  {
    name: "Rajshekar Vijay",
    title: "CTO Blackperl DFIR",
    experience: "15+ Years",
    specialization: "Malware Analysis & Reverse Engineering",
    achievements: [
      "Discovered 50+ zero-day vulnerabilities",
      "Developed advanced malware detection systems"
    ],
    image: rajshekhar
  },
  {
    name: "Arpit Kumar",
    title: "Sr. Security Engineer",
    experience: "5+ Years",
    specialization: "Incident Response & Cloud Security",
    achievements: [
      "Built IR frameworks for global enterprises",
      "Handled 500+ security incidents"
    ],
    image: arpit
  },
  {
    name: "Souvik Biswas",
    title: "Program Manager",
    experience: "8+ Years",
    specialization: "Threat Hunting & Security Operations",
    achievements: [
      "Designed threat hunting programs for MNCs",
      "Mentored 3000+ SOC analysts"
    ],
    image: souvik

  }
  
];

const CurriculumSection = () => {
  return (
    <div>
      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full animate-pulse-cyber" />
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-pulse-cyber" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-cyber-yellow/30 rounded-full animate-pulse-cyber" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              COMPREHENSIVE CURRICULUM
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cyber-blue">7 Blue Team Stages</span>
              <br />
              You'll Master With This Bundle
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our comprehensive training covers every aspect of blue team operations, from detection to response, 
              ensuring you're ready for any cybersecurity challenge in today's threat landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumStages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card group relative overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className={`text-${stage.color} border-${stage.color}/30`}>
                        {stage.stage}
                      </Badge>
                      <div className={`p-2 rounded-lg bg-${stage.color}/20 border border-${stage.color}/30 group-hover:shadow-cyber transition-all duration-300`}>
                        <IconComponent className={`w-5 h-5 text-${stage.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyber-green" />
                        Key Skills:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        Courses:
                      </h4>
                      <div className="space-y-1">
                        {stage.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-xs mr-1 mb-1">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  {index < curriculumStages.length - 1 && index !== 3 && (
                    <>
                      <div className="absolute z-20 hidden lg:flex items-center justify-center top-1/2 right-0 transform translate-x-[75%] -translate-y-1/2">
                        <ChevronRight className="w-12 h-12 text-primary/70" />
                      </div>
                      <div className="absolute z-20 flex lg:hidden items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[75%]">
                        <ChevronDown className="w-12 h-12 text-primary/70" />
                      </div>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Master All <span className="text-gradient-primary">7 Stages</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get access to our complete blue team curriculum and transform your cybersecurity career in just 12 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-green mb-1">₹3,999</div>
                  <div className="text-sm text-muted-foreground line-through">Regular: ₹25,000</div>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-cyber-red text-white animate-pulse-cyber">
                    Limited Time: Save ₹20,000
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              WORLD-CLASS MENTORS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Learn from <span className="text-gradient-cyber">Industry Legends</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get trained by cybersecurity veterans who've worked at top global companies and have decades of real-world experience.
            </p>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent>
              {mentors.map((mentor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        <p className="text-primary font-semibold">{mentor.title}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-secondary" />
                        <span className="text-secondary font-semibold">{mentor.experience}</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm font-semibold text-center">{mentor.specialization}</p>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-border/50">
                        {mentor.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Combined Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">15,000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-muted-foreground">Industry Practitioners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumSection;
