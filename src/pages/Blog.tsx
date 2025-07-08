import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, FileText, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Como Implementar RDO Digital na sua Obra: Guia Completo",
    excerpt: "Descubra como transformar seus relatórios diários de obra em processos digitais eficientes e com validade jurídica.",
    category: "Gestão de Obras",
    date: "2024-01-15",
    readTime: "8 min",
    icon: FileText,
    featured: true
  },
  {
    id: 2,
    title: "5 Indicadores de Performance que Todo Gestor de Obras Precisa Acompanhar",
    excerpt: "Conheça os KPIs essenciais para manter sua obra no prazo, no orçamento e com máxima eficiência.",
    category: "Indicadores",
    date: "2024-01-10",
    readTime: "6 min",
    icon: TrendingUp,
    featured: false
  },
  {
    id: 3,
    title: "Resolução 1094/CONFEA: O que sua Empresa Precisa Saber",
    excerpt: "Entenda todos os aspectos legais e técnicos da nova resolução do CONFEA sobre relatórios de obras.",
    category: "Legislação",
    date: "2024-01-05",
    readTime: "12 min",
    icon: Lightbulb,
    featured: false
  },
  {
    id: 4,
    title: "Tecnologia em Nuvem para Construção Civil: Benefícios e Implementação",
    excerpt: "Como a computação em nuvem está revolucionando a gestão de obras e por que sua empresa deve adotar.",
    category: "Tecnologia",
    date: "2023-12-28",
    readTime: "10 min",
    icon: FileText,
    featured: false
  },
  {
    id: 5,
    title: "Controle de Equipamentos: Maximizando ROI na Sua Obra",
    excerpt: "Estratégias práticas para otimizar o uso de equipamentos e reduzir custos operacionais.",
    category: "Equipamentos",
    date: "2023-12-20",
    readTime: "7 min",
    icon: TrendingUp,
    featured: false
  },
  {
    id: 6,
    title: "Comunicação Eficiente Entre Obra, Fiscal e Cliente",
    excerpt: "Como estabelecer um canal de comunicação transparente e evitar retrabalhos e conflitos.",
    category: "Comunicação",
    date: "2023-12-15",
    readTime: "9 min",
    icon: Lightbulb,
    featured: false
  }
];

const categories = ["Todos", "Gestão de Obras", "Tecnologia", "Legislação", "Indicadores", "Equipamentos", "Comunicação"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog <span className="text-gradient">RDOWEB</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, dicas e tendências sobre gestão de obras, tecnologia e inovação na construção civil.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 bg-background">
        <div className="container mx-auto px-4">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden hover-lift animate-scale-in">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-bg p-8 flex items-center justify-center">
                  <post.icon className="w-24 h-24 text-primary" />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">Destaque</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button asChild>
                        <Link to={`/blog/${post.id}`}>
                          Ler Artigo <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Últimos Artigos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.id} className={`hover-lift animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <post.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Receba Nossas Novidades
            </h2>
            <p className="text-muted-foreground mb-8">
              Fique por dentro das últimas tendências em gestão de obras e tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="px-8 py-3">
                Assinar Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;