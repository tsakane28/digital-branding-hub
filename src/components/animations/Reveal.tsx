
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  background?: string;
}

export const Reveal = ({ 
  children, 
  direction = "left-to-right",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  background = "bg-background"
}: RevealProps) => {
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration * 0.5,
        delay: delay + duration * 0.5
      }
    }
  };

  const slideVariants = {
    hidden: {
      x: direction === "left-to-right" ? "-100%" : 
         direction === "right-to-left" ? "100%" : 0,
      y: direction === "top-to-bottom" ? "-100%" : 
         direction === "bottom-to-top" ? "100%" : 0,
    },
    visible: {
      x: "0%",
      y: "0%",
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: {
      x: direction === "left-to-right" ? "100%" : 
         direction === "right-to-left" ? "-100%" : 0,
      y: direction === "top-to-bottom" ? "100%" : 
         direction === "bottom-to-top" ? "-100%" : 0,
      transition: {
        duration: duration,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "0px 0px -10% 0px" }}
      >
        {children}
      </motion.div>
      <motion.div 
        className={cn("absolute inset-0", background)}
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once, margin: "0px 0px -10% 0px" }}
      />
    </div>
  );
};
