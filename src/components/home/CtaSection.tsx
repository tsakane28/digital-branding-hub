
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "@/components/ParallaxBackground";

const CtaSection = () => {
  return (
    <ParallaxBackground
      imageUrl="https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?q=80&w=2000&auto=format&fit=crop"
      speed={0.15}
      gradientOpacity={0.8}
      className="py-24"
    >
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Let's collaborate to create a compelling brand presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-black rounded-full py-6 px-8 text-lg font-medium"
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-white/10 backdrop-blur-md text-white rounded-full py-6 px-8 text-lg font-medium hover:bg-white/20"
              asChild
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default CtaSection;
