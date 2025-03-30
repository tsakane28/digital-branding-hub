
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatProps {
  children: ReactNode;
  duration?: number;
  y?: number;
  x?: number;
  delay?: number;
  className?: string;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
}

export const Float = ({ 
  children, 
  duration = 6,
  y = 15,
  x = 0,
  delay = 0,
  className = "",
  rotateY = 0,
  rotateX = 0,
  perspective = 1000
}: FloatProps) => {
  return (
    <motion.div
      initial={{ 
        y: 0, 
        x: 0,
        rotateY: 0,
        rotateX: 0
      }}
      animate={{ 
        y: [-y, y, -y], 
        x: [-x, x, -x],
        rotateY: rotateY ? [-rotateY, rotateY, -rotateY] : 0,
        rotateX: rotateX ? [-rotateX, rotateX, -rotateX] : 0
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.5, 1]
      }}
      style={{ perspective: perspective }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
