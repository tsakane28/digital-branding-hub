
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <div className="flex-grow flex items-center justify-center">
        <div className="container px-6 py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-display font-bold text-primary mb-6 animate-fade-up">404</h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Button size="lg" asChild>
                <Link to="/">
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft size={18} className="mr-2" />
                  Go Back
                </button>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
