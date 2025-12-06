import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Catering", href: "/catering" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-charcoal text-cream py-2">
        <div className="container-wide mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:2159253881" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (215) 925-3881
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              236 South Street, Philadelphia PA
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="px-2 py-1 bg-emerald/20 text-emerald rounded">100% Halal</span>
            <span className="px-2 py-1 bg-primary/20 text-primary rounded">Gluten Free Available</span>
            <span className="px-2 py-1 bg-emerald/20 text-emerald rounded">Vegan Options</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        )}
      >
        <nav className="container-wide mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
              IK
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-semibold text-foreground leading-tight">
                Indian Kitchen
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Lovash BYOB
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "link-underline text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="goldOutline" size="sm" asChild>
              <a href="#reservations">Reservations</a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://order.indiankitchenlovash.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "py-2 text-lg font-medium transition-colors",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="goldOutline" className="w-full" asChild>
                    <a href="#reservations">Reservations</a>
                  </Button>
                  <Button variant="default" className="w-full" asChild>
                    <a href="https://order.indiankitchenlovash.com" target="_blank" rel="noopener noreferrer">
                      Order Online
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
