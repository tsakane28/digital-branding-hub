
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoSrc: string;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  posterImage?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoBackground = ({
  videoSrc,
  overlayColor = "#000000",
  overlayOpacity = 0.5,
  className,
  children,
  posterImage,
  autoPlay = true,
  loop = true,
  muted = true
}: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoaded(true);
      });
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", () => {
          setIsLoaded(true);
        });
      }
    };
  }, []);

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <video 
        ref={videoRef}
        className={cn(
          "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="absolute inset-0 w-full h-full"
        style={overlayStyle}
      />
      
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
