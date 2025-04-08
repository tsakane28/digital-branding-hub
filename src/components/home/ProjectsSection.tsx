
import { Link } from "react-router-dom";
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
    image: "/velvet_branding.png",
    type: "Brand Identity"
  },
  {
    id: "gift-ecommerce",
    title: "Liquor Store Branding",
    client: "Hangover Liquor Store",
    image: "/hangover_branding.png",
    type: "Branding"
  },
  {
    id: "beauty-brand",
    title: "Electric Van Vehicle Wrapping",
    client: "Vehicle Wrapping",
    image: "/Motor-vehicle-branding.jpg",
    type: "Vinyl Branding",
  },
  {
    id: "beauty-brand",
    title: "Premise Branding",
    client: "Rabbit Hole",
    image: "/branding.jpg",
    type: "Brand Identity"
  },
  {
    id: "beauty-brand",
    title: "Co-operate Branding",
    client: "Ground Up",
    image: "/GroundUpUmbrellas.jpg",
    type: "Brand Identity"
  },
  {
    id: "beauty-brand",
    title: "Coperate Gifts",
    client: "Old Mutual",
    image: "/oldm.png",
    type: "Brand Identity"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-4">
            Recent Projects
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Our Latest Work
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Take a look at some of our recent projects that showcase our expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div 
              key={project.id + index}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="text-white/80 text-sm mb-1">{project.type}</div>
                    <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
                    <p className="text-white/90">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-gray-300 dark:border-gray-700 py-6 px-8"
            asChild
          >
            <Link to="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
