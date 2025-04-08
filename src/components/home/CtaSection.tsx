
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-32 bg-white dark:bg-black text-center">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-5 tracking-tight">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10">
            Let's collaborate to create a compelling brand presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-8"
              asChild
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-gray-300 dark:border-gray-700 py-6 px-8"
              asChild
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
