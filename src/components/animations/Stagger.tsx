
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  initialDelay?: number;
  direction?: "forward" | "reverse";
  once?: boolean;
  animation?: "fade" | "slide" | "scale";
  slideDistance?: number;
  slideDirection?: "up" | "down" | "left" | "right";
  initialScale?: number;
}

export const Stagger = ({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  initialDelay = 0,
  direction = "forward",
  once = true,
  animation = "fade",
  slideDistance = 20,
  slideDirection = "up",
  initialScale = 0.9
}: StaggerProps) => {
  // Convert children to array
  const childrenArray = React.Children.toArray(children);
  
  // Get initial animation properties based on animation type
  const getAnimationProps = () => {
    switch (animation) {
      case "fade":
        return { opacity: 0 };
      case "slide":
        switch (slideDirection) {
          case "up":
            return { opacity: 0, y: slideDistance };
          case "down":
            return { opacity: 0, y: -slideDistance };
          case "left":
            return { opacity: 0, x: slideDistance };
          case "right":
            return { opacity: 0, x: -slideDistance };
          default:
            return { opacity: 0, y: slideDistance };
        }
      case "scale":
        return { opacity: 0, scale: initialScale };
      default:
        return { opacity: 0 };
    }
  };

  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
        staggerDirection: direction === "forward" ? 1 : -1
      }
    }
  };

  // Item variants
  const itemVariants = {
    hidden: getAnimationProps(),
    visible: {
      opacity: 1,
      y: animation === "slide" && (slideDirection === "up" || slideDirection === "down") ? 0 : undefined,
      x: animation === "slide" && (slideDirection === "left" || slideDirection === "right") ? 0 : undefined,
      scale: animation === "scale" ? 1 : undefined,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
