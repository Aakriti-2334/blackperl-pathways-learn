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
  ChevronDown
} from "lucide-react";

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
  },
  // {
  //   stage: "Stage 8",
  //   title: "Leadership & Strategy",
  //   description: "Lead cybersecurity teams, develop security strategy, and communicate risks to executives.",
  //   icon: Users,
  //   color: "cyber-yellow",
  //   skills: ["Team Leadership", "Risk Management", "Executive Communication", "Strategic Planning"],
  //   courses: ["Cybersecurity Leadership", "Risk Management"]
  // }
];

const CurriculumSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
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
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card group relative overflow-visible"
              >
                {/* Animated border glow */}
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
                  
                  {/* Key Skills */}
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
                  
                  {/* Related Courses */}
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

                {/* Arrow for continuity (conditionally rendered) */}
                {index < curriculumStages.length - 1 && index !== 3 && (
                  <>
                    {/* Horizontal arrow for desktop (lg screens) */}
                    <div className="absolute z-20 hidden lg:flex items-center justify-center top-1/2 right-0 transform translate-x-[75%] -translate-y-1/2">
                      <ChevronRight className="w-12 h-12 text-primary/70" />
                    </div>
                    {/* Vertical arrow for mobile/tablet (up to md screens) */}
                    <div className="absolute z-20 flex lg:hidden items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[75%]">
                      <ChevronDown className="w-12 h-12 text-primary/70" />
                    </div>
                  </>
                )}
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
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
  );
};

export default CurriculumSection;
