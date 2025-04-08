
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">Welcome to Reserved Digital Branding</h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          We create compelling brand experiences through strategic design and creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full py-6 px-8 text-lg font-medium"
            asChild
          >
            <Link to="/home">
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-6 px-8 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="mt-16 max-w-5xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8659d8bde375?q=80&w=2802&auto=format&fit=crop&ixlib=rb-4.0.3" 
          alt="Digital Branding" 
          className="rounded-3xl shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default Index;
