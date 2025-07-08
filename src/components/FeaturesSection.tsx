import { Users, ClipboardCheck, Wrench, AlertCircle, Clock, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Mão de Obra",
    description: "Controle presença, absenteísmo e produtividade por equipe. Gere relatórios automáticos de homem/hora e controle o efetivo de subcontratadas."
  },
  {
    icon: ClipboardCheck,
    title: "Atividades Produtivas",
    description: "Integre o cronograma e a EAP da obra. Acompanhe o avanço físico e tome decisões com base em informações padronizadas do \"planejado vs. realizado\"."
  },
  {
    icon: Wrench,
    title: "Equipamentos",
    description: "Registre o uso de equipamentos em RDO, controle a mobilização e desmobilização e gere inventários, histogramas e relatórios de uso."
  },
  {
    icon: AlertCircle,
    title: "Ocorrências e Fatos Relevantes",
    description: "Crie um fluxo de informações padronizado, controlando réplicas e tréplicas com registros fotográficos e de arquivos. Localize qualquer evento rapidamente."
  },
  {
    icon: Clock,
    title: "Paralisações e Interferências",
    description: "Registre horas paradas e cruze interferências com equipes e atividades para mensurar o impacto real na produção, custos e prazos."
  },
  {
    icon: Cloud,
    title: "Clima",
    description: "Registre dados de pluviometria, vento e temperatura de forma semiautomática e compare com a média histórica da região."
  },
  {
    icon: Shield,
    title: "Acidentes",
    description: "Faça o registro de acidentes com e sem afastamento, anexe a CAT e componha o quadro de indicadores de segurança da obra."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Principais Recursos para uma Gestão de Obras Eficiente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
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
      </div>
    </section>
  );
};