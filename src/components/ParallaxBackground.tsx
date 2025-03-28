
import { useState, useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  imageUrl: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ imageUrl }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
      {/* Background image with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]" 
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(-${scrollPosition * 0.2}px)`,
          willChange: 'transform'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black/80" />
    </div>
  );
};

export default ParallaxBackground;
