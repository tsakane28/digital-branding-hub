
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart, Service } from "@/context/CartContext";

const services: Service[] = [
  {
    id: "branding",
    name: "Brand Identity Package",
    price: 1200,
    description: "Complete brand identity package including logo design, color palette, typography, brand guidelines, and basic marketing materials.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "graphic-design",
    name: "Graphic Design Services",
    price: 800,
    description: "Custom graphic design for marketing materials, social media graphics, brochures, flyers, and other visual content.",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "web-design",
    name: "Website Design & Development",
    price: 2500,
    description: "Custom responsive website design and development with modern UI/UX principles, optimized for performance and conversions.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "photography",
    name: "Professional Photography Session",
    price: 600,
    description: "Professional photography session for product, corporate, or brand imagery, including editing and delivery of high-resolution files.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "videography",
    name: "Video Production",
    price: 1800,
    description: "Professional video production services including concept development, filming, editing, and final delivery in multiple formats.",
    image: "/public/video_production.jpg"
  },
  {
    id: "vehicle-branding",
    name: "Vehicle Branding",
    price: 950,
    description: "Professional vehicle branding service including design, production, and application of high-quality vehicle wraps and graphics.",
    image: "/public/Motor-vehicle-branding.jpg"
  },
  {
    id: "promotional-items",
    name: "Promotional Items",
    price: 750,
    description: "Custom branded promotional items including apparel, stationery, and merchandise with your logo and brand elements.",
    image: "/public/hoodie.jpg"
  },
  {
    id: "social-media",
    name: "Social Media Management",
    price: 650,
    description: "Monthly social media management including content creation, scheduling, posting, and basic analytics reporting.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const packages = [
  {
    id: "essential",
    name: "Essential",
    price: 1999,
    description: "Perfect for small businesses and startups",
    features: [
      "Brand Logo Design",
      "Business Card Design",
      "Social Media Profile Setup",
      "Basic Brand Guidelines",
      "1 Round of Revisions"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: 3999,
    description: "Ideal for growing businesses",
    features: [
      "Everything in Essential",
      "Full Brand Identity System",
      "Website Design (5 pages)",
      "Social Media Graphics Package",
      "Email Signature Design",
      "3 Rounds of Revisions"
    ],
    recommended: true
  },
  {
    id: "premium",
    name: "Premium",
    price: 7999,
    description: "Comprehensive solution for established brands",
    features: [
      "Everything in Professional",
      "Custom Website Development",
      "Promotional Video (30 seconds)",
      "Print Materials Design",
      "Brand Strategy Session",
      "Social Media Strategy",
      "Unlimited Revisions"
    ]
  }
];

interface ActiveSectionProps {
  sectionId: string | null;
}

const ServicesPage = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { addToCart } = useCart();
  
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    // Check for hash in URL to scroll to specific service
    const hash = window.location.hash.replace("#", "");
    if (hash && serviceRefs.current[hash]) {
      setTimeout(() => {
        serviceRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "center" });
        setActiveSection(hash);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (service: Service) => {
    addToCart(service);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

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
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              Comprehensive Digital Branding Solutions
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Explore our range of services designed to elevate your brand presence and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-16 z-40 bg-blue/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container px-6 mx-auto">
          <div className="py-4 overflow-x-auto">
            <div className="flex space-x-6 min-w-max">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`text-sm font-medium whitespace-nowrap pb-1 ${
                    activeSection === service.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-slate-400 hover:text-sky-600"
                  }`}
                  onClick={() => {
                    serviceRefs.current[service.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    setActiveSection(service.id);
                  }}
                >
                  {service.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive range of branding and marketing services.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                ref={(el) => (serviceRefs.current[service.id] = el)}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-fade-right transition-opacity duration-1000 ${isImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
                    />
                  </div>
                </div>

                <div className={`space-y-6 animate-fade-left order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    <span>Service</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="text-2xl font-display font-bold">
                    {formatPrice(service.price)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => handleAddToCart(service)}>
                      <Plus size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Request Info
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Value Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Branding Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our carefully curated packages for comprehensive branding solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const packageService = {
                id: pkg.id,
                name: `${pkg.name} Branding Package`,
                price: pkg.price,
                description: pkg.description,
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
              };

              return (
                <div 
                  key={pkg.id} 
                  className={`
                    relative rounded-xl border bg-secondry shadow-sm transition-all duration-300 
                    hover:shadow-md animate-fade-up
                    ${pkg.recommended ? 'border-primary ring-1 ring-primary' : 'border-border'}
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 inset-x-0 flex justify-center">
                      <span className="px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-display font-bold">{formatPrice(pkg.price)}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                      <Button 
                        className={pkg.recommended ? "bg-primary hover:bg-primary/90" : ""}
                        onClick={() => {
                          addToCart(packageService);
                        }}
                      >
                        <Plus size={16} className="mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach ensures quality results and a smooth experience.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Analysis",
                  description: "We begin by understanding your business, goals, target audience, and competitive landscape to inform our strategy."
                },
                {
                  title: "Strategy Development",
                  description: "Based on our findings, we develop a comprehensive branding and marketing strategy tailored to your objectives."
                },
                {
                  title: "Creative Execution",
                  description: "Our creative team brings the strategy to life through design, content creation, and development."
                },
                {
                  title: "Implementation",
                  description: "We implement the brand assets and marketing materials across all relevant platforms and channels."
                },
                {
                  title: "Evaluation & Refinement",
                  description: "We continuously monitor performance and make refinements to optimize results."
                }
              ].map((step, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 mt-1 md:left-1/2 md:-ml-6">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`ml-20 md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Contact us today to discuss your project or explore our service packages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary text-white border-white hover:bg-white/10" asChild>
                <Link to="/cart">
                  View Cart
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

export default ServicesPage;
