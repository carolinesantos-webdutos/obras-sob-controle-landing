import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: "nav.home", path: "/" },
    { 
      name: "nav.services", 
      path: "/services",
      children: [
        { name: "nav.technical-articles", path: "/technical-articles" },
        { name: "nav.downloads", path: "/downloads" },
      ]
    },
    { 
      name: "nav.projects", 
      path: "/obras",
      children: [
        { name: "nav.obras", path: "/obras" },
        { name: "nav.blog", path: "/blog" },
      ]
    },
    { name: "nav.faq", path: "/faq" },
    { name: "nav.contact", path: "/#contact-form" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-secondary text-secondary-foreground border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              RDOWEB
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-secondary-foreground">
                    <span>{t(item.name)}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link to={child.path}>{t(child.name)}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-secondary-foreground"
                  }`}
                >
                  {t(item.name)}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="default" 
              asChild
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="https://webdutos.com/autolink/" target="_blank" rel="noopener noreferrer">
                Login RDOWEB
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="flex flex-col space-y-2">
                    <span className="font-medium text-secondary-foreground">{t(item.name)}</span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="text-sm pl-4 text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(child.name)}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-secondary-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                )
              ))}
              <Button 
                variant="default" 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://webdutos.com/autolink/" target="_blank" rel="noopener noreferrer">
                  Login RDOWEB
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};