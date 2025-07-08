import { CheckCircle, BarChart3, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const differentials = [
  {
    icon: CheckCircle,
    title: "Padronização",
    description: "Informações coletadas de forma padronizada e registradas em RDO aderente à resolução 1094/CONFEA."
  },
  {
    icon: BarChart3,
    title: "Acompanhamento",
    description: "Dashboards, indicadores e gráficos gerados automaticamente a partir dos apontamentos de campo."
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    description: "Canal online interativo entre Obra, Fiscalização e Cliente para antecipar problemas e tomar decisões assertivas."
  }
];

export const DifferentialsSection = () => {
  return (
    <section className="w-full py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
          Diferenciais que Colocam sua Obra em Outro Nível
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className={`text-center border-border bg-background hover:shadow-lg transition-shadow hover-lift animate-scale-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <differential.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{differential.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  {differential.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};