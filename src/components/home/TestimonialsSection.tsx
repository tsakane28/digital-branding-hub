
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
    <section className="py-24 bg-white dark:bg-black">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-4">
            What Clients Say
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">"{testimonial.content}"</p>
              <div>
                <p className="font-medium text-lg">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
