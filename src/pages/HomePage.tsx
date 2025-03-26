
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Scene3D from "@/components/Scene3D";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    id: "branding",
    name: "Branding",
    description: "Create a distinctive brand identity that resonates with your audience and sets you apart from competitors.",
    icon: <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "Eye-catching visuals and graphic elements that communicate your brand message effectively.",
    icon: <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 3v12"></path>
        <path d="m8 11 4 4 4-4"></path>
        <path d="M8 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path>
        <path d="M2 19h20"></path>
      </svg>
    </div>
  },
  {
    id: "web-design",
    name: "Web Design",
    description: "Beautiful, responsive websites that provide excellent user experience and drive conversions.",
    icon: <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    </div>
  },
  {
    id: "photography",
    name: "Photography",
    description: "Professional photography that captures your brand essence and appeals to your target audience.",
    icon: <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
    </div>
  },
];

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director, Dial-A-Gift",
    content: "Reserved Digital Branding transformed our online presence. Their attention to detail and creative approach helped us connect with our audience in ways we never imagined.",
    rating: 5,
  },
  {
    id: "2",
    name: "David Moyo",
    role: "CEO, Blue Water Fisheries",
    content: "The team at Reserved Digital Branding are absolute professionals. Their branding strategy and design execution exceeded our expectations and delivered real business results.",
    rating: 5,
  },
  {
    id: "3",
    name: "Tendai Sithole",
    role: "Founder, Sithole Legal Counsel",
    content: "Working with Reserved Digital Branding has been a game-changer for our firm. Their comprehensive approach to our brand identity has positioned us as leaders in our field.",
    rating: 5,
  },
];

const features = [
  "Professional brand strategy",
  "Custom design solutions",
  "Responsive web development",
  "Photography and videography",
  "Social media management",
  "Marketing campaigns",
  "Print and digital media",
  "Vehicle branding",
];

const recentProjects = [
  {
    id: "legal-counsel",
    title: "Legal Firm Rebrand",
    client: "Sithole Legal Counsel",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    type: "Brand Identity"
  },
  {
    id: "gift-ecommerce",
    title: "E-commerce Platform",
    client: "Dial-A-Gift",
    image: "https://images.unsplash.com/photo-1627843240167-b1f9309a259d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3",
    type: "Web Development"
  },
  {
    id: "beauty-brand",
    title: "Beauty Brand Launch",
    client: "The Face Dresser",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
    type: "Branding & Social Media"
  }
];

const HomePage = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary -z-10 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-br from-primary/5 to-secondary/50 dark:from-primary/10 dark:to-background/80"></div>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-red/10 dark:bg-neon-red/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-8 animate-fade-right">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 dark:bg-primary/20 dark:neon-text-red">
                  <span>Your Digital Branding Agency</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight dark:neon-text-red">
                  We Are Your Digital Branding Agency & Marketing Partner
                </h1>
                <p className="text-lg text-muted-foreground">
                  Reserved Digital Branding helps businesses create memorable brand experiences
                  through strategic design, digital marketing, and creative solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="dark:neon-glow">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="dark:neon-border">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-3">Trusted by organizations like:</p>
                <div className="flex flex-wrap gap-6">
                  <span className="text-muted-foreground/70 font-medium">Dial-A-Gift</span>
                  <span className="text-muted-foreground/70 font-medium">The Face Dresser</span>
                  <span className="text-muted-foreground/70 font-medium">Sithole Legal</span>
                </div>
              </div>
            </div>

            <div className="perspective-container h-[400px] animate-fade-left">
              <Scene3D className="w-full h-full transform-3d" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
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
                poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                muted
                loop
              >
                <source src="https://player.vimeo.com/external/552651144.sd.mp4?s=16bd59c0f21ddaf93bebd95cf1144e5d222605ad&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
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
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
              <span>Our Core Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
              Comprehensive Digital Branding Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a full range of services to help your brand stand out in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card p-6 animate-fade-up dark:border dark:border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.icon}
                <h3 className="text-xl font-medium mt-6 mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors dark:neon-text-blue"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="dark:neon-glow">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                key={project.id}
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

      {/* Features Section */}
      <section className="py-20 bg-secondary relative overflow-hidden dark:bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 dark:bg-neon-red/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
                Elevate Your Brand with Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We blend creativity with strategic thinking to deliver branding solutions that make a lasting impression.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-center space-x-3 animate-fade-right"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary dark:text-neon-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild size="lg" className="dark:neon-glow">
                  <Link to="/about">More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-left floating">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3" 
                  alt="Creative team working" 
                  className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 apple-card dark:neon-border">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="font-medium">5.0 (120+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-card">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 dark:bg-primary/20 dark:neon-text-red">
              <span>What Clients Say</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:neon-text-red">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={cn(
                  "relative bg-white dark:bg-background/40 dark:backdrop-blur-xl border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-up apple-card",
                  index === 1 ? "md:translate-y-6" : ""
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium dark:bg-primary/20 dark:text-neon-red">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white dark:bg-black dark:border-t dark:border-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden dark:opacity-40">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up dark:neon-text-red">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Let's collaborate to create a compelling brand presence that resonates with your audience and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" variant="secondary" asChild className="dark:neon-glow">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 dark:neon-border" asChild>
                <Link to="/contact">
                  Get Started
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

export default HomePage;
