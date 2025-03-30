
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img src="/hoodie.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up text-white dark:neon-text-red">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white/80 text-lg mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Let's collaborate to create a compelling brand presence that resonates with your audience and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" variant="secondary" asChild className="dark:neon-glow">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 dark:neon-border" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
