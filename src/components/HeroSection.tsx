import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Hero = () => {
  const courses = [
    "Complete DFIR Specialist Track",
    "Security Engineering Program",
    "SOC Analyst Certification Path",
    "Cybersecurity Leadership Track",
    "Advanced Threat Hunting Course",
    "Beginner's Fundamentals Course",
    "Malware Analysis Masterclass",
    "3 Exclusive Bonus Modules",
  ];

  const stats = [
    { value: "15K+", label: "Students Trained" },
    { value: "95%", label: "Job Placement Rate" },
    { value: "7", label: "Career Paths" },
  ];

  return (
    <>
      {/* ===== COURSE LIST & PRICE SECTION ===== */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Limited-Time Special Offer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Get the Ultimate{" "}
                <span className="text-[#FFD700]">Cybersecurity Training Suite</span>
                <br />
                at an Unbeatable Price!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Master each critical stage of cybersecurity! Gain the expertise you
                need to assess an organization's security and fortify its systems
                against potential threats.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground line-through text-lg">
                Regular Price: ₹25,000
              </p>
              <p className="text-5xl md:text-6xl font-bold text-[#FFD700]">
                Limited-Time Offer: ₹3,999
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-[#FFD700] flex-shrink-0" size={20} />
                  <span className="text-foreground">{course}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="https://pages.razorpay.com/pl_RMZkRoZfZgDOtF/view" target="_blank" rel="noopener noreferrer">
  <Button variant="hero" size="lg" className="text-lg px-8">
    Buy All 10+ Courses (Get 2 Bonuses)
  </Button>
</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMOTIONAL CARD SECTION ===== */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-16">
          <Card className="p-8 md:p-12 space-y-6 bg-card/80 backdrop-blur border-border shadow-2xl">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Take your cybersecurity skills to the next level and achieve your
                learning goals with our{" "}
                <span className="text-[#FFD700]">limited-time special offer</span>.
              </h2>

              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                BlackPerl Academy brings to you the Ultimate Cybersecurity Training
                Suite, the ideal choice for dedicated learners like you. Immerse
                yourself in each critical stage of cybersecurity and unlock a wealth
                of knowledge, practical techniques, and hands-on experience,
                allowing you to thrive in the ever-evolving field of cybersecurity.
              </p>

              <div className="space-y-4 py-6">
                <p className="text-xl">
                  For a limited time, this{" "}
                  <span className="font-bold text-[#FFD700]">
                    Cybersecurity Training Suite is available at the unbeatable price
                    of just ₹3,999
                  </span>{" "}
                  (originally priced ₹25,000). Plus, you get{" "}
                  <span className="font-bold text-[#FFD700]">two free bonuses</span>.
                </p>

                <p className="text-lg text-muted-foreground">
                  However, if you prefer to focus on specific skills,{" "}
                  <span className="font-semibold text-foreground">
                    individual courses can be purchased for just ₹1,119 each
                  </span>
                  .
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xl mb-8">
                  With the{" "}
                  <span className="font-bold text-[#FFD700]">
                    Ultimate Cybersecurity Training Suite
                  </span>
                  , you can continue setting ambitious goals, charting a path of
                  career growth, and achieving remarkable results.
                </p>

                <a href="https://pages.razorpay.com/pl_RMZkRoZfZgDOtF/view" target="_blank" rel="noopener noreferrer">
  <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
    Get This Offer While It Lasts
  </Button>
</a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Hero;
