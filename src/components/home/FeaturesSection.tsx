
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Professional brand strategy",
  "Custom design solutions",
  "Responsive web development",
  "Photography and videography",
  "Social media management",
  "Marketing campaigns",
  "Print and digital media",
  "Vehicle branding",
];

const FeaturesSection = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary relative overflow-hidden dark:bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 dark:bg-neon-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
              Elevate Your Brand with Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We blend creativity with strategic thinking to deliver branding solutions that make a lasting impression.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-3 animate-fade-right"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary dark:text-neon-blue flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="dark:neon-glow">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-left floating">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3" 
                alt="Creative team working" 
                className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-4 apple-card dark:neon-border">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="font-medium">5.0 (120+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
