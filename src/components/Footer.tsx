
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-display font-bold tracking-tight">
                <img src="/logo.png" alt="Reserved Digital Branding" className="h-10" />
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              We are your digital branding agency & marketing partner, dedicated to elevating your brand presence across all platforms.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/reserveddigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/reservedbranding/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">{t.nav.home}</h3>
            <ul className="space-y-3">
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.about, path: "/about" },
                { name: t.nav.services, path: "/services" },
                { name: t.nav.portfolio, path: "/portfolio" },
                { name: t.nav.shop, path: "/shop" },
                { name: t.nav.contact, path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">{t.nav.services}</h3>
            <ul className="space-y-3">
              {[
                "Branding", 
                "Graphic Design", 
                "Web Design", 
                "Photography", 
                "Videography", 
                "Vehicle Branding",
                "Promotional Items"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">{t.shop.downloadable.title}</h3>
            <ul className="space-y-3">
              {t.shop.downloadable.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.link}
                    download
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <Download size={16} className="mr-2 text-primary" />
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="font-medium text-lg mt-8 mb-4">{t.common.contactUs}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">+263 775 353 142</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">info@reserveddigitalbranding.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Harare, Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Reserved Digital Branding. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="/sitemap.xml" className="hover:text-primary">Sitemap</a> | 
            <a href="/privacy-policy" className="ml-2 hover:text-primary">Privacy Policy</a> | 
            <a href="/terms-of-service" className="ml-2 hover:text-primary">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
