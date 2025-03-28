
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const totalSteps = 100;
    let currentStep = 0;
    
    // Simulate loading with a slightly random progression
    const interval = setInterval(() => {
      if (currentStep < totalSteps) {
        // Randomize progress a bit for natural feel
        const increment = Math.random() * 3 + 1;
        currentStep = Math.min(currentStep + increment, totalSteps);
        setProgress(currentStep);
        
        // When we reach 100%, finish loading
        if (currentStep >= totalSteps) {
          clearInterval(interval);
          // Give a small delay before hiding
          setTimeout(() => {
            setIsLoading(false);
            // Notify parent component that loading is complete
            setTimeout(() => onLoadComplete(), 500);
          }, 300);
        }
      }
    }, 60);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-md px-4 space-y-8">
        <div className="flex justify-center">
          <img 
            src="/logo.png" 
            alt="RSRVD" 
            className="h-16 w-auto animate-pulse" 
          />
        </div>
        
        <div className="space-y-2">
          <Progress value={progress} className="h-2 w-full bg-gray-200 dark:bg-gray-700" />
          <p className="text-center text-sm text-muted-foreground">
            Loading... {Math.round(progress)}%
          </p>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">
            Reserved Digital Branding
          </h2>
          <p className="mt-2 text-muted-foreground">
            Preparing your experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
