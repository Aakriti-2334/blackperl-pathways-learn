import HeroSection from "@/components/HeroSection";
import CareerPathsSection from "@/components/CareerPathsSection";
import CurriculumSection from "@/components/CurriculumSection";
import UrgencySection from "@/components/UrgencySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CareerPathsSection />
      <CurriculumSection />
      <UrgencySection />
    </div>
  );
};

export default Index;
