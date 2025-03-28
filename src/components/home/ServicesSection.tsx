
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
