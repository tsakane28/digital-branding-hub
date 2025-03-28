
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress?: number;
  onLoadComplete: () => void;
}

const LoadingScreen = ({ progress = 0, onLoadComplete }: LoadingScreenProps) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  
  useEffect(() => {
    // Smoothly animate the progress
    const timer = setTimeout(() => {
      setDisplayProgress(progress);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  useEffect(() => {
    // When progress is at 100%, trigger the complete function
    if (displayProgress >= 100) {
      const timer = setTimeout(() => {
        onLoadComplete();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [displayProgress, onLoadComplete]);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background dark:bg-card"
      initial={{ opacity: 1 }}
      animate={{ opacity: displayProgress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-6 max-w-md">
        <div className="mb-8 text-center">
          <img
            src="/logo.png"
            alt="Reserved Digital Branding"
            className="mx-auto w-48 mb-6"
          />
          <h1 className="text-3xl font-display font-bold mb-2 dark:neon-text-red">
            Reserved Digital Branding
          </h1>
          <p className="text-muted-foreground">
            Elevating your brand through digital excellence
          </p>
        </div>
        
        <div className="space-y-2">
          <Progress value={displayProgress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Loading assets...</span>
            <span>{Math.round(displayProgress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
