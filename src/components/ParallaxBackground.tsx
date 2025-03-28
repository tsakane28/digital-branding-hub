import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  imageUrl: string;
  overlayColor?: string;
  speed?: number;
  children?: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  imageUrl, 
  overlayColor = "black",
  speed = 0.2,
  children 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress into parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Optimize scroll handling with useCallback
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    if (!isInView) {
      // Reset transform when out of view
      y.set("0%");
    }
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
    >
      {/* Main background layer */}
      <motion.div
        className="fixed inset-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
          opacity,
          willChange: "transform, opacity"
        }}
      />

      {/* Gradient overlays */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom, 
            ${overlayColor}80 0%, 
            transparent 20%, 
            transparent 80%, 
            ${overlayColor}80 100%
          )`
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
