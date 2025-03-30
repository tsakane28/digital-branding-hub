
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";

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
  fallbackImage?: string;
  showLoadingIndicator?: boolean;
  onLoad?: () => void;
  onError?: () => void;
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
  muted = true,
  fallbackImage,
  showLoadingIndicator = true,
  onLoad,
  onError
}: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle video loading
  useEffect(() => {
    if (!videoRef.current) return;
    
    const handleLoad = () => {
      setIsLoaded(true);
      setHasError(false);
      onLoad?.();
    };
    
    const handleError = () => {
      console.error("Video failed to load:", videoSrc);
      setHasError(true);
      setIsLoaded(false);
      onError?.();
      
      if (fallbackImage) {
        // Don't show error toast if we have a fallback
      } else {
        toast({
          title: "Video failed to load",
          description: "Please check your connection and try again",
          variant: "destructive"
        });
      }
    };
    
    // Reset states when source changes
    setIsLoaded(false);
    setHasError(false);
    
    const video = videoRef.current;
    video.addEventListener("loadeddata", handleLoad);
    video.addEventListener("error", handleError);
    
    return () => {
      video.removeEventListener("loadeddata", handleLoad);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, onLoad, onError, fallbackImage]);

  // Intersection Observer to lazy load video
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { 
      threshold: 0.1 
    });
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Memory management - free video resources when not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else if (autoPlay && !hasError && isVisible) {
          // Only autoplay if it should autoplay, hasn't errored, and is visible
          videoRef.current.play().catch(() => {
            // Silently catch autoplay errors, common due to browser policies
          });
        }
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [autoPlay, hasError, isVisible]);

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity
  };

  // Render fallback image if there's an error and a fallback is provided
  if (hasError && fallbackImage) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden", className)} ref={containerRef}>
        <img 
          src={fallbackImage} 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full" style={overlayStyle} />
        {children && (
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)} ref={containerRef}>
      {/* Loading state */}
      {!isLoaded && showLoadingIndicator && !hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      {/* Error state - visual indicator */}
      {hasError && !fallbackImage && (
        <div className="absolute inset-0 bg-destructive/10 flex items-center justify-center">
          <div className="bg-card p-4 rounded-md shadow-lg flex items-center gap-2 text-destructive">
            <AlertCircle size={20} />
            <span>Failed to load video</span>
          </div>
        </div>
      )}
      
      {/* Actual video element - only set src when visible for performance */}
      {isVisible && (
        <video 
          ref={videoRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700",
            isLoaded && !hasError ? "opacity-100" : "opacity-0"
          )}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          poster={posterImage}
          preload="metadata" // Performance optimization
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={overlayStyle}
      />
      
      {/* Content */}
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
