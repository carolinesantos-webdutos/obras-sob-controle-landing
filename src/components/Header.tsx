import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">RDOWEB</h1>
        </div>
        <Button 
          variant="outline" 
          asChild
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a href="https://webdutos.com/autolink/" target="_blank" rel="noopener noreferrer">
            Login RDOWEB
          </a>
        </Button>
      </div>
    </header>
  );
};