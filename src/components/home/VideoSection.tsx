
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
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h5 className="text-[#0070c9] font-medium mb-4">Our Process</h5>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Watch How We Work
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Get a glimpse into our creative process and see how we bring brands to life.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg">
          <div className="aspect-video relative">
            <video 
              ref={videoRef}
              className="w-full object-cover" 
              poster="https://images.unsplash.com/photo-1560759226-14da22a643ef?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
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
                className="w-20 h-20 rounded-full bg-white/90 dark:bg-black/70 text-[#0070c9] shadow-lg hover:scale-105 transition-transform"
              >
                {isVideoPlaying ? (
                  <Pause className="h-10 w-10" />
                ) : (
                  <Play className="h-10 w-10 ml-1" />
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
