import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    objectives: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Em breve entraremos em contato para agendar sua demonstração.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="w-full py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-background shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground">Apresentação Técnica Online</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Preencha os campos abaixo e um de nossos especialistas entrará em contato para agendar o melhor dia e horário.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Corporativo</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone com WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="border-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Cargo ou função</Label>
                  <Select onValueChange={(value) => handleInputChange("position", value)} required>
                    <SelectTrigger className="border-input">
                      <SelectValue placeholder="Selecione seu cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proprietario">Proprietário, sócio ou diretor</SelectItem>
                      <SelectItem value="gerente">Gerente, superintendente ou coordenador</SelectItem>
                      <SelectItem value="engenheiro">Engenheiro ou analista</SelectItem>
                      <SelectItem value="assistente">Assistente ou técnico</SelectItem>
                      <SelectItem value="consultor">Consultor</SelectItem>
                      <SelectItem value="autonomo">Autônomo</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objectives">Quais são os seus objetivos?</Label>
                  <Select onValueChange={(value) => handleInputChange("objectives", value)} required>
                    <SelectTrigger className="border-input">
                      <SelectValue placeholder="Selecione seus objetivos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="melhorar-processos">Melhorar processos e a gestão em minhas obras</SelectItem>
                      <SelectItem value="gestao-anti-pleitos">Gestão anti pleitos</SelectItem>
                      <SelectItem value="gestao-pro-pleito">Implantar uma gestão pró pleito</SelectItem>
                      <SelectItem value="eliminar-papeis">Eliminar papéis ou reduzir impressões</SelectItem>
                      <SelectItem value="controlar-obras">Controlar minhas obras através de processo padronizado</SelectItem>
                      <SelectItem value="memoria-tecnica">Criar memória técnica e retroalimentar meu ciclo PDCA</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Solicitar Demonstração
                </Button>

                <p className="text-center text-muted-foreground text-sm">
                  Você também pode falar conosco pelo telefone{" "}
                  <span className="font-medium">+55 (12) 3413-6082</span> ou enviar um e-mail para{" "}
                  <span className="font-medium">contato@rdoweb.com.br</span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};