import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-cream text-sm font-medium">Award-Winning Cuisine Since 1983</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Authentic Indian
            <span className="block text-primary mt-2">Flavors, Perfected</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Experience the rich traditions of Indian cuisine crafted by Award-Winning Chef Mohan Parmar in our live kitchen. BYOB welcome.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" asChild>
              <a href="https://order.indiankitchenlovash.com" target="_blank" rel="noopener noreferrer">
                Order Online
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#reservations">
                Make a Reservation
              </a>
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-cream/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>236 South Street, Philadelphia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Open 11:30 AM - 10:00 PM</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
