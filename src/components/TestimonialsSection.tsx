import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    position: "Gerente de Obras",
    company: "Construtora Horizonte",
    content: "O RDOWEB revolucionou nossa gestão de obras. A padronização dos processos e a facilidade de acesso às informações melhoraram significativamente nossa produtividade.",
    rating: 5
  },
  {
    name: "Ana Paula Santos",
    position: "Engenheira Civil",
    company: "Empreendimentos Delta",
    content: "A integração com nosso cronograma e a geração automática de relatórios nos economiza horas de trabalho. O suporte técnico é excepcional.",
    rating: 5
  },
  {
    name: "Roberto Mendes",
    position: "Diretor Técnico",
    company: "Construtora Inovação",
    content: "Implementamos o RDOWEB em 5 obras simultaneamente. A curva de aprendizado foi suave e os resultados apareceram rapidamente. Recomendo!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in">
          O que Nossos Clientes Dizem
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          Depoimentos de profissionais que transformaram suas obras com o RDOWEB
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`border-border bg-background hover:shadow-lg transition-shadow hover-lift animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};