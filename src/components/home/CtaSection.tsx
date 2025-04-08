
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-900 text-center">
      <div className="container px-6 mx-auto max-w-4xl">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Let's collaborate to create a compelling brand presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full py-6 px-8 text-lg font-medium"
              asChild
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-6 px-8 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
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
