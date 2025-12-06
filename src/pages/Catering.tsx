import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, Utensils, Users, Calendar, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import foodCollage from "@/assets/food-collage.png";

const cateringPackages = [
  {
    title: "Office Lunch",
    description: "Perfect for corporate meetings and team lunches",
    servings: "10-50 guests",
    includes: ["Choice of 2 curries", "Rice & Naan", "Salad", "Dessert"],
  },
  {
    title: "Party Package",
    description: "Ideal for celebrations and private parties",
    servings: "25-100 guests",
    includes: ["Choice of 3 curries", "Appetizers", "Biryani", "Breads", "Dessert", "Beverages"],
  },
  {
    title: "Wedding Feast",
    description: "Full-service catering for your special day",
    servings: "100+ guests",
    includes: ["Customized menu", "Live cooking stations", "Full service staff", "Premium desserts", "Decor coordination"],
  },
];

const Catering = () => {
  return (
    <>
      <Helmet>
        <title>Catering Services | Indian Kitchen Lovash BYOB Philadelphia</title>
        <meta 
          name="description" 
          content="Full-service Indian catering in Philadelphia. Corporate events, weddings, and private parties. 100% Halal, Gluten Free & Vegan options available." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="relative bg-charcoal text-cream py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={foodCollage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container-wide mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block"
            >
              Catering Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Bring the Feast to You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              From intimate gatherings to grand celebrations, we bring the authentic flavors of India to your event.
            </motion.p>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Catering Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All packages can be customized to meet dietary requirements and preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cateringPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {index === 0 ? <Utensils className="w-6 h-6 text-primary" /> : 
                     index === 1 ? <Users className="w-6 h-6 text-primary" /> : 
                     <Calendar className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <p className="text-primary font-medium mb-4">{pkg.servings}</p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-elegant-lg">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(215) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background">
                    <option>10-25 guests</option>
                    <option>25-50 guests</option>
                    <option>50-100 guests</option>
                    <option>100+ guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background">
                    <option>Corporate Event</option>
                    <option>Wedding/Reception</option>
                    <option>Birthday Party</option>
                    <option>Private Gathering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us more about your event and any dietary requirements..."
                  />
                </div>
                <div className="md:col-span-2">
                  <Button variant="default" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <a href="tel:2159253881" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  (215) 925-3881
                </a>
                <a href="mailto:catering@indiankitchenlovash.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  catering@indiankitchenlovash.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Catering;
