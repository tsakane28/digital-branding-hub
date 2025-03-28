import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { NetworkStatus } from "@/components/NetworkStatus";
import { preloadPortfolioImages } from "@/utils/imageLoader";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

const categories = [
  "All",
  "Branding",
  "Web Design",
  "Print",
  "Social Media",
  "Photography"
];

const projects: Project[] = [
  {
    id: "zimbabwe-tshirts",
    title: "Zimbabwe T-Shirts Collection",
    client: "RESERVED",
    category: "Fashion",
    description: "Designed a unique T-shirt collection celebrating Zimbabwean culture, incorporating traditional patterns and modern aesthetics.",
    image: "/public/Zimbabwe_tees.jpg",
    featured: true
  },
  {
    id: "we-meat-logo",
    title: "We Meat Logo & Branding",
    client: "We Meat Butchery",
    category: "Branding",
    description: "Developed a bold and memorable brand identity for a premium butchery, including a logo and packaging designs.",
    image: "/public/We Meat Logo 3.jpg",
    featured: true
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    client: "Digital Trends Agency",
    category: "Social Media",
    description: "Implemented an effective social media strategy to enhance engagement and brand awareness for a fast-growing digital agency.",
    image: "/public/socialm.png",
    featured: true
  },
  {
    id: "victoria-foods-logo",
    title: "Victoria Foods Logo Redesign",
    client: "Victoria Foods",
    category: "Branding",
    description: "Revamped the brand identity of Victoria Foods with a fresh, modern logo reflecting quality and tradition in food production.",
    image: "/public/Victoria Foods 2.jpg",
    featured: true
  },
  {
    id: "wednesday-tshirts",
    title: "Wednesday T-Shirts Branding",
    client: "Casual Wear Co.",
    category: "Fashion",
    description: "Created a stylish and minimalistic T-shirt design series, focusing on everyday fashion with a modern touch.",
    image: "/public/Wednesday Steps.jpg"
  },
  {
    id: "baby-photography",
    title: "Baby Photography Session",
    client: "Olivia Images",
    category: "Photography",
    description: "Captured heartwarming baby portraits with soft lighting and creative setups, delivering timeless family memories.",
    image: "/public/baby.png"
  },
  {
    id: "event-videography",
    title: "Professional Event Videography",
    client: "Elite Visuals",
    category: "Videography",
    description: "Produced high-quality event video coverage, capturing the most memorable moments with cinematic storytelling.",
    image: "/public/video_production.jpg"
  },
  {
    id: "old-mutual-backpack",
    title: "Old Mutual Branded Backpack",
    client: "Old Mutual",
    category: "Merchandise",
    description: "Designed and produced a stylish, durable backpack with the Old Mutual branding for corporate giveaways and promotions.",
    image: "/public/backpack.png"
  }
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [startTime] = useState(Date.now());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Preload all images
        await preloadPortfolioImages(projects);
        
        // Ensure minimum loading time of 2 seconds
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 2000) {
          await new Promise(r => setTimeout(r, 2000 - elapsedTime));
        }
        
        setIsLoading(false);
        // Add a small delay before showing content to ensure smooth transition
        setTimeout(() => setIsReady(true), 100);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
        setIsReady(true);
      }
    };

    loadImages();
  }, [startTime]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="container px-6 max-w-md">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-muted animate-pulse rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="aspect-video bg-muted animate-pulse rounded-lg" />
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2">
                <Progress value={loadingProgress} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Loading portfolio...</span>
                  <span>{Math.round(loadingProgress)}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : isReady ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col w-full"
        >
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-6 mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                  <span>Our Portfolio</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-up">
                  Our Creative Work
                </h1>
                <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Explore our collection of projects that showcase our expertise and creative approach.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20 bg-secondary">
            <div className="container px-6 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  <span>Featured Work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Our Proudest Achievements
                </h2>
                <p className="text-lg text-muted-foreground">
                  These signature projects represent our creative vision and the results we deliver.
                </p>
              </div>

              <div className="grid gap-8">
                {projects.filter(project => project.featured).map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                      <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-fade-right transition-opacity duration-1000`}>
                        <ImageWithFallback 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className={`space-y-6 animate-fade-left ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        <span>{project.category}</span>
                      </div>
                      <h2 className="text-3xl font-display font-bold">
                        {project.title}
                      </h2>
                      <p className="text-xl font-medium text-primary">
                        {project.client}
                      </p>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      <Button asChild variant="outline">
                        <Link to={`/portfolio/${project.id}`}>
                          View Details
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-20 bg-secondary">
            <div className="container px-6 mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Our Portfolio
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Browse through our diverse range of projects across different categories.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="rounded-full"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    id={project.id}
                    className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <ImageWithFallback 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <p className="text-white font-medium">{project.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-3">{project.client}</p>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container px-6 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Let's collaborate to develop a brand strategy and design that will set you apart from the competition.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-primary text-white border-white hover:bg-white/10" asChild>
                    <Link to="/services">
                      View Services
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <NetworkStatus />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PortfolioPage;
