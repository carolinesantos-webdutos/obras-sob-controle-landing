import { Shield, Zap, Globe, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cloudFeatures = [
  {
    icon: Shield,
    title: "Segurança Empresarial",
    description: "Infraestrutura Amazon AWS com os mais altos padrões de segurança, utilizada por governos e sistemas de saúde mundialmente."
  },
  {
    icon: Zap,
    title: "Alta Disponibilidade",
    description: "Capacidade elástica que se adapta à demanda, garantindo performance consistente mesmo em picos de uso."
  },
  {
    icon: Globe,
    title: "Acesso Global",
    description: "Servidores geolocalizados no Brasil para minimizar latência. Acesse de qualquer lugar, a qualquer hora."
  },
  {
    icon: Database,
    title: "Backup Automático",
    description: "Cópias de segurança automáticas para arquivos, aplicação e banco de dados. Seus dados sempre protegidos."
  }
];

export const CloudSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnologia em Nuvem de Ponta
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Utilizamos infraestrutura de ponta (Amazon AWS) para garantir que você tenha acesso às suas obras 
            com máxima segurança, disponibilidade e performance, sem investimentos em TI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cloudFeatures.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Concentre-se no que Faz Melhor
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas como Microsoft, Google e Amazon gastam bilhões em segurança e infraestrutura. 
            Por que reinventar a roda? Concentre seus recursos em engenharia, design e gestão de construção - 
            deixe a tecnologia conosco.
          </p>
        </div>
      </div>
    </section>
  );
};