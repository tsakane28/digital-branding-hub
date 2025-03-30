
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
  staggerChildren?: number;
  staggerDirection?: "forward" | "reverse";
  viewport?: boolean;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "",
  direction = "up",
  distance = 20,
  once = true,
  threshold = 0.1,
  staggerChildren = 0,
  staggerDirection = "forward",
  viewport = true
}: FadeInProps) => {
  // Determine the initial animation properties based on the direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const variants = {
    hidden: getInitialPosition(),
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren: staggerChildren,
        staggerDirection: staggerDirection === "forward" ? 1 : -1
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      whileInView={viewport ? "visible" : undefined}
      viewport={viewport ? { once, margin: `0px 0px -${threshold * 100}% 0px` } : undefined}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}; 
