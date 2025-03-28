
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  client: string;
  image: string;
  type: string;
}

const recentProjects: Project[] = [
  {
    id: "legal-counsel",
    title: "Fuel Company Rebrand",
    client: "Velvet Gas",
    image: "/public/velvet_branding.png",
    type: "Brand Identity"
  },
  {
    id: "gift-ecommerce",
    title: "Liquor Store Branding",
    client: "Hangover Liquor Store",
    image: "/public/hangover_branding.png",
    type: "Branding"
  },
  {
    id: "beauty-brand",
    title: "Electric Van Vehicle Wrapping",
    client: "Vehicle Wrapping",
    image: "/public/Motor-vehicle-branding.jpg",
    type: "Vinyl Branding",
  },
  {
    id: "beauty-brand",
    title: "Premise Branding",
    client: "Rabbit Hole",
    image: "/public/branding.jpg",
    type: "Brand Identity"
  },
  {
    id: "beauty-brand",
    title: "Co-operate Branding",
    client: "Ground Up",
    image: "/public/GroundUpUmbrellas.jpg",
    type: "Brand Identity"
  },
  {
    id: "beauty-brand",
    title: "Coperate Gifts",
    client: "Old Mutual",
    image: "/public/oldm.png",
    type: "Brand Identity"
  }
];

const ProjectsSection = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary dark:bg-card">
      <div className="container px-6 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
            <span>Recent Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
            Our Latest Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our recent projects that showcase our expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div 
              key={project.id + index} // Added index to avoid duplicate keys
              className="group overflow-hidden rounded-xl shadow-lg transform-3d perspective-container"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2 opacity-80">{project.type}</div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/90">{project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="dark:neon-border">
            <Link to="/portfolio">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
