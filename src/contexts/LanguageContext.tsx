import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.pages': 'Páginas',
    'nav.contact': 'Contato',
    'nav.obras': 'Obras',
    'nav.faq': 'FAQ',
    'nav.downloads': 'Downloads',
    'nav.blog': 'Blog',
    'nav.technical-articles': 'Artigos Técnicos',

    // Hero Section
    'hero.title': 'OBRAS SOB CONTROLE',
    'hero.subtitle': 'RDO - Relatório Diário de Obra, Aprovação de Medições, Apontamento de Mão de Obra e Equipamentos, e muito mais!',
    'hero.demo-button': 'Solicite Uma Demonstração',
    'hero.watch-button': 'ASSISTA COMO FUNCIONA',

    // Common
    'common.learn-more': 'Saiba Mais',
    'common.get-quote': 'Solicitar Orçamento',
    'common.contact-us': 'Entre em Contato',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pages': 'Pages',
    'nav.contact': 'Contact',
    'nav.obras': 'Projects',
    'nav.faq': 'FAQ',
    'nav.downloads': 'Downloads',
    'nav.blog': 'Blog',
    'nav.technical-articles': 'Technical Articles',

    // Hero Section
    'hero.title': 'PROJECTS UNDER CONTROL',
    'hero.subtitle': 'DWR - Daily Work Report, Measurement Approval, Labor and Equipment Tracking, and much more!',
    'hero.demo-button': 'Request a Demo',
    'hero.watch-button': 'WATCH HOW IT WORKS',

    // Common
    'common.learn-more': 'Learn More',
    'common.get-quote': 'Get Quote',
    'common.contact-us': 'Contact Us',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.pages': 'Páginas',
    'nav.contact': 'Contacto',
    'nav.obras': 'Obras',
    'nav.faq': 'FAQ',
    'nav.downloads': 'Descargas',
    'nav.blog': 'Blog',
    'nav.technical-articles': 'Artículos Técnicos',

    // Hero Section
    'hero.title': 'OBRAS BAJO CONTROL',
    'hero.subtitle': 'RDO - Reporte Diario de Obra, Aprobación de Mediciones, Registro de Mano de Obra y Equipos, ¡y mucho más!',
    'hero.demo-button': 'Solicitar una Demostración',
    'hero.watch-button': 'VER CÓMO FUNCIONA',

    // Common
    'common.learn-more': 'Saber Más',
    'common.get-quote': 'Solicitar Cotización',
    'common.contact-us': 'Contáctanos',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};