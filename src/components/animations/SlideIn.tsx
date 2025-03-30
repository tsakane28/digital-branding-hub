
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  viewport?: boolean;
}

export const SlideIn = ({ 
  children, 
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
  viewport = true
}: SlideInProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 1 };
      case "down":
        return { y: -distance, opacity: 1 };
      case "left":
        return { x: distance, opacity: 1 };
      case "right":
        return { x: -distance, opacity: 1 };
      default:
        return { y: distance, opacity: 1 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
        return { y: 0, opacity: 1 };
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
        return { x: 0, opacity: 1 };
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={viewport ? undefined : getAnimatePosition()}
      whileInView={viewport ? getAnimatePosition() : undefined}
      viewport={viewport ? { once, margin: "0px 0px -10% 0px" } : undefined}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}; 
