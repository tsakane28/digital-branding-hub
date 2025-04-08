
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
import { PortfolioItem } from "@/types/portfolio";

// Define Project interface that extends PortfolioItem with optional fields
interface Project extends Partial<PortfolioItem> {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  // These are required in PortfolioItem but we'll ensure they exist for the API call
  date: string;
  technologies: string[];
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
    featured: true,
    date: "2023-05-15",
    technologies: ["Illustrator", "Photoshop"]
  },
  {
    id: "we-meat-logo",
    title: "We Meat Logo & Branding",
    client: "We Meat Butchery",
    category: "Branding",
    description: "Developed a bold and memorable brand identity for a premium butchery, including a logo and packaging designs.",
    image: "/public/We Meat Logo 3.jpg",
    featured: true,
    date: "2023-04-22",
    technologies: ["Illustrator", "InDesign"]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    client: "Digital Trends Agency",
    category: "Social Media",
    description: "Implemented an effective social media strategy to enhance engagement and brand awareness for a fast-growing digital agency.",
    image: "/public/socialm.png",
    featured: true,
    date: "2023-03-10",
    technologies: ["Canva", "Hootsuite", "Buffer"]
  },
  {
    id: "victoria-foods-logo",
    title: "Victoria Foods Logo Redesign",
    client: "Victoria Foods",
    category: "Branding",
    description: "Revamped the brand identity of Victoria Foods with a fresh, modern logo reflecting quality and tradition in food production.",
    image: "/public/Victoria Foods 2.jpg",
    featured: true,
    date: "2023-02-05",
    technologies: ["Illustrator", "Photoshop"]
  },
  {
    id: "wednesday-tshirts",
    title: "Wednesday T-Shirts Branding",
    client: "Casual Wear Co.",
    category: "Fashion",
    description: "Created a stylish and minimalistic T-shirt design series, focusing on everyday fashion with a modern touch.",
    image: "/public/Wednesday Steps.jpg",
    date: "2023-01-20",
    technologies: ["Illustrator", "Photoshop"]
  },
  {
    id: "baby-photography",
    title: "Baby Photography Session",
    client: "Olivia Images",
    category: "Photography",
    description: "Captured heartwarming baby portraits with soft lighting and creative setups, delivering timeless family memories.",
    image: "/public/baby.png",
    date: "2022-12-15",
    technologies: ["Lightroom", "Photoshop"]
  },
  {
    id: "event-videography",
    title: "Professional Event Videography",
    client: "Elite Visuals",
    category: "Videography",
    description: "Produced high-quality event video coverage, capturing the most memorable moments with cinematic storytelling.",
    image: "/public/video_production.jpg",
    date: "2022-11-10",
    technologies: ["Premiere Pro", "After Effects"]
  },
  {
    id: "old-mutual-backpack",
    title: "Old Mutual Branded Backpack",
    client: "Old Mutual",
    category: "Merchandise",
    description: "Designed and produced a stylish, durable backpack with the Old Mutual branding for corporate giveaways and promotions.",
    image: "/public/backpack.png",
    date: "2022-10-05",
    technologies: ["Illustrator", "Photoshop"]
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="container px-6 max-w-md">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2">
                <Progress value={loadingProgress} className="h-1" />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
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
          className="flex flex-col w-full bg-white dark:bg-black"
        >
          {/* Hero Section - Large typography, Apple-style */}
          <section className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container px-6 mx-auto max-w-6xl">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
                  Our Creative Work
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Explore our collection of projects that showcase our expertise and creative approach.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Projects - Large, premium display */}
          <section className="py-24 bg-gray-50 dark:bg-neutral-900">
            <div className="container px-6 mx-auto max-w-6xl">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h5 className="text-[#0070c9] font-medium mb-4">Featured Work</h5>
                <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                  Our Proudest Achievements
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  These signature projects represent our creative vision and the results we deliver.
                </p>
              </div>

              <div className="space-y-24">
                {projects.filter(project => project.featured).map((project, index) => (
                  <div 
                    key={project.id} 
                    className="grid md:grid-cols-2 gap-16 items-center"
                  >
                    <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                        <ImageWithFallback 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                      <h5 className="text-[#0070c9] font-medium">{project.category}</h5>
                      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-xl font-medium">
                        {project.client}
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <Button 
                        className="bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full py-6 px-8 text-base font-medium"
                        asChild
                      >
                        <Link to={`/portfolio/${project.id}`}>
                          View Details
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Grid - Clean, modern grid layout */}
          <section className="py-24 bg-white dark:bg-black">
            <div className="container px-6 mx-auto max-w-6xl">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                  Our Portfolio
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
                  Browse through our diverse range of projects across different categories.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        rounded-full text-base font-medium
                        ${selectedCategory === category 
                          ? 'bg-[#0070c9] text-white hover:bg-[#0070c9]/90' 
                          : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'}
                      `}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    id={project.id}
                    className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <ImageWithFallback 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <p className="text-white font-medium">{project.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-[#0070c9] font-medium mb-4">{project.client}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">{project.description}</p>
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-[#0070c9] font-medium hover:text-[#0070c9]/80 transition-colors"
                      >
                        View Project <ExternalLink size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Apple-style gradient */}
          <section className="py-24 bg-gradient-to-b from-[#0070c9] to-[#134e7c] text-white">
            <div className="container px-6 mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's collaborate to develop a brand strategy and design that will set you apart from the competition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0070c9] hover:bg-white/90 rounded-full py-6 px-8 text-lg font-medium" 
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-transparent text-white hover:bg-white/10 border border-white rounded-full py-6 px-8 text-lg font-medium"
                  asChild
                >
                  <Link to="/services">
                    View Services
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
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
