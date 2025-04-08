
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold mb-8">Welcome to Reserved Digital Branding</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We create compelling brand experiences through strategic design and creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-8"
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
            className="rounded-full border-gray-300 dark:border-gray-700 py-6 px-8"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80" 
          alt="Digital Branding" 
          className="rounded-2xl shadow-lg max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Index;
