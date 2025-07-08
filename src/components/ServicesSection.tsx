import { Settings, Users2, Puzzle, FileText, GraduationCap, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Settings,
    title: "Implantações",
    description: "Instalação da plataforma e das bibliotecas necessárias para acesso pela rede de computadores, maximizando vida útil e diminuindo manutenção."
  },
  {
    icon: Users2,
    title: "Personalizações",
    description: "Atendemos necessidades específicas de cada empreendimento. Solicitações de melhorias e novas funcionalidades são bem-vindas!"
  },
  {
    icon: Puzzle,
    title: "Integração",
    description: "Softwares modulares que funcionam de forma integrada ou separada, operados através de navegador, reduzindo custos de TI."
  },
  {
    icon: FileText,
    title: "Licenciamento",
    description: "Modelo sem limite de usuários. Para cada obra é gerado um usuário administrador multiplicador. Valor refere-se à plataforma e uma obra."
  },
  {
    icon: GraduationCap,
    title: "Treinamento e Suporte",
    description: "Suporte contínuo desde ajustes até treinamentos presenciais e workshops. Treinamento via internet através de suporte remoto."
  },
  {
    icon: Database,
    title: "Databook",
    description: "Ao final do contrato, emitimos databook com todas as informações em arquivos independentes, PDF e planilhas MS-Excel."
  },
  {
    icon: Cloud,
    title: "Infraestrutura em Nuvem",
    description: "Utilizamos infraestrutura Amazon AWS no Brasil para alta disponibilidade, capacidade elástica e backups automáticos."
  }
];

export const ServicesSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nossos Serviços Completos
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Oferecemos soluções completas desde a implantação até o suporte contínuo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};