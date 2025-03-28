
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";

const HeroSection = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-primary/5 to-secondary/50 dark:from-primary/10 dark:to-background/80"></div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-red/10 dark:bg-neon-red/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl space-y-8 animate-fade-right">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 dark:bg-primary/20 dark:neon-text-red">
                <span>Your Digital Branding Agency</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight dark:neon-text-red">
                We Are Your Digital Branding Agency & Marketing Partner
              </h1>
              <p className="text-lg text-muted-foreground">
                Reserved Digital Branding helps businesses create memorable brand experiences
                through strategic design, digital marketing, and creative solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="dark:neon-glow">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="dark:neon-border">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">Trusted by organizations like:</p>
              <div className="flex flex-wrap gap-6">
                <span className="text-muted-foreground/70 font-medium">
                  <img src="/velvet.png" alt="Velvet" className="w-24 h-auto" />
                </span>
                <span className="text-muted-foreground/70 font-medium">
                  <img src="/Daruler.png" alt="Daruler" className="w-24 h-auto" />
                </span>
                <span className="text-muted-foreground/70 font-medium">
                  <img src="/hangover.png" alt="Hangover" className="w-14 h-auto" />
                </span>
              </div>
            </div>
          </div>

          <div className="perspective-container h-[400px] animate-fade-left">
            <Scene3D className="w-full h-full transform-3d" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
