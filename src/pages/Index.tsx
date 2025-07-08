import { NavigationHeader } from "@/components/NavigationHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { AdditionalDifferentialsSection } from "@/components/AdditionalDifferentialsSection";
import { CloudSection } from "@/components/CloudSection";
import { StatsSection } from "@/components/StatsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      <FeaturesSection />
      <DifferentialsSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <AdvantagesSection />
      <AdditionalDifferentialsSection />
      <CloudSection />
      <NewsletterSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
