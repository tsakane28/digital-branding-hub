
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  id?: string;
}

export const Fade = ({
  children,
  duration = 0.3,
  delay = 0,
  className,
  id,
  ...props
}: FadeProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props as HTMLMotionProps<"div">}
    >
      {children}
    </motion.div>
  );
};

interface SlideProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  id?: string;
}

export const Slide = ({
  children,
  direction = "up",
  duration = 0.3,
  delay = 0,
  distance = 20,
  className,
  id,
  ...props
}: SlideProps) => {
  const getDirectionProps = () => {
    switch (direction) {
      case "up":
        return { y: [distance, 0] };
      case "down":
        return { y: [-distance, 0] };
      case "left":
        return { x: [distance, 0] };
      case "right":
        return { x: [-distance, 0] };
      default:
        return { y: [distance, 0] };
    }
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, ...getDirectionProps() }}
      animate={{ opacity: 1, ...getDirectionProps() }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props as HTMLMotionProps<"div">}
    >
      {children}
    </motion.div>
  );
};

interface ScaleProps {
  children: React.ReactNode;
  initialScale?: number;
  duration?: number;
  delay?: number;
  className?: string;
  id?: string;
}

export const Scale = ({
  children,
  initialScale = 0.95,
  duration = 0.3,
  delay = 0,
  className,
  id,
  ...props
}: ScaleProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: initialScale }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props as HTMLMotionProps<"div">}
    >
      {children}
    </motion.div>
  );
};
