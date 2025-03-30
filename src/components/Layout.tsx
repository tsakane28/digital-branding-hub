
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Meta from "./SEO/Meta";
import CallToAction from "./CallToAction";
import ParallaxBackground from "./ParallaxBackground";
import VideoBackground from "./VideoBackground";

// Define default meta information for SEO
const defaultMeta = {
  title: "Reserved Digital Branding | Premium Digital Branding & Marketing",
  description: "Reserved Digital Branding is a premium digital branding agency offering comprehensive branding, web design, graphic design, and marketing services in Zimbabwe.",
};

const Layout = () => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  // Get meta information based on current route
  const getMetaForRoute = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/':
        return {
          title: "Home | Reserved Digital Branding",
          description: "Welcome to Reserved Digital Branding, Zimbabwe's premium digital branding and marketing agency. Elevate your brand with our expert services.",
        };
      case '/about':
        return {
          title: "About Us | Reserved Digital Branding",
          description: "Learn about Reserved Digital Branding, our team, mission, vision, and commitment to excellence in branding and digital marketing.",
        };
      case '/services':
        return {
          title: "Services | Reserved Digital Branding",
          description: "Explore our comprehensive range of branding, web design, graphic design, and marketing services tailored to elevate your brand.",
        };
      case '/portfolio':
        return {
          title: "Portfolio | Reserved Digital Branding",
          description: "View our portfolio of successful projects and see how we've helped businesses transform their brand identity and digital presence.",
        };
      case '/contact':
        return {
          title: "Contact Us | Reserved Digital Branding",
          description: "Get in touch with Reserved Digital Branding for premium branding and marketing services. Request a quote or consultation today.",
        };
      case '/shop':
        return {
          title: "Shop | Reserved Digital Branding",
          description: "Browse and purchase high-quality branded merchandise, marketing materials, and custom design services from Reserved Digital Branding.",
        };
      case '/cart':
        return {
          title: "Shopping Cart | Reserved Digital Branding",
          description: "View your selected items and complete your purchase from Reserved Digital Branding's range of premium products and services.",
        };
      default:
        return defaultMeta;
    }
  };
  
  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  // Reset scroll position when changing routes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsPageLoaded(false);
    setTimeout(() => setIsPageLoaded(true), 100);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get the current route's meta information
  const currentMeta = getMetaForRoute();

  // Determine whether to show CTA (not on contact or cart pages)
  const showCTA = !['/contact', '/cart'].includes(location.pathname);

  // Choose a background image based on the route
  const getBackgroundImageForRoute = () => {
    switch (location.pathname) {
      case '/about':
        return "/about_thumb_1.jpg";
      case '/services':
        return "/graphic_design.jpg";
      case '/portfolio':
        return "/FORESTRY EXBIHITIOM 10.jpg";
      case '/contact':
        return "/We Meat Logo 3.jpg";
      case '/shop':
        return "/hoodie.jpg";
      default:
        return "/branding.jpg";
    }
  };

  return (
    <>
      <Meta 
        title={currentMeta.title} 
        description={currentMeta.description} 
        ogUrl={`https://reserveddigitalbranding.com${location.pathname}`}
      />
      
      {/* Page Header Video Background */}
      <div className="fixed inset-0 z-0 h-[50vh]">
        <VideoBackground 
          videoSrc="/video.mp4" 
          overlayOpacity={0.7}
          overlayColor={isDarkMode ? "#000000" : "#111827"}
          posterImage={getBackgroundImageForRoute()}
        />
      </div>
      
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className={`flex-grow transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'} relative z-10 pt-[35vh]`}>
          <Outlet />
          
          {showCTA && <CallToAction className="mt-16 md:mt-24" />}
        </main>
        <Footer />
        
        {/* Theme toggle button */}
        <Button 
          onClick={toggleTheme}
          variant="outline" 
          size="icon" 
          className="fixed right-4 bottom-4 z-50 rounded-full w-12 h-12 apple-button shadow-lg"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </>
  );
};

export default Layout;
