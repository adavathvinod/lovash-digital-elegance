import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dishCurry from "@/assets/dish-curry.png";
import dishPlatter from "@/assets/dish-platter.png";
import dishThali from "@/assets/dish-thali.png";

const menuCategories = [
  {
    title: "Signature Curries",
    description: "Rich, aromatic curries made with traditional spices and slow-cooked to perfection.",
    image: dishCurry,
    link: "/menu#curries",
  },
  {
    title: "Tandoor Specialties",
    description: "From the clay oven - succulent kebabs, naans, and grilled delicacies.",
    image: dishPlatter,
    link: "/menu#tandoor",
  },
  {
    title: "Complete Thali",
    description: "Experience a traditional Indian feast with our carefully curated thali platters.",
    image: dishThali,
    link: "/menu#thali",
  },
];

const MenuPreview = () => {
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
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Taste the Tradition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive menu featuring authentic North and South Indian dishes, prepared fresh daily with the finest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={category.link} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-background shadow-elegant mb-4">
                  <div className="aspect-square p-8 flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="elegant" size="lg" asChild>
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
