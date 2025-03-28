
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
