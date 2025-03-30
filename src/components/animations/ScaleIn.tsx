
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  once?: boolean;
  viewport?: boolean;
}

export const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = "",
  once = true,
  viewport = true
}: ScaleInProps) => {
  return (
    <motion.div
      initial={{ scale, opacity: 0 }}
      animate={viewport ? undefined : { scale: 1, opacity: 1 }}
      whileInView={viewport ? { scale: 1, opacity: 1 } : undefined}
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
