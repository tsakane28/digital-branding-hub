
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxBackgroundProps {
  imageUrl: string;
  overlayColor?: string;
  speed?: number;
  children?: React.ReactNode;
  className?: string;
  gradientOpacity?: number;
  parallaxEnabled?: boolean;
  blurAmount?: number;
  zIndex?: number;
  gradientPosition?: "top" | "bottom" | "both";
  gradientIntensity?: number;
  useSpringAnimation?: boolean;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  imageUrl, 
  overlayColor = "black",
  speed = 0.2,
  children,
  className = "",
  gradientOpacity = 0.5,
  parallaxEnabled = true,
  blurAmount = 0,
  zIndex = 0,
  gradientPosition = "both",
  gradientIntensity = 80,
  useSpringAnimation = false,
  springConfig = { stiffness: 100, damping: 30, mass: 1 }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Configure scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate the parallax values based on scroll
  const calculateParallaxY = useMemo(() => {
    return parallaxEnabled ? `${speed * 20}%` : "0%";
  }, [parallaxEnabled, speed]);

  // Transform scroll progress into parallax effect - with optional spring physics
  const yValue = useTransform(scrollYProgress, [0, 1], ["0%", calculateParallaxY]);
  const y = useSpringAnimation 
    ? useSpring(yValue, {
        stiffness: springConfig.stiffness,
        damping: springConfig.damping,
        mass: springConfig.mass,
      }) 
    : yValue;
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Create gradient string based on position
  const createGradientStyle = useCallback(() => {
    const alphaHex = Math.round(gradientOpacity * 255).toString(16).padStart(2, '0');
    const colorWithOpacity = `${overlayColor}${alphaHex}`;
    const transparent = "transparent";
    
    switch (gradientPosition) {
      case "top":
        return `linear-gradient(to bottom, 
          ${colorWithOpacity} 0%, 
          ${transparent} ${gradientIntensity}%, 
          ${transparent} 100%
        )`;
      case "bottom":
        return `linear-gradient(to bottom, 
          ${transparent} 0%, 
          ${transparent} ${100 - gradientIntensity}%, 
          ${colorWithOpacity} 100%
        )`;
      case "both":
      default:
        return `linear-gradient(to bottom, 
          ${colorWithOpacity} 0%, 
          ${transparent} ${gradientIntensity / 2}%, 
          ${transparent} ${100 - gradientIntensity / 2}%, 
          ${colorWithOpacity} 100%
        )`;
    }
  }, [overlayColor, gradientOpacity, gradientPosition, gradientIntensity]);

  // Intersection Observer to detect when component is in viewport
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Optimize scroll handling with useCallback
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !parallaxEnabled) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const isCurrentlyInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    if (isCurrentlyInView !== isInView) {
      setIsInView(isCurrentlyInView);
    }
  }, [isInView, parallaxEnabled]);

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{ zIndex }}
    >
      {/* Main background layer */}
      <motion.div
        className="fixed inset-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: isInView ? y : "0%",
          opacity,
          filter: blurAmount > 0 ? `blur(${blurAmount}px)` : undefined,
          willChange: "transform, opacity"
        }}
        initial={false}
      />

      {/* Gradient overlays */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: createGradientStyle(),
          pointerEvents: "none"
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
