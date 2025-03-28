import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export interface LoadingScreenProps {
  progress?: number;
  onLoadComplete: () => void;
}

export const LoadingScreen = ({ progress = 0, onLoadComplete }: LoadingScreenProps) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Smoothly animate the progress
    const targetProgress = Math.min(progress, 95); // Cap at 95% until fully complete
    const currentProgress = displayProgress;
    const diff = targetProgress - currentProgress;
    
    if (diff > 0) {
      const increment = Math.min(diff, 1); // Smooth increment
      const timer = setTimeout(() => {
        setDisplayProgress(currentProgress + increment);
      }, 20); // Update every 20ms for smooth animation
      
      return () => clearTimeout(timer);
    }
  }, [progress, displayProgress]);
  
  useEffect(() => {
    // When progress is at 95%, wait for the minimum time before completing
    if (displayProgress >= 95 && !isComplete) {
      const timer = setTimeout(() => {
        setDisplayProgress(100);
        setIsComplete(true);
        onLoadComplete();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [displayProgress, isComplete, onLoadComplete]);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background dark:bg-card"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
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
