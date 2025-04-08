
import { useState, useEffect, useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ModernCarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  slideClassName?: string;
  arrowsClassName?: string;
  dotsClassName?: string;
}

export function ModernCarousel({
  children,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
  slideClassName = "",
  arrowsClassName = "",
  dotsClassName = ""
}: ModernCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (autoPlay && !isPaused) {
      timeoutRef.current = setTimeout(next, interval);
    }
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoPlay, interval, isPaused]);

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn("w-full h-full", slideClassName)}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {showArrows && (
        <div className={cn("absolute inset-0 flex items-center justify-between pointer-events-none px-4", arrowsClassName)}>
          <Button 
            onClick={prev} 
            size="icon" 
            variant="ghost" 
            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 pointer-events-auto"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            onClick={next} 
            size="icon" 
            variant="ghost" 
            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 pointer-events-auto"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
      
      {showDots && (
        <div className={cn("absolute bottom-4 left-0 right-0 flex justify-center gap-2", dotsClassName)}>
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModernCarousel;
