export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">RDOWEB</h3>
            <p className="text-muted-foreground">
              Software de gestão de obras com RDO digital e validade jurídica.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Rua Dr. Pedro Costa, 483 - Centro</p>
              <p>Taubaté/SP</p>
              <p>contato@rdoweb.com.br</p>
              <p>+55 (12) 3413-6082</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horário</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Seg - Sex: 9h00 - 18h00</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informações Legais</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm">
                Razão Social: Vieira e Marques Serviços de informática LTDA
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RDOWEB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};