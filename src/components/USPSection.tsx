import { motion } from "framer-motion";
import { Award, Leaf, Shield, Flame } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Halal Served",
    description: "All our meats are certified Halal, prepared following traditional Islamic guidelines.",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
  },
  {
    icon: Leaf,
    title: "Gluten Free & Vegan",
    description: "Extensive menu options for dietary preferences. Ask our staff for personalized recommendations.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Flame,
    title: "Live Kitchen",
    description: "Watch our chefs prepare your meal in our open kitchen. Fresh ingredients, traditional techniques.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized for culinary excellence. Chef Mohan brings 40+ years of authentic Indian cooking.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const USPSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The Indian Kitchen Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 lg:p-8 card-hover text-center"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${feature.bgColor} mb-5`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
