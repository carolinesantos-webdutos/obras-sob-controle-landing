import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "O que é o RDOWEB?",
    answer: "O RDOWEB é uma plataforma digital completa para gestão de obras que permite criar Relatórios Diários de Obras (RDO) digitais com validade jurídica, estabelecendo um canal de comunicação seguro entre construtora, gerenciadora e cliente final."
  },
  {
    id: "item-2",
    question: "Como funciona a validade jurídica dos relatórios?",
    answer: "Todos os relatórios gerados pelo RDOWEB possuem certificação digital e timestamp, garantindo a autenticidade e integridade das informações. Os documentos são assinados digitalmente conforme as normas legais brasileiras."
  },
  {
    id: "item-3",
    question: "Posso usar o RDOWEB offline?",
    answer: "Sim, o RDOWEB possui funcionalidades offline que permitem continuar trabalhando mesmo sem conexão com a internet. Os dados são sincronizados automaticamente quando a conexão é reestabelecida."
  },
  {
    id: "item-4",
    question: "Quantos usuários podem acessar simultaneamente?",
    answer: "O número de usuários simultâneos varia conforme o plano contratado. Nossos planos são escaláveis e podem acomodar desde pequenas obras até grandes empreendimentos com centenas de usuários."
  },
  {
    id: "item-5",
    question: "Como é feita a segurança dos dados?",
    answer: "Utilizamos criptografia de ponta a ponta, servidores seguros em nuvem, backup automático e conformidade com a LGPD. Todos os dados são protegidos com os mais altos padrões de segurança da indústria."
  },
  {
    id: "item-6",
    question: "O sistema integra com outros softwares?",
    answer: "Sim, o RDOWEB possui APIs que permitem integração com diversos sistemas como ERPs, softwares de gestão de projetos, sistemas de recursos humanos e outras ferramentas utilizadas na construção civil."
  },
  {
    id: "item-7",
    question: "Há treinamento para usar a plataforma?",
    answer: "Oferecemos treinamento completo para todos os usuários, incluindo materiais didáticos, videoaulas, webinars e suporte técnico especializado durante a implementação."
  },
  {
    id: "item-8",
    question: "Como funciona o suporte técnico?",
    answer: "Nosso suporte técnico está disponível por telefone, email e chat durante horário comercial. Para clientes premium, oferecemos suporte 24/7 e atendimento prioritário."
  },
  {
    id: "item-9",
    question: "Posso customizar os relatórios?",
    answer: "Sim, o RDOWEB permite customização completa dos relatórios conforme as necessidades específicas de cada obra ou empresa. Você pode criar templates personalizados e definir campos específicos."
  },
  {
    id: "item-10",
    question: "O que acontece com os dados se cancelar o serviço?",
    answer: "Garantimos a exportação de todos os seus dados em formatos padrão antes do cancelamento. Mantemos backup dos dados por 90 dias após o cancelamento para eventuais necessidades de recuperação."
  },
  {
    id: "item-11",
    question: "Como é feito o controle de acesso?",
    answer: "O sistema possui controle granular de permissões, permitindo definir diferentes níveis de acesso para cada usuário conforme sua função na obra (engenheiro, técnico, operário, fiscalizador, etc.)."
  },
  {
    id: "item-12",
    question: "O RDOWEB atende às normas do CONFEA?",
    answer: "Sim, todos os relatórios e formulários são totalmente aderentes à resolução 1.094 do CONFEA e outras normas técnicas aplicáveis à engenharia e construção civil."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient">FAQ - Perguntas Frequentes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Encontre respostas para as principais dúvidas sobre o RDOWEB e nossa plataforma de gestão de obras.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa equipe está pronta para ajudar você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ligue para nosso suporte
                </p>
                <Button variant="outline" className="w-full">
                  (11) 9999-9999
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Envie sua dúvida por email
                </p>
                <Button variant="outline" className="w-full">
                  suporte@rdoweb.com.br
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Chat Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Converse conosco agora
                </p>
                <Button className="w-full">
                  Iniciar Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;