
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  backgroundImage: string;
}

const services: Service[] = [
  {
    id: "branding",
    name: "Branding",
    description: "Create a distinctive brand identity that resonates with your audience and sets you apart from competitors.",
    backgroundImage: "/branding.jpg",
    icon: <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
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
    backgroundImage: "/graphic_design.jpg",
    icon: <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
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
    backgroundImage: "/FORESTRY EXBIHITIOM 10.jpg",
    icon: <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
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
    backgroundImage: "/We Meat Logo 3.jpg",
    icon: <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
    </div>
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-4">
            Our Core Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Comprehensive Digital Branding Solutions
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            We offer a full range of services to help your brand stand out in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                {service.icon}
                <h3 className="text-2xl font-semibold mt-6 mb-3">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{service.description}</p>
                <Link 
                  to={`/services#${service.id}`}
                  className="mt-auto text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-8"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
