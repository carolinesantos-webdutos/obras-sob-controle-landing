import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundImages = [
    "/lovable-uploads/90f2bed0-b282-4428-b831-f87f94ea765a.png",
    "/lovable-uploads/64275da3-0449-45d3-bc17-658d0c8da5ff.png",
    "/lovable-uploads/fcd557a1-91e6-482e-9346-e7f7fe68ebfe.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <section className="w-full relative min-h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Construction Background ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content Centered */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed animate-slide-up opacity-90 text-white">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold animate-bounce-in hover-lift"
              onClick={scrollToForm}
            >
              {t('hero.demo-button')}
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              className="text-lg px-10 py-4 animate-bounce-in hover-lift gap-3 text-white border border-white/30 hover:bg-white/10"
              onClick={() => setShowVideo(true)}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-primary ml-1" fill="currentColor" />
              </div>
              {t('hero.watch-button')}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl mx-4">
            <video 
              width="100%" 
              height="500"
              controls
              autoPlay
              className="rounded-lg"
            >
              <source src="/video-rdoweb/INTRODUCAO-RDOWEB" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};