import { TrendingUp, Users, Building, Award } from "lucide-react";

const stats = [
  {
    icon: Building,
    number: "500+",
    label: "Obras Gerenciadas",
    description: "Projetos de construção de todos os portes"
  },
  {
    icon: Users,
    number: "10K+",
    label: "Usuários Ativos",
    description: "Profissionais usando a plataforma diariamente"
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Satisfação",
    description: "Dos clientes recomendam nossos serviços"
  },
  {
    icon: Award,
    number: "15+",
    label: "Anos de Experiência",
    description: "Desenvolvendo soluções para construção civil"
  }
];

export const StatsSection = () => {
  return (
    <section className="w-full py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Números que Comprovam nossa <span className="text-gradient">Excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de profissionais confiam na nossa plataforma para gestão de obras
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`text-center animate-bounce-in`} 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};