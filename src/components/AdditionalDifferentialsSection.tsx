import { UserCheck, Eye, Bell, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const additionalDifferentials = [
  {
    icon: UserCheck,
    title: "Amigável e Simples de Usar",
    description: "A curva de aprendizado do RDOWEB é suave, com telas objetivas e simples de operar para toda a equipe."
  },
  {
    icon: Lock,
    title: "Controle por Nível de Acesso",
    description: "O RDOWEB restringe o acesso à informação de acordo com o nível de acesso de cada usuário, garantindo segurança."
  },
  {
    icon: Bell,
    title: "Gatilhos de Eventos",
    description: "Envio de relatórios por email de forma automática e configurável pelo Administrador para manter todos informados."
  },
  {
    icon: Eye,
    title: "Você é Dono das Informações",
    description: "Obras encerradas continuam disponíveis na plataforma para acesso em modo somente leitura a qualquer tempo."
  }
];

export const AdditionalDifferentialsSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Mais Diferenciais que Fazem a Diferença
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Recursos adicionais pensados para otimizar sua experiência e garantir total controle
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalDifferentials.map((differential, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <differential.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{differential.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
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