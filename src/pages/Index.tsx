import HeroSection from "@/components/HeroSection";
import CareerPathsSection from "@/components/CareerPathsSection";
import StatsSection from "@/components/StatsSection";
import CurriculumSection from "@/components/CurriculumSection";
import UrgencySection from "@/components/UrgencySection";
import SuccessStories from "@/components/SuccessStories";
import CorporateTraining from "@/components/CorporateTraining";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <CareerPathsSection />
      <CurriculumSection />
      <SuccessStories />
      <CorporateTraining />
      <UrgencySection />
      <FAQSection />
    </div>
  );
};

export default Index;
