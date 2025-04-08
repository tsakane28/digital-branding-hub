
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-4">
                Why Choose Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                Elevate Your Brand with Our Expertise
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">
                We blend creativity with strategic thinking to deliver branding solutions that make a lasting impression.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-8"
                asChild
              >
                <Link to="/about">More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80" 
                alt="Creative team working" 
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">5.0 (120+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
