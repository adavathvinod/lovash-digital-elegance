import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import chefImage from "@/assets/chef-mohan.png";

const ChefSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <img
                src={chefImage}
                alt="Chef Mohan Parmar - Award-winning chef at Indian Kitchen Lovash"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant-lg"
                loading="lazy"
              />
            </div>
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:right-10 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-glow"
            >
              <div className="text-3xl font-display font-bold">40+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Meet Our Chef
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Chef Mohan Parmar
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Since 1983, Chef Mohan Parmar has been crafting authentic Indian cuisine that captures the essence of traditional recipes passed down through generations. His dedication to using fresh, quality ingredients and time-honored cooking techniques has earned Indian Kitchen Lovash its award-winning reputation.
              </p>
              <p>
                Born in Gujarat, India, Chef Mohan brings the rich culinary heritage of his homeland to every dish. From the tandoor oven to the aromatic curries, each preparation reflects his passion for authentic Indian flavors.
              </p>
            </div>

            {/* Quote */}
            <div className="relative bg-secondary rounded-2xl p-6 lg:p-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
              <blockquote className="relative z-10 font-display text-lg italic text-foreground pl-6">
                "Cooking is not just about feeding people. It's about sharing love, culture, and tradition with every bite."
              </blockquote>
              <cite className="block mt-4 text-sm text-muted-foreground not-italic pl-6">
                — Chef Mohan Parmar
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
