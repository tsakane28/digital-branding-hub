
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart, Service } from "@/context/CartContext";
import VideoBackground from "@/components/VideoBackground";

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
    toast.success(`${service.name} added to cart`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Hero Section with video background */}
      <section className="relative min-h-screen flex items-center">
        <VideoBackground 
          videoSrc="/video.mp4" 
          overlayOpacity={0.5}
          overlayColor="#000000"
          posterImage="/graphic_design.jpg"
        />
        
        <div className="container px-6 mx-auto relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
              Comprehensive Digital Branding Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Explore our range of services designed to elevate your brand presence and drive business growth.
            </p>
            <Button 
              className="bg-white text-[#0070c9] hover:bg-white/90 rounded-full py-6 px-8 text-lg font-medium"
              asChild
            >
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Navigation - Apple-style sticky tabs */}
      <section id="services" className="sticky top-16 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="py-4 overflow-x-auto">
            <div className="flex space-x-8 min-w-max justify-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`text-base font-medium whitespace-nowrap pb-1 ${
                    activeSection === service.id
                      ? "text-[#0070c9] border-b-2 border-[#0070c9]"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#0070c9]"
                  }`}
                  onClick={() => {
                    serviceRefs.current[service.id]?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      {/* Individual Services with Image Backgrounds */}
      <section className="py-24">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Browse our comprehensive range of branding and marketing services.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                ref={(el) => (serviceRefs.current[service.id] = el)}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h5 className="text-[#0070c9] font-medium">Service</h5>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-3xl font-semibold mb-8">
                    {formatPrice(service.price)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => handleAddToCart(service)}
                      className="bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full py-6 px-8 text-lg font-medium"
                    >
                      <Plus size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-6 px-8 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
                      asChild
                    >
                      <Link to="/contact">
                        Request Info
                        <ArrowRight size={18} className="ml-2" />
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
      <section className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Value Packages</h5>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Branding Packages
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
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
                    relative rounded-3xl bg-white dark:bg-black shadow-sm transition-all duration-300 
                    hover:shadow-lg p-8
                    ${pkg.recommended ? 'ring-2 ring-[#0070c9]' : ''}
                  `}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 inset-x-0 flex justify-center">
                      <span className="px-4 py-1 text-sm font-medium text-white bg-[#0070c9] rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="pt-6">
                    <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-semibold">{formatPrice(pkg.price)}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-[#0070c9] flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                      <Button 
                        className={`
                          ${pkg.recommended ? 'bg-[#0070c9]' : 'bg-[#0070c9]'} 
                          hover:bg-[#0070c9]/90 text-white rounded-full py-6 text-lg font-medium
                        `}
                        onClick={() => {
                          handleAddToCart(packageService);
                        }}
                      >
                        <Plus size={18} className="mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-6 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900" 
                        asChild
                      >
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
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Our Process</h5>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Our structured approach ensures quality results and a smooth experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
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
              <div 
                key={index}
                className="rounded-3xl bg-gray-50 dark:bg-neutral-900 p-8 flex flex-col h-full"
              >
                <div className="h-12 w-12 rounded-full bg-[#0070c9] flex items-center justify-center text-white font-medium text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0070c9] to-[#134e7c] text-white">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project or explore our service packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white text-[#0070c9] hover:bg-white/90 rounded-full py-6 px-8 text-lg font-medium" 
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent text-white hover:bg-white/10 border border-white rounded-full py-6 px-8 text-lg font-medium"
              asChild
            >
              <Link to="/cart">
                View Cart
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
