import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Eye,
  Star,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Shield,
  Cpu,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const technicalArticles = [
  {
    id: 1,
    title: "Cartilha RDO: Guia Completo sobre Relatórios Diários de Obra",
    description: "Manual técnico detalhado sobre implementação e boas práticas para RDO digital conforme resolução 1094/CONFEA.",
    author: "Eng. Carlos Webdutos",
    date: "2024-01-15",
    downloadCount: 1247,
    rating: 4.9,
    category: "Legislação",
    tags: ["RDO", "CONFEA", "Legislação", "Boas Práticas"],
    icon: FileText,
    featured: true,
    difficulty: "Intermediário",
    pages: 45
  },
  {
    id: 2,
    title: "Desmistificando a Nuvem na Construção Civil",
    description: "Artigo técnico sobre computação em nuvem aplicada à gestão de obras, benefícios, segurança e implementação prática.",
    author: "Equipe Técnica RDOWEB",
    date: "2024-01-10",
    downloadCount: 892,
    rating: 4.8,
    category: "Tecnologia",
    tags: ["Cloud", "AWS", "Infraestrutura", "Segurança"],
    icon: Cpu,
    featured: false,
    difficulty: "Avançado",
    pages: 32
  },
  {
    id: 3,
    title: "Por que Devo Emitir RDOs? Aspectos Legais e Práticos",
    description: "Análise jurídica e técnica sobre a importância dos RDOs na proteção legal e gestão eficiente de projetos de construção.",
    author: "Dr. Ana Silva",
    date: "2024-01-05",
    downloadCount: 1156,
    rating: 4.7,
    category: "Jurídico",
    tags: ["RDO", "Aspectos Legais", "Proteção", "Contratos"],
    icon: Shield,
    featured: false,
    difficulty: "Básico",
    pages: 28
  },
  {
    id: 4,
    title: "Indicadores de Performance em Obras: KPIs Essenciais",
    description: "Estudo técnico sobre os principais indicadores de performance que todo gestor de obras deve acompanhar.",
    author: "Eng. Roberto Mendes",
    date: "2023-12-28",
    downloadCount: 743,
    rating: 4.6,
    category: "Gestão",
    tags: ["KPIs", "Performance", "Gestão", "Indicadores"],
    icon: TrendingUp,
    featured: false,
    difficulty: "Intermediário",
    pages: 38
  },
  {
    id: 5,
    title: "Integração de Sistemas na Gestão de Obras",
    description: "White paper sobre integração entre diferentes sistemas de gestão e os benefícios da interoperabilidade.",
    author: "Equipe de Desenvolvimento",
    date: "2023-12-20",
    downloadCount: 567,
    rating: 4.5,
    category: "Integração",
    tags: ["Integração", "Sistemas", "API", "Interoperabilidade"],
    icon: Building,
    featured: false,
    difficulty: "Avançado",
    pages: 52
  },
  {
    id: 6,
    title: "Segurança da Informação em Projetos de Construção",
    description: "Manual sobre proteção de dados, backup e segurança da informação em ambientes de construção civil.",
    author: "Especialista em Segurança",
    date: "2023-12-15",
    downloadCount: 445,
    rating: 4.4,
    category: "Segurança",
    tags: ["Segurança", "Dados", "Backup", "LGPD"],
    icon: Shield,
    featured: false,
    difficulty: "Intermediário",
    pages: 41
  }
];

const categories = ["Todos", "Legislação", "Tecnologia", "Jurídico", "Gestão", "Integração", "Segurança"];
const difficulties = ["Todos", "Básico", "Intermediário", "Avançado"];

const TechnicalArticles = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Artigos <span className="text-gradient">Técnicos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Documentação técnica especializada, white papers e guias práticos para profissionais 
              da construção civil e gestão de obras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Explorar Biblioteca
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Downloads Gratuitos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Nível de Dificuldade</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={difficulty === "Todos" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in">Artigo em Destaque</h2>
          {technicalArticles.filter(article => article.featured).map((article) => (
            <Card key={article.id} className="overflow-hidden hover-lift animate-scale-in">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-bg p-8 flex items-center justify-center">
                  <article.icon className="w-24 h-24 text-primary" />
                </div>
                <div className="md:w-3/4">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary">{article.category}</Badge>
                      <Badge className={getDifficultyColor(article.difficulty)}>
                        {article.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        <FileText className="w-3 h-3 mr-1" />
                        {article.pages} páginas
                      </Badge>
                      <Badge variant="outline">Destaque</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">{article.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {article.description}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {article.downloadCount} downloads
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {article.rating}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button>
                        <Eye className="w-4 h-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in">
            Biblioteca Técnica Completa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalArticles.filter(article => !article.featured).map((article, index) => (
              <Card key={article.id} className={`hover-lift animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <article.icon className="w-8 h-8 text-primary" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {article.rating}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                    <Badge className={`text-xs ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight mb-3">{article.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {article.pages}p
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {article.downloadCount}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        Ver
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Artigos Técnicos</div>
            </div>
            <div className="animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Profissionais</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-scale-in">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Contribua com a Comunidade
            </h2>
            <p className="text-muted-foreground mb-8">
              Tem conhecimento técnico para compartilhar? Publique seu artigo em nossa biblioteca 
              e ajude outros profissionais da construção civil.
            </p>
            <Button size="lg">
              Submeter Artigo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalArticles;