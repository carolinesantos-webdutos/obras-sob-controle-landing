import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { AdditionalDifferentialsSection } from "@/components/AdditionalDifferentialsSection";
import { CloudSection } from "@/components/CloudSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DifferentialsSection />
      <ServicesSection />
      <TestimonialsSection />
      <AdvantagesSection />
      <AdditionalDifferentialsSection />
      <CloudSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
