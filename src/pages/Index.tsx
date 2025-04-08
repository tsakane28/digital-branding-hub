
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Slide } from "@/components/ui/transitions";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-24 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-semibold leading-tight mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Reserved Digital Branding
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We create compelling brand experiences through strategic design and creative solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-black rounded-full py-6 px-8 text-lg font-medium"
            asChild
          >
            <Link to="/home">
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-6 px-8 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
      
      <Slide direction="up" delay={0.9} duration={0.8} className="mt-16 max-w-5xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2800&auto=format&fit=crop" 
            alt="Digital Branding" 
            className="w-full rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xl font-medium">Premium branding solutions</p>
          </div>
        </div>
      </Slide>
      
      <div className="mt-16 animate-bounce">
        <ArrowDown className="text-gray-400" />
      </div>
    </div>
  );
};

export default Index;
