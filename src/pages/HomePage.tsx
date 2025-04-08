
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import VideoSection from "@/components/home/VideoSection";
import { Slide, Scale } from "@/components/ui/transitions";
import ParallaxBackground from "@/components/ParallaxBackground";
import ModernCarousel from "@/components/ui/modern-carousel";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after initial render
    setIsLoaded(true);
  }, []);

  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8659d8bde375?q=80&w=2802&auto=format&fit=crop",
      title: "Strategic Design Solutions",
      description: "Creating compelling brand identities for businesses across industries"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      title: "Creative Excellence",
      description: "Award-winning design team solving complex branding challenges"
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
      title: "Digital Transformation",
      description: "Helping brands succeed in the evolving digital landscape"
    }
  ];

  return (
    <div className={`flex flex-col w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white dark:bg-black`}>
      <HeroSection />
      
      {/* Carousel Section */}
      <section className="py-16 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <Scale>
            <ModernCarousel 
              className="h-[600px] rounded-3xl overflow-hidden"
              interval={6000}
            >
              {carouselSlides.map((slide, index) => (
                <div key={index} className="relative h-full w-full">
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-12">
                    <h3 className="text-3xl font-semibold text-white mb-3">{slide.title}</h3>
                    <p className="text-xl text-white/80">{slide.description}</p>
                  </div>
                </div>
              ))}
            </ModernCarousel>
          </Scale>
        </div>
      </section>
      
      {/* Full-width Product Image Section (Apple style) */}
      <ParallaxBackground
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
        speed={0.1}
        gradientOpacity={0.7}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <Slide direction="up">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">Craft Your Brand Story</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              We transform ideas into impressive visual identities that resonate with your audience
            </p>
          </Slide>
        </div>
      </ParallaxBackground>
      
      <ServicesSection />
      <VideoSection />
      
      {/* Apple-style Product Display Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <Slide direction="up">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Elevate Your Presence</h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Strategic branding and marketing solutions for businesses ready to stand out
            </p>
          </Slide>
        </div>
        
        <Scale delay={0.3} className="mt-12 relative mx-auto overflow-hidden rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80" 
            alt="Branding Showcase"
            className="w-full h-full object-cover"
          />
        </Scale>
      </section>
      
      <ProjectsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
