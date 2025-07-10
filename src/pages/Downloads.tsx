import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Shield, Cog, FileCheck, BookOpen, Globe } from "lucide-react";

const downloads = [
  {
    id: 1,
    title: "Apresentação Empresa",
    description: "Conheça mais sobre a empresa, como nós trabalhamos e os diferenciais da Webdutos.",
    type: "PDF",
    size: "2.5 MB",
    icon: FileText,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: true
  },
  {
    id: 2,
    title: "Plataforma RDOWEB",
    description: "Baixe a nossa apresentação para entender mais como o RDOWEB funciona e as informações que ele processa.",
    type: "PDF",
    size: "3.2 MB",
    icon: Cog,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: true
  },
  {
    id: 3,
    title: "Apresentação Segurança",
    description: "Este documento detalha as práticas de segurança adotadas pela Webdutos no RDOWEB, visando proteger as informações de clientes.",
    type: "PDF",
    size: "1.8 MB",
    icon: Shield,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  },
  {
    id: 4,
    title: "Recursos da plataforma",
    description: "Saiba mais sobre os recursos controlados pelo RDOWEB e como eles funcionam.",
    type: "PDF",
    size: "2.1 MB",
    icon: Cog,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  },
  {
    id: 5,
    title: "Modelos de formulários",
    description: "Veja modelos de formulários disponibilizados em nossos softwares, aderentes à resolução 1.094 do CONFEA.",
    type: "PDF",
    size: "4.5 MB",
    icon: FileCheck,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  },
  {
    id: 6,
    title: "Manual de Operação RDOWEB - Versão em português",
    description: "Versão em português do manual instrucional do RDOWEB, utilizado por nossos clientes para facilitar o uso do software.",
    type: "PDF",
    size: "15.7 MB",
    icon: BookOpen,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  },
  {
    id: 7,
    title: "Manual de Operação RDOWEB - Versão em inglês",
    description: "Versão em inglês do manual instrucional do RDOWEB, utilizado por nossos clientes para facilitar o uso do software.",
    type: "PDF",
    size: "15.7 MB",
    icon: Globe,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  },
  {
    id: 8,
    title: "Manual de Operação RDOWEB - Versão em espanhol",
    description: "Versão em espanhol do manual instrucional do RDOWEB, utilizado por nossos clientes para facilitar o uso do software.",
    type: "PDF",
    size: "15.7 MB",
    icon: Globe,
    image: "/lovable-uploads/0c827eb5-eac0-4e5f-94f5-6e1de9d395cd.png",
    featured: false
  }
];

const Downloads = () => {
  const featuredDownloads = downloads.filter(item => item.featured);
  const regularDownloads = downloads.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <Download className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient">Downloads Webdutos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Apresentações e arquivos PDF sobre a empresa e nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      {featuredDownloads.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Downloads em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredDownloads.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.id} className="hover:shadow-xl transition-all duration-300 group border-2 border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary">{item.type}</Badge>
                          <span className="text-sm text-muted-foreground">{item.size}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2" size="lg">
                        <Download className="w-4 h-4" />
                        Baixar Arquivo
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Downloads */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {featuredDownloads.length > 0 && (
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Todos os Downloads
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularDownloads.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                        <span className="text-xs text-muted-foreground">{item.size}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full gap-2" size="sm">
                      <Download className="w-4 h-4" />
                      Baixar
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de mais informações?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para receber materiais personalizados ou esclarecer dúvidas específicas
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Falar com Consultor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;