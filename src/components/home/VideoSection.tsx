
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-black overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20">
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Watch How We Work
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
            Get a glimpse into our creative process and see how we bring brands to life.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
          <div className="aspect-w-16 aspect-h-9 relative">
            <video 
              ref={videoRef}
              className="w-full object-cover" 
              poster="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
              muted
              loop
              playsInline
            >
              <source src="/public/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                onClick={toggleVideo}
                variant="secondary" 
                size="icon" 
                className="w-16 h-16 rounded-full bg-white/90 dark:bg-black/90 shadow-lg"
              >
                {isVideoPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
