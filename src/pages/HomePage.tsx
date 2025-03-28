
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
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
    <div className={`flex flex-col w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ProjectsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
