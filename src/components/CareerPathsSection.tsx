import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Search, 
  Target, 
  Eye, 
  Users, 
  Lock,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";

const careerPaths = [
  {
    id: 1,
    level: "Beginner",
    title: "Security Operations Center (SOC)",
    subtitle: "Become a cybersecurity analyst protecting organizations 24/7",
    duration: "4-6 months",
    icon: Shield,
    color: "cyber-green",
    careers: [
      "SOC Analyst L1/L2/L3",
      "Security Analyst",
      "Threat Detection Specialist"
    ],
    skills: ["SIEM Tools", "Log Analysis", "Threat Detection", "Incident Response"],
    description: "Master the foundational skills of cybersecurity operations and become the first line of defense against cyber threats."
  },
  {
    id: 2,
    level: "Intermediate", 
    title: "Digital Forensics & Incident Response (DFIR)",
    subtitle: "Master the art of digital investigation and cyber incident response",
    duration: "6-8 months",
    icon: Search,
    color: "cyber-blue",
    careers: [
      "Digital Forensics Analyst",
      "Incident Response Specialist", 
      "Malware Analyst"
    ],
    skills: ["Memory Analysis", "Network Forensics", "Malware Analysis", "Timeline Analysis"],
    description: "Become a digital detective who can investigate cybercrimes and respond to security incidents effectively."
  },
  {
    id: 3,
    level: "Advanced",
    title: "Certified Threat Hunter (CTH)",
    subtitle: "Proactively hunt for advanced persistent threats",
    duration: "8-12 months", 
    icon: Target,
    color: "cyber-yellow",
    careers: [
      "Threat Hunter",
      "Senior Security Analyst",
      "Cyber Threat Intelligence Analyst"
    ],
    skills: ["Threat Intelligence", "Behavioral Analysis", "IOC Development", "Hunting Methodologies"],
    description: "Develop elite skills to proactively seek out hidden threats and advanced attackers in enterprise networks."
  },
  {
    id: 4,
    level: "Expert",
    title: "Penetration Testing & Red Team",
    subtitle: "Think like a hacker to defend better",
    duration: "10-14 months",
    icon: Eye,
    color: "cyber-red",
    careers: [
      "Penetration Tester",
      "Red Team Operator",
      "Security Consultant"
    ],
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Social Engineering", "Red Team Tactics"],
    description: "Learn to think like an attacker to better defend your organization's critical assets and infrastructure."
  },
  {
    id: 6,
    level: "Specialist",
    title: "Cloud Security Engineering",
    subtitle: "Secure cloud infrastructure and applications",
    duration: "8-10 months",
    icon: Lock,
    color: "cyber-blue", 
    careers: [
      "Cloud Security Architect",
      "DevSecOps Engineer",
      "Cloud Security Analyst"
    ],
    skills: ["AWS/Azure Security", "Container Security", "Infrastructure as Code", "Zero Trust"],
    description: "Master cloud security technologies to protect modern distributed applications and infrastructure."
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-cyber-green/20 text-cyber-green border-cyber-green/30";
    case "Intermediate": return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30";
    case "Advanced": return "bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/30";
    case "Expert": return "bg-cyber-red/20 text-cyber-red border-cyber-red/30";
    case "Leadership": return "bg-primary/20 text-primary border-primary/30";
    case "Specialist": return "bg-accent/20 text-accent border-accent/30";
    default: return "bg-muted/20 text-muted-foreground border-muted/30";
  }
};

const CareerPathsSection = () => {
  return (
    <section className="py-20 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            CAREER PATHS
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient-primary">Cybersecurity Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner to expert, we have specialized training programs designed to launch your career 
            in the most in-demand cybersecurity roles with proven 95% job placement rates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path) => {
            const IconComponent = path.icon;
            return (
              <Card key={path.id} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${path.color}/20 border border-${path.color}/30`}>
                      <IconComponent className={`w-6 h-6 text-${path.color}`} />
                    </div>
                    <Badge variant="outline" className={getLevelColor(path.level)}>
                      {path.level}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {path.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{path.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {path.description}
                    </p>
                    
                    {/* Career Opportunities */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyber-green" />
                        Career Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {path.careers.map((career, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Key Skills */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full group-hover:shadow-cyber transition-all duration-300 mt-4" variant="outline">
                    Buy Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-cyber transition-all duration-300">
            Join All Career Paths <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerPathsSection;
