
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-right">
              <div className="max-w-md">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  <span>Contact Information</span>
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Let's Discuss Your Project
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ready to elevate your brand? Our team is here to help turn your vision into reality. 
                  Fill out the form or contact us directly using the information below.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+263 775 353 142</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">info@reserveddigitalbranding.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">Harare, Zimbabwe</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary rounded-xl">
                  <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-left">
              <div className="bg-secondry p-8 rounded-xl border border-border shadow-sm">
                <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Our Location</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to meet you in person to discuss your branding and marketing needs.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl h-[400px] animate-fade-up">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711152113!2d31.04149765771209!3d-17.82797038386203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706887e3b%3A0xa7f1260b62781a98!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1671656965305!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reserved Digital Branding Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {[
              {
                question: "What types of businesses do you work with?",
                answer: "We work with businesses of all sizes across various industries. Our clients range from startups and small businesses to established enterprises looking to refresh their brand or expand their digital presence."
              },
              {
                question: "How long does a typical branding project take?",
                answer: "The timeline varies depending on the scope and complexity of the project. A complete branding project typically takes 4-8 weeks, while individual services like logo design might take 2-3 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing is project-based and depends on the specific requirements and scope of work. We offer packages to suit different budgets and can also create custom quotes for specific needs. Contact us for a detailed quote based on your project."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer various maintenance and support packages to ensure your brand continues to thrive. This includes website maintenance, social media management, and marketing campaign support."
              },
              {
                question: "How do we get started with a project?",
                answer: "The process begins with an initial consultation where we discuss your goals, requirements, and vision. Based on this, we'll provide a proposal outlining our approach, timeline, and pricing. Once approved, we begin the creative process with regular updates and feedback sessions."
              }
            ].map((faq, index) => (
              <div key={index} className="py-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Ready to Start Your Branding Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Contact us today to schedule a consultation and discover how we can elevate your brand.
            </p>
            <div className="inline-block animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+2637753531425">
                  Call Us Now: +263 775 353 142
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
