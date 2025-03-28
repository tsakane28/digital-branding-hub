
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import LiveChat from "./components/LiveChat";
import { preloadAssets, isCacheValid, warmupRoutes } from "./services/cacheService";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const initializeApp = async () => {
      // Check if we have a valid cache
      if (!isCacheValid()) {
        // If no valid cache, preload assets
        await preloadAssets(setLoadingProgress);
        await warmupRoutes();
      } else {
        // If we have a valid cache, simulate quick loading
        for (let i = 0; i <= 100; i += 10) {
          setLoadingProgress(i);
          await new Promise(r => setTimeout(r, 50));
        }
      }
      
      // Hide loading screen
      setIsLoading(false);
    };
    
    initializeApp();
  }, []);

  const handleLoadComplete = () => {
    // Additional initialization after loading (if needed)
    console.log("Loading complete, site is ready");
  };

  return (
    <HelmetProvider>
      {isLoading && <LoadingScreen progress={loadingProgress} onLoadComplete={handleLoadComplete} />}
      
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <CartProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner theme="system" />
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
                <LiveChat />
              </TooltipProvider>
            </CartProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
