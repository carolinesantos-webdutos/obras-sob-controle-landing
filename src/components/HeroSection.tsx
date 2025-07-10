import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/2fb80ba8-378d-40fe-9076-bb55c2038b21.png" 
                alt="RDOWEB Logo" 
                className="w-16 h-16 mr-4 animate-fade-in"
              />
              <img 
                src="/lovable-uploads/311ce9c6-c398-434f-a0f0-ecdc60266847.png" 
                alt="RDOWEB Text" 
                className="h-12 animate-fade-in"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              <span className="text-gradient">Obras Sob Controle</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl lg:max-w-none mb-8 leading-relaxed animate-slide-up">
              Transforme apontamentos de campo em indicadores de performance. Crie Relatórios Diários de Obras (RDO) digitais, com validade jurídica, e estabeleça um canal de comunicação seguro entre construtora, gerenciadora e cliente final.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-bounce-in hover-lift"
              onClick={scrollToForm}
            >
              Solicite uma Demonstração
            </Button>
            
            {/* Construction Icons */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8 opacity-60">
              <img src="/lovable-uploads/f361d869-299d-4489-adb6-db28f6b7b436.png" alt="Icon 1" className="w-8 h-8 animate-fade-in" />
              <img src="/lovable-uploads/dcb886fe-e11b-488c-a579-f170cdbcc779.png" alt="Icon 2" className="w-8 h-8 animate-fade-in" />
              <img src="/lovable-uploads/eea99676-ef82-47c2-8653-c28b91be99f3.png" alt="Icon 3" className="w-8 h-8 animate-fade-in" />
              <img src="/lovable-uploads/216e73cb-674f-4df1-99ea-fa96d5d96032.png" alt="Icon 4" className="w-8 h-8 animate-fade-in" />
              <img src="/lovable-uploads/689ffef6-7073-4634-930f-cefc03370a6e.png" alt="Icon 5" className="w-8 h-8 animate-fade-in" />
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Mobile App Mockup */}
            <div className="relative z-10 animate-scale-in">
              <img 
                src="/lovable-uploads/a67abd50-9089-4e94-a647-ffe0d9a31259.png" 
                alt="RDOWEB Mobile App" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Background Construction Images */}
            <div className="absolute inset-0 opacity-20 -z-10">
              <img 
                src="/lovable-uploads/38f224c0-5630-4b3a-a1ff-858bd4332b89.png" 
                alt="Construction Background" 
                className="absolute top-0 right-0 w-32 h-32 object-cover rounded-lg animate-fade-in"
              />
              <img 
                src="/lovable-uploads/44cb990f-949d-43a5-bb43-47e779d0bb71.png" 
                alt="Aerial Construction" 
                className="absolute bottom-0 left-0 w-32 h-32 object-cover rounded-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};