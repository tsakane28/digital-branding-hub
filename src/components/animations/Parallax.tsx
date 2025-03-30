
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: ["start end", "end start"];
}

export const Parallax = ({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
  offset = ["start end", "end start"]
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
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
