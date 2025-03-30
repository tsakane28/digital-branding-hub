
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { Animations } from "@/components/animations";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after initial render
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      
      {/* Parallax Banner Section */}
      <div className="relative h-[50vh] w-full my-16 overflow-hidden">
        <Animations.Parallax direction="up" speed={0.5} className="h-full">
          <img 
            src="/graphic_design.jpg"
            alt="Design Process"
            className="w-full h-full object-cover"
          />
        </Animations.Parallax>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Craft Your Brand Story</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">We transform ideas into impressive visual identities that resonate with your audience</p>
          </div>
        </div>
      </div>
      
      <VideoSection />
      <ServicesSection />
      
      {/* Parallax Banner Section */}
      <div className="relative h-[50vh] w-full my-16 overflow-hidden">
        <Animations.Parallax direction="down" speed={0.3} className="h-full">
          <img 
            src="/We Meat Logo 3.jpg"
            alt="Branding Showcase"
            className="w-full h-full object-cover"
          />
        </Animations.Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Presence</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">Strategic branding and marketing solutions for businesses ready to stand out</p>
          </div>
        </div>
      </div>
      
      <ProjectsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
