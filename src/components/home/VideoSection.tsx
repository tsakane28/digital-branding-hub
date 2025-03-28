
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
    <section className="py-20 bg-white dark:bg-card overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
            Watch How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a glimpse into our creative process and see how we bring brands to life.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto apple-card overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9 relative">
          <video 
            ref={videoRef}
            className="w-full object-cover" 
            poster="/public/video-poster.jpg"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src="/public/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

            
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Button is currently commented out in the original code */}
              {/* <Button 
                onClick={toggleVideo}
                variant="secondary" 
                size="icon" 
                className="w-16 h-16 rounded-full bg-white/90 dark:bg-black/90 shadow-lg dark:neon-border"
              >
                {isVideoPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
