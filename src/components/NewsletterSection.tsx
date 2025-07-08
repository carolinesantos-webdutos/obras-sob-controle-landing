import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Bell, Zap } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="w-full py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">FIQUE POR DENTRO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Receba as Últimas <span className="text-gradient">Novidades</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Insights sobre gestão de obras, atualizações da plataforma, 
                casos de sucesso e tendências da construção civil direto no seu e-mail.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Artigos técnicos exclusivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Novidades e atualizações da plataforma</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Casos de sucesso de outros clientes</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <div className="text-center mb-6">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Newsletter RDOWEB
                  </h3>
                  <p className="text-muted-foreground">
                    Conteúdo semanal direto na sua caixa de entrada
                  </p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Seu nome completo"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Empresa (opcional)"
                      className="h-12"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg hover-lift">
                    <Mail className="w-5 h-5 mr-2" />
                    Assinar Newsletter Gratuita
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Sem spam. Cancele a qualquer momento.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};