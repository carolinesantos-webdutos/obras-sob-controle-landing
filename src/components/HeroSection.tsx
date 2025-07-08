import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          RDOWEB: <span className="text-primary">Obras Sob Controle</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Transforme apontamentos de campo em indicadores de performance. Crie Relatórios Diários de Obras (RDO) digitais, com validade jurídica, e estabeleça um canal de comunicação seguro entre construtora, gerenciadora e cliente final.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
          onClick={scrollToForm}
        >
          Solicite uma Demonstração
        </Button>
      </div>
    </section>
  );
};