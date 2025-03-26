
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    id: "dial-a-gift",
    title: "Brand Refresh & E-commerce Platform",
    client: "Dial-A-Gift",
    category: "Branding",
    description: "Complete brand refresh including logo redesign, visual identity system, and custom e-commerce website development.",
    image: "https://images.unsplash.com/photo-1627843240167-b1f9309a259d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "face-dresser",
    title: "Luxury Beauty Brand Identity",
    client: "The Face Dresser",
    category: "Branding",
    description: "Development of sophisticated brand identity for a premium beauty services provider, including packaging and digital assets.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "sithole-legal",
    title: "Corporate Identity & Website",
    client: "Sithole Legal Counsel",
    category: "Web Design",
    description: "Professional corporate identity and responsive website design for a leading law firm, projecting authority and trustworthiness.",
    image: "https://images.unsplash.com/photo-1604537372111-13b49dfdde73?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: "blue-water",
    title: "Brand Identity & Packaging",
    client: "Blue Water Fisheries",
    category: "Branding",
    description: "Comprehensive branding and packaging design for a sustainable seafood company, highlighting product quality and environmental values.",
    image: "https://images.unsplash.com/photo-1609146708744-33bc775ded01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "green-farms",
    title: "Product Packaging & Labels",
    client: "Green Farms Organic",
    category: "Print",
    description: "Eco-friendly packaging design and product labels for an organic food producer, emphasizing sustainability and natural ingredients.",
    image: "https://images.unsplash.com/photo-1560858070-dfa4a97b3e80?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "urban-clothing",
    title: "Fashion Brand & Campaign",
    client: "Urban Street Clothing",
    category: "Photography",
    description: "Brand identity, lookbook photography, and social media campaign for a contemporary urban fashion brand.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "tech-solutions",
    title: "Technology Brand Identity",
    client: "Infinity Tech Solutions",
    category: "Branding",
    description: "Modern brand identity and digital presence for a technology solutions provider, communicating innovation and reliability.",
    image: "https://images.unsplash.com/photo-1581090700227-1429bedaac4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    client: "Vibrant Cosmetics",
    category: "Social Media",
    description: "Engaging social media content strategy and campaign execution for a cosmetics brand's product launch.",
    image: "https://images.unsplash.com/photo-1599100605225-1687ac86576a?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const PortfolioPage = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="flex flex-col w-full">
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
      <section className="py-20 bg-white">
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
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-fade-right transition-opacity duration-1000 ${isImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
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
                    <Link to={`#${project.id}`}>
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
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                id={project.id}
                className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
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
                  <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
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
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/services">
                  View Services
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
