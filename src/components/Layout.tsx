
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });
  
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Outlet />
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
  );
};

export default Layout;
