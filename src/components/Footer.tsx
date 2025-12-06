import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                IK
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Indian Kitchen</h3>
                <p className="text-xs text-cream/60 tracking-widest uppercase">Lovash BYOB</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Award-winning authentic Indian cuisine since 1983. Experience the rich flavors of India in the heart of Philadelphia.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-emerald/20 text-emerald text-xs rounded">100% Halal</span>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">GF Available</span>
              <span className="px-2 py-1 bg-emerald/20 text-emerald text-xs rounded">Vegan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Menu", href: "/menu" },
                { name: "Catering Services", href: "/catering" },
                { name: "Gallery", href: "/gallery" },
                { name: "About Chef Mohan", href: "/about" },
                { name: "Gift Cards", href: "/offers" },
                { name: "Join Our Club", href: "/offers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-cream/80">
                  236 & 238 South Street<br />
                  Philadelphia, PA 19147
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:2159253881" className="text-sm text-cream/80 hover:text-primary transition-colors">
                  (215) 925-3881
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@indiankitchenlovash.com" className="text-sm text-cream/80 hover:text-primary transition-colors">
                  info@indiankitchenlovash.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-cream/80">
                  Sun-Mon, Wed-Sat: 11:30 AM - 10:00 PM<br />
                  <span className="text-accent">Closed Tuesday</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Join Our Club</h4>
            <p className="text-cream/70 text-sm mb-4">
              Subscribe to receive exclusive offers, new menu updates, and special event invitations.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg text-sm placeholder:text-cream/50 focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="default" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtu.be/SO0t4s3HuGU" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-wide mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Indian Kitchen Lovash BYOB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
