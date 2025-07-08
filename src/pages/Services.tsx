import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Palette, 
  Link2, 
  CreditCard, 
  GraduationCap, 
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Users,
  Settings,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Implantações",
    description: "Instalação completa da plataforma e das bibliotecas necessárias para acesso pela rede de computadores. Configuração otimizada do servidor para maximizar vida útil e reduzir manutenção.",
    features: [
      "Configuração completa do servidor",
      "Instalação das bibliotecas necessárias",
      "Otimização para máxima performance",
      "Configuração de rede segura"
    ],
    benefits: "Servidor corretamente configurado, maximizando vida útil e diminuindo necessidade de manutenção"
  },
  {
    icon: Palette,
    title: "Personalizações",
    description: "Nossa filosofia reconhece a necessidade de atender especificidades de cada empreendimento. Solicitações de melhorias e novas funcionalidades são bem-vindas para evoluir nossos programas.",
    features: [
      "Customização de interface",
      "Desenvolvimento de funcionalidades específicas",
      "Adaptação aos processos da empresa",
      "Integração com sistemas existentes"
    ],
    benefits: "Sistema adaptado perfeitamente às necessidades específicas do seu empreendimento"
  },
  {
    icon: Link2,
    title: "Integração",
    description: "Cada software da plataforma Webdutos trabalha de forma modular, funcionando integrado ou separado. Operados através de navegador, reduzindo custos de TI do empreendimento.",
    features: [
      "Arquitetura modular flexível",
      "Integração entre diferentes módulos",
      "Acesso via navegador web",
      "Redução de custos de infraestrutura"
    ],
    benefits: "Máxima flexibilidade com mínimo investimento em infraestrutura de TI"
  },
  {
    icon: CreditCard,
    title: "Licenciamento",
    description: "Modelo de licenciamento sem limite de usuários. Para cada obra é gerado um usuário administrador multiplicador. O valor refere-se ao custo de plataforma e uma obra.",
    features: [
      "Usuários ilimitados",
      "Um administrador por obra",
      "Licença por obra ativa",
      "Sem custos ocultos"
    ],
    benefits: "Flexibilidade total de usuários com custo previsível por obra"
  },
  {
    icon: GraduationCap,
    title: "Treinamento e Suporte",
    description: "Suporte contínuo aos softwares desenvolvidos, desde ajustes até treinamentos presenciais e workshops. Treinamento via internet através de suporte remoto.",
    features: [
      "Treinamento presencial e remoto",
      "Suporte técnico contínuo",
      "Workshops especializados",
      "Material didático completo"
    ],
    benefits: "Equipe capacitada e suporte especializado sempre disponível"
  },
  {
    icon: Database,
    title: "Databook",
    description: "Ao final de cada encerramento de contrato/obra, emissão do databook com todas as informações produzidas, em formato independente da plataforma (PDF e Excel).",
    features: [
      "Relatórios em PDF",
      "Planilhas MS-Excel",
      "Dados independentes da plataforma",
      "Histórico completo da obra"
    ],
    benefits: "Memória técnica completa e portátil para consultas futuras"
  },
  {
    icon: Cloud,
    title: "Infraestrutura em Nuvem",
    description: "Utilizamos infraestrutura de ponta (Amazon AWS) geolocado no Brasil para minimizar latência. Alta disponibilidade, capacidade elástica e backup automático.",
    features: [
      "Amazon AWS Brasil",
      "Alta disponibilidade",
      "Backup automático",
      "Capacidade elástica"
    ],
    benefits: "Máxima confiabilidade e performance com infraestrutura de classe mundial"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Análise de Necessidades",
    description: "Avaliamos suas necessidades específicas e definimos a melhor estratégia de implementação."
  },
  {
    step: "02", 
    title: "Proposta Customizada",
    description: "Criamos uma proposta sob medida com cronograma e investimento detalhados."
  },
  {
    step: "03",
    title: "Implementação",
    description: "Executamos a implementação com acompanhamento técnico especializado."
  },
  {
    step: "04",
    title: "Treinamento",
    description: "Capacitamos sua equipe para aproveitamento máximo da plataforma."
  },
  {
    step: "05",
    title: "Suporte Contínuo",
    description: "Oferecemos suporte técnico contínuo e evolutivo para sua operação."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Soluções completas para implementação, personalização e suporte da plataforma RDOWEB, 
              desde a instalação até o treinamento da sua equipe.
            </p>
            <Button size="lg" className="animate-pulse-glow">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`hover-lift animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recursos Inclusos:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary">
                        {service.benefits}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um processo estruturado para garantir o sucesso da implementação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className={`text-center animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Suporte Técnico Especializado
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Atendimento técnico de verdade, com profissionais da área
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift animate-scale-in">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Técnicos Especialistas</CardTitle>
                <CardDescription>
                  Profissionais com experiência em engenharia e construção civil
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Suporte Completo</CardTitle>
                <CardDescription>
                  Telefone, chat, email e compartilhamento de tela sem custos adicionais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Disponibilidade Garantida</CardTitle>
                <CardDescription>
                  Horário comercial com SLA garantido para resolução de problemas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-bounce-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Transformar sua Gestão de Obras?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato conosco e descubra como nossos serviços podem 
              revolucionar a gestão das suas obras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;