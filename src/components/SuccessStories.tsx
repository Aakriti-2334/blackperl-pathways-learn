import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2 } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const successStories = [
  {
    name: "Rama Rao Jakkula",
    previousRole: "Quest Global",
    currentRole: "Senior Analyst",
    currentCompany: "CLOUD4C",
    testimonial:
      "BlackPerl DFIR's SOC training completely transformed my career. The hands-on labs and real-world scenarios prepared me perfectly for my job.",
    image: "👨‍💻",
    timeline: "6 months",
  },
  {
    name: "Girish",
    previousRole: "1x Salary Pay",
    currentRole: "Associate Cyber Threat Management",
    currentCompany: "2x Salary Hike",
    testimonial:
      "From campus to Google in 8 months! The DFIR path gave me enterprise-level skills that big companies actually look for. The placement support was incredible.",
    image: "👩‍💼",
    timeline: "6 months",
  },
  {
    name: "Aditya",
    previousRole: "IT Support Engineer",
    currentRole: "SOC Analyst L2",
    currentCompany: "Accenture",
    testimonial:
      "The structured learning path and mentorship helped me crack Accenture's tough security interviews. The ROI on this course is unmatched!",
    image: "🧑‍🔬",
    timeline: "6 months",
  },
   {
    name: "Rama Rao Jakkula",
    previousRole: "Quest Global",
    currentRole: "Senior Analyst",
    currentCompany: "CLOUD4C",
    testimonial:
      "BlackPerl DFIR's SOC training completely transformed my career. The hands-on labs and real-world scenarios prepared me perfectly for my job.",
    image: "👨‍💻",
    timeline: "6 months",
  },
  {
    name: "Girish",
    previousRole: "1x Salary Pay",
    currentRole: "Associate Cyber Threat Management",
    currentCompany: "2x Salary Hike",
    testimonial:
      "From campus to Google in 8 months! The DFIR path gave me enterprise-level skills that big companies actually look for. The placement support was incredible.",
    image: "👩‍💼",
    timeline: "6 months",
  },
  {
    name: "Aditya",
    previousRole: "IT Support Engineer",
    currentRole: "SOC Analyst L2",
    currentCompany: "Accenture",
    testimonial:
      "The structured learning path and mentorship helped me crack Accenture's tough security interviews. The ROI on this course is unmatched!",
    image: "🧑‍🔬",
    timeline: "6 months",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-secondary border-secondary">
            CAREER TRANSFORMATIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            From Ordinary Jobs to{" "}
            <span className="text-gradient-cyber">Dream Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real stories, real career transformations. See how our students landed jobs at the world's top companies.
          </p>
        </div>

        {/* Success Stories Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full mb-12"
        >
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6 space-y-4">

                    {/* Profile */}
                    <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        {story.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{story.name}</h4>
                      </div>
                    </div>

                    {/* Career Journey */}
                    <div className="space-y-3">
                      {/* BEFORE */}
                      <div className="bg-muted/30 rounded-lg p-3 space-y-1">
                        <p className="text-xs text-muted-foreground font-semibold">
                          BEFORE
                        </p>
                        <p className="text-sm font-medium">{story.previousRole}</p>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-secondary" />
                      </div>

                      {/* AFTER */}
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 space-y-1">
                        <p className="text-xs text-primary font-semibold">
                          AFTER {story.timeline}
                        </p>
                        <p className="text-sm font-bold">{story.currentRole}</p>
                        <div className="flex items-center gap-2 text-primary">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm font-semibold">
                            {story.currentCompany}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <p className="text-sm text-muted-foreground italic leading-relaxed pt-2">
                      "{story.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows for manual scroll */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5x</div>
            <div className="text-muted-foreground">Average Salary Jump</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-secondary">6-10</div>
            <div className="text-muted-foreground">Months to Transform</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">100+</div>
            <div className="text-muted-foreground">Companies Hiring Our Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">₹18L</div>
            <div className="text-muted-foreground">Average Package</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
