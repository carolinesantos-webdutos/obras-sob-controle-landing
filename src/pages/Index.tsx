import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DifferentialsSection />
      <AdvantagesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
