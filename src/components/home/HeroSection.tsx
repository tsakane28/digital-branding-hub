
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-32 overflow-hidden bg-white dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-5">
            Your Digital Branding Agency
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto">
            We Are Your Digital Branding Agency & Marketing Partner
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Reserved Digital Branding helps businesses create memorable brand experiences
            through strategic design, digital marketing, and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-8"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-gray-300 dark:border-gray-700 py-6 px-8"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="pt-2 mb-16">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by organizations like:</p>
            <div className="flex flex-wrap justify-center gap-10">
              <img src="/velvet.png" alt="Velvet" className="h-8 sm:h-10 opacity-70" />
              <img src="/Daruler.png" alt="Daruler" className="h-8 sm:h-10 opacity-70" />
              <img src="/hangover.png" alt="Hangover" className="h-8 sm:h-10 opacity-70" />
            </div>
          </div>
        </div>

        <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" 
            alt="Digital Branding" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
