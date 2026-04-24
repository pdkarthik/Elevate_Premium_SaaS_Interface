import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection, StatsSection, TestimonialSection } from "@/components/sections/Misc";
import { FeatureBentoGrid } from "@/components/sections/FeatureBentoGrid";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden relative">
      <div className="bg-noise" />
      <Navbar />
      <HeroSection />
      <LogosSection />
      <FeatureBentoGrid />
      <StatsSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
