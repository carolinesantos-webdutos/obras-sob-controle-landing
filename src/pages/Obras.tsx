import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Factory, Zap, TreePine } from "lucide-react";

const obras = [
  {
    id: 1,
    title: "Teatro Cultura Artística",
    description: "Reforma e construção",
    location: "São Paulo/SP",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 2,
    title: "Hospital Santa Ana",
    description: "Construção",
    location: "Porto Alegre/RS",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 3,
    title: "FRAPORT",
    description: "Ampliação do aeroporto",
    location: "Porto Alegre/RS",
    type: "Infraestrutura",
    icon: Building,
    image: "/lovable-uploads/f8883bf1-8925-47cc-b956-f2f8f2882353.png"
  },
  {
    id: 4,
    title: "Graded School",
    description: "Segunda fase de construção",
    location: "São Paulo/SP",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 5,
    title: "Pai Eterno",
    description: "Construção de estruturas",
    location: "Trindade/GO",
    type: "Infraestrutura",
    icon: Building,
    image: "/lovable-uploads/f8883bf1-8925-47cc-b956-f2f8f2882353.png"
  },
  {
    id: 6,
    title: "Bracell",
    description: "Construção prédio de secagem",
    location: "Brasil",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 7,
    title: "COMGAS",
    description: "Construção de redes e ramais",
    location: "Arujá/SP",
    type: "Linear",
    icon: Zap,
    image: "/lovable-uploads/81cc6bfd-b03b-4f7f-bf53-ee0797e4cc17.png"
  },
  {
    id: 8,
    title: "Parnaíba V",
    description: "Conversão de UTE",
    location: "Parnaíba/MA",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 9,
    title: "PCI",
    description: "Obra civil e eletromecânica",
    location: "Brasil",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 10,
    title: "Jaguatirica II",
    description: "Usina termoelétrica",
    location: "Boa Vista/RO",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 11,
    title: "BRASKEM",
    description: "Linha de transferência",
    location: "ABC/SP",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 12,
    title: "Sino Brasileiro",
    description: "Expansão do hospital",
    location: "Osasco/SP",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 13,
    title: "COMGAS Urbanova",
    description: "Ligações de gás",
    location: "São José dos Campos",
    type: "Linear",
    icon: Zap,
    image: "/lovable-uploads/81cc6bfd-b03b-4f7f-bf53-ee0797e4cc17.png"
  },
  {
    id: 14,
    title: "Aeroporto Fortaleza",
    description: "Reforma e ampliação",
    location: "Fortaleza/CE",
    type: "Infraestrutura",
    icon: Building,
    image: "/lovable-uploads/f8883bf1-8925-47cc-b956-f2f8f2882353.png"
  },
  {
    id: 15,
    title: "BASF",
    description: "Manutenção eletromecânica",
    location: "Guaratinguetá/SP",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 16,
    title: "BRASKEM RJ",
    description: "Manutenção eletromecânica",
    location: "Duque de Caxias/RJ",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 17,
    title: "Paracatu",
    description: "Construção civil & reformas",
    location: "Mariana/MG",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 18,
    title: "BRASKEM SP",
    description: "Manutenção eletromecânica",
    location: "Cubatão e Paulínea/SP",
    type: "Industrial",
    icon: Factory,
    image: "/lovable-uploads/2d02a47e-0f65-48b3-aec6-2d85744282b6.png"
  },
  {
    id: 19,
    title: "CGE",
    description: "Construção de gasoduto",
    location: "Brasil",
    type: "Linear",
    icon: Zap,
    image: "/lovable-uploads/81cc6bfd-b03b-4f7f-bf53-ee0797e4cc17.png"
  },
  {
    id: 20,
    title: "INSCER",
    description: "Ampliação e reforma",
    location: "Porto Alegre/RS",
    type: "Infraestrutura",
    icon: Building,
    image: "/lovable-uploads/f8883bf1-8925-47cc-b956-f2f8f2882353.png"
  },
  {
    id: 21,
    title: "CAL Center I",
    description: "Retrofit",
    location: "São Paulo/SP",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 22,
    title: "CA35",
    description: "Construção e pavimentação",
    location: "São Paulo/SP",
    type: "Infraestrutura",
    icon: Building,
    image: "/lovable-uploads/f8883bf1-8925-47cc-b956-f2f8f2882353.png"
  },
  {
    id: 23,
    title: "Four Seasons",
    description: "Construção",
    location: "São Paulo/SP",
    type: "Civil",
    icon: Building,
    image: "/lovable-uploads/233a5650-165d-422f-a197-ed4f16f71656.png"
  },
  {
    id: 24,
    title: "Hosp. Nora Teixeira",
    description: "Terraplenagem e contenções",
    location: "Porto Alegre/RS",
    type: "Terraplenagem",
    icon: TreePine,
    image: "/lovable-uploads/e0f6918f-b9d3-44d7-adab-54b73611e7e3.png"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Civil':
      return 'bg-blue-500';
    case 'Industrial':
      return 'bg-red-500';
    case 'Infraestrutura':
      return 'bg-green-500';
    case 'Linear':
      return 'bg-yellow-500';
    case 'Terraplenagem':
      return 'bg-orange-500';
    default:
      return 'bg-gray-500';
  }
};

const Obras = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient">Algumas Obras que Utilizam</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Plataforma totalmente online utilizada em diversos tipos de obras. 
              Veja a seguir algumas que utilizam a plataforma.
            </p>
            <Button size="lg" className="mb-8">
              CONHECER A PLATAFORMA
            </Button>
          </div>
        </div>
      </section>

      {/* Obras Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obras.map((obra) => {
              const IconComponent = obra.icon;
              return (
                <Card key={obra.id} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge className={`${getTypeColor(obra.type)} text-white`}>
                        {obra.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {obra.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {obra.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {obra.location}
                    </div>
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden">
                      <img 
                        src={obra.image} 
                        alt={obra.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua obra também pode usar o RDOWEB
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transforme o controle da sua obra com nossa plataforma digital completa
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Solicite uma Demonstração
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Obras;