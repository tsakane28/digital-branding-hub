
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
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Hero Section - Large, simple text with generous spacing */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Clean grid layout */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="max-w-md">
                <h5 className="text-[#0070c9] font-medium mb-4">Contact Information</h5>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Let's Discuss Your Project
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                  Ready to elevate your brand? Our team is here to help turn your vision into reality. 
                  Fill out the form or contact us directly using the information below.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-5">
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f7] dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#0070c9]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+263 775 353 142</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f7] dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#0070c9]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@reserveddigitalbranding.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f7] dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#0070c9]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">Harare, Zimbabwe</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-8">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-300 dark:border-gray-700 focus:border-[#0070c9] focus:ring-[#0070c9] h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                        className="rounded-xl border-gray-300 dark:border-gray-700 focus:border-[#0070c9] focus:ring-[#0070c9] h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-300 dark:border-gray-700 focus:border-[#0070c9] focus:ring-[#0070c9] h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-300 dark:border-gray-700 focus:border-[#0070c9] focus:ring-[#0070c9] h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                      className="rounded-xl border-gray-300 dark:border-gray-700 focus:border-[#0070c9] focus:ring-[#0070c9] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#0070c9] hover:bg-[#0070c9]/90 text-white rounded-full py-6 font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full-width, cleaner presentation */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Our Location</h5>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              We'd love to meet you in person to discuss your branding and marketing needs.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg h-[500px]">
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

      {/* FAQ Section - Clean, simple accordion style */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">FAQs</h5>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
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
              <div key={index} className="py-8">
                <h3 className="text-2xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple-style gradient */}
      <section className="py-24 bg-gradient-to-b from-[#0070c9] to-[#134e7c] text-white">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Ready to Start Your Branding Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how we can elevate your brand.
          </p>
          <div className="inline-block">
            <Button 
              size="lg" 
              className="bg-white text-[#0070c9] hover:bg-white/90 rounded-full py-6 px-8 text-lg font-medium" 
              asChild
            >
              <a href="tel:+2637753531425">
                Call Us Now: +263 775 353 142
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
