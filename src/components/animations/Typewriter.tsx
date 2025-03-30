
import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
  repeat?: boolean;
  repeatDelay?: number;
}

export const Typewriter = ({
  text,
  className = "",
  speed = 40,
  delay = 0,
  cursor = true,
  onComplete,
  repeat = false,
  repeatDelay = 2000
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
        timeout = setTimeout(typeNextCharacter, speed);
      } else {
        setIsComplete(true);
        if (onComplete) onComplete();
        
        if (repeat) {
          timeout = setTimeout(() => {
            controls.start({
              opacity: 0,
              transition: { duration: 0.3 }
            }).then(() => {
              setDisplayText("");
              setCurrentIndex(0);
              setIsComplete(false);
              controls.start({
                opacity: 1,
                transition: { duration: 0.3 }
              });
            });
          }, repeatDelay);
        }
      }
    };
    
    const initialDelay = setTimeout(() => {
      typeNextCharacter();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay, currentIndex, repeat, repeatDelay, onComplete, controls]);

  return (
    <motion.span 
      className={cn("inline-block", className)}
      animate={controls}
      initial={{ opacity: 1 }}
    >
      {displayText}
      {cursor && !isComplete && (
        <span className="animate-pulse ml-[1px]">|</span>
      )}
    </motion.span>
  );
};
