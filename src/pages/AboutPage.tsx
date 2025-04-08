
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Award, Target, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Edgar Simbarashe Mazorodze ",
    role: "Founder & Creative Director",
    bio: "With over 10 years of experience in branding and design, Edgar brings creative vision and strategic insight to every project.",
    image: "/public/simba.jpg"
  },
  {
    id: "2",
    name: "Andrew Huje ",
    role: "Lead Graphic Designer",
    bio: "Andrew combines technical expertise with an artistic eye to create stunning visual assets that capture brand essence.",
    image: "/public/andrew.jpg"
  },
  {
    id: "3",
    name: "Tsakane Shiri",
    role: "Web Development Lead",
    bio: "Tsakane specializes in creating beautiful, functional websites that deliver exceptional user experiences.",
    image: "/public/munashe.jpg"
  },
  // {
  //   id: "4",
  //   name: "Chido Marondera",
  //   role: "Marketing Specialist",
  //   bio: "Chido crafts effective marketing strategies that help brands connect with their target audiences and drive results.",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"
  // }
];

const values = [
  {
    icon: <Target className="h-6 w-6 text-[#0070c9]" />,
    title: "Strategic Thinking",
    description: "We approach every project with careful planning and strategic insight to achieve optimal results."
  },
  {
    icon: <Users className="h-6 w-6 text-[#0070c9]" />,
    title: "Client Partnership",
    description: "We view our clients as partners and collaborate closely to bring their vision to life."
  },
  {
    icon: <Award className="h-6 w-6 text-[#0070c9]" />,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of quality in everything we do."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#0070c9]" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical business practices."
  }
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Reserved Digital Branding was established to provide comprehensive branding solutions."
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Partnered with Dial-A-Gift to transform their brand identity."
  },
  {
    year: "2020",
    title: "Service Expansion",
    description: "Added web design and development to our service offerings."
  },
  {
    year: "2021",
    title: "Team Growth",
    description: "Expanded our team to include specialists in various design disciplines."
  },
  {
    year: "2022",
    title: "New Office",
    description: "Moved to a larger office space to accommodate our growing team."
  },
  {
    year: "2023",
    title: "Client Portfolio Growth",
    description: "Reached milestone of serving over 100 clients across various industries."
  }
];

const AboutPage = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white dark:bg-black">
      {/* Hero Section - Apple-style with large typography */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-center">
              About Reserved Digital Branding
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              A passionate team of creative professionals dedicated to helping brands stand out in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Clean, image-focused layout */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Our team working together" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h5 className="text-[#0070c9] font-medium mb-2">Our Story</h5>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                A Journey of Creative Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Reserved Digital Branding was founded in 2018 with a vision to create a digital branding agency that combines strategic thinking with creative excellence. What started as a small team with big dreams has grown into a comprehensive branding and marketing agency serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our journey has been defined by our commitment to helping businesses build strong, memorable brands that resonate with their audiences. We understand that in today's digital world, a compelling brand presence is essential for success, and we take pride in being the partner that helps businesses achieve this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Grid layout with subtle cards */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Our Values</h5>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Our core values shape our approach to work and our relationships with clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="px-8 py-10 bg-gray-50 dark:bg-neutral-900 rounded-3xl transition-all"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Large, premium image display */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Our Team</h5>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              Meet the Creative Minds
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Our talented team of professionals is passionate about creating exceptional brand experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#0070c9] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones - Clean, horizontal timeline */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h5 className="text-[#0070c9] font-medium mb-4">Our Journey</h5>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Tracing our path from humble beginnings to where we are today.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="grid md:grid-cols-[200px_1fr] gap-8 items-start"
              >
                <div className="text-[#0070c9] text-2xl font-semibold">{milestone.year}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full-width, Apple-style gradient */}
      <section className="py-24 bg-gradient-to-b from-[#0070c9] to-[#134e7c] text-white">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Ready to Create Something Amazing Together?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your brand vision to life with our creative expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white text-[#0070c9] hover:bg-white/90 rounded-full py-6 px-8 text-lg font-medium" 
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent text-white hover:bg-white/10 border border-white rounded-full py-6 px-8 text-lg font-medium"
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
