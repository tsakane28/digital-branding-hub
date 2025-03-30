
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

// Define valid offset types according to framer-motion's ScrollOffset type
type ValidScrollOffset = "start end" | "end start" | "center center" | [number, number] | [string, string];

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: ValidScrollOffset; // Updated type to match framer-motion expectations
}

export const Parallax = ({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
  offset = ["0 1", "1 0"] // Using values that are acceptable for framer-motion
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any // Type assertion to avoid TypeScript errors
  });

  // Calculate movement based on direction and speed
  const getTransformValue = () => {
    const distance = speed * 100;
    
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}%`]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${distance}%`]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}%`]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${distance}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ["0%", `-${distance}%`]);
    }
  };

  const y = direction === "up" || direction === "down" ? getTransformValue() : 0;
  const x = direction === "left" || direction === "right" ? getTransformValue() : 0;

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y, x }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Parallax;
