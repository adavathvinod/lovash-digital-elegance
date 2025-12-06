import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import foodCollage from "@/assets/food-collage.png";

const CateringCTA = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Catering Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bring Indian Kitchen
              <span className="text-primary block">to Your Event</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, our catering team delivers the same award-winning flavors and impeccable service that define Indian Kitchen Lovash. Customized menus available for all dietary needs.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Corporate Events & Office Lunches",
                "Wedding Receptions & Celebrations",
                "Private Parties & Family Gatherings",
                "Full-Service or Drop-Off Available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/catering">
                  Explore Catering
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="goldOutline" size="lg" asChild>
                <a href="tel:2159253881">
                  <Phone className="w-5 h-5" />
                  Call to Inquire
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={foodCollage}
                alt="Indian Kitchen Lovash catering spread featuring a variety of authentic dishes"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CateringCTA;
