
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after initial render
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white dark:bg-black`}>
      <HeroSection />
      
      {/* Full-width Product Image Section (Apple style) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Craft Your Brand Story</h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            We transform ideas into impressive visual identities that resonate with your audience
          </p>
        </div>
        <div className="mt-12 relative h-[700px] mx-auto overflow-hidden rounded-3xl">
          <img 
            src="/graphic_design.jpg"
            alt="Design Process"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      <ServicesSection />
      
      {/* Apple-style Product Display Section */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Elevate Your Presence</h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Strategic branding and marketing solutions for businesses ready to stand out
          </p>
        </div>
        <div className="mt-12 relative h-[700px] mx-auto overflow-hidden">
          <img 
            src="/We Meat Logo 3.jpg"
            alt="Branding Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      <ProjectsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
