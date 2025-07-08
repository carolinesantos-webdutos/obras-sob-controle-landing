import { CreditCard, Globe, Headphones, Smile } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    icon: CreditCard,
    title: "Licença Flexível",
    description: "Tarifado por obra ativa. Obras concluídas não são cobradas e ficam disponíveis para consulta."
  },
  {
    icon: Globe,
    title: "Acesso Universal",
    description: "Acesse suas obras de qualquer lugar e a qualquer hora. Basta um navegador de internet, sem instalar programas."
  },
  {
    icon: Headphones,
    title: "Suporte Técnico de Verdade",
    description: "Fale com técnicos da área por telefone, chat ou e-mail, sem custos adicionais."
  },
  {
    icon: Smile,
    title: "Amigável e Simples de Usar",
    description: "Telas objetivas e curva de aprendizado suave para toda a equipe."
  }
];

export const AdvantagesSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Uma Plataforma Pensada para Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};