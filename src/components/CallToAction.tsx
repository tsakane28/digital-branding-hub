
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface CallToActionProps {
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
}

const CallToAction = ({ variant = 'primary', className = '' }: CallToActionProps) => {
  const { language } = useLanguage();
  const t = translations[language].common;
  const [isVisible, setIsVisible] = useState(false);
  
  // Background styles based on variant
  const backgrounds = {
    primary: "bg-primary/5 dark:bg-primary/10",
    secondary: "bg-secondary",
    dark: "bg-card dark:bg-card"
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className={`${backgrounds[variant]} px-6 py-16 md:py-24 rounded-lg transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
          {t.callToAction}
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button 
            size="lg" 
            asChild
            className="relative overflow-hidden group"
          >
            <Link to="/contact">
              {t.callToActionButton}
              <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-2"
          >
            <Link to="/portfolio">
              {t.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
