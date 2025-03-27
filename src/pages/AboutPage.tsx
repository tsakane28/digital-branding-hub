
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
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Strategic Thinking",
    description: "We approach every project with careful planning and strategic insight to achieve optimal results."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Client Partnership",
    description: "We view our clients as partners and collaborate closely to bring their vision to life."
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of quality in everything we do."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
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

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsImagesLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
              <span>About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              We are Reserved Digital Branding
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              A passionate team of creative professionals dedicated to helping brands stand out in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`relative animate-fade-right transition-opacity duration-1000 ${isImagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/public/about_thumb_1.png" 
                  alt="Our team working together" 
                  className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4">
                <p className="text-lg font-medium">Established 2018</p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-left">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                A Journey of Creative Excellence
              </h2>
              <p className="text-muted-foreground">
                Reserved Digital Branding was founded in 2018 with a vision to create a digital branding agency that combines strategic thinking with creative excellence. What started as a small team with big dreams has grown into a comprehensive branding and marketing agency serving clients across various industries.
              </p>
              <p className="text-muted-foreground">
                Our journey has been defined by our commitment to helping businesses build strong, memorable brands that resonate with their audiences. We understand that in today's digital world, a compelling brand presence is essential for success, and we take pride in being the partner that helps businesses achieve this.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've expanded our services to provide comprehensive branding solutions that address every aspect of a brand's presence, from visual identity to digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape our approach to work and our relationships with clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-secondry p-6 rounded-xl border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondry">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Meet the Creative Minds
            </h2>
            <p className="text-lg text-muted-foreground">
              Our talented team of professionals is passionate about creating exceptional brand experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-secondry rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`object-cover w-full h-full pixelated-load ${isImagesLoaded ? 'loaded' : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Key Milestones
            </h2>
            <p className="text-lg text-muted-foreground">
              Tracing our path from humble beginnings to where we are today.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-start gap-8 animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="lg:w-1/2 flex lg:justify-end">
                    <div className={`bg-secondry p-6 rounded-xl border border-border shadow-sm w-full relative ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <div className="absolute top-6 lg:top-1/2 -left-4 lg:left-auto lg:-right-10 lg:transform lg:-translate-y-1/2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                      <span className="text-primary font-medium">{milestone.year}</span>
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-up">
              Ready to Create Something Amazing Together?
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Let's collaborate to bring your brand vision to life with our creative expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
