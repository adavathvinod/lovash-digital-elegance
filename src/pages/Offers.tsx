import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Gift, Mail, Percent, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    title: "Weekday Lunch Special",
    description: "Enjoy 15% off all lunch orders Monday through Friday, 11:30 AM - 3:00 PM.",
    badge: "15% OFF",
    terms: "Dine-in only. Cannot be combined with other offers.",
  },
  {
    title: "BYOB Every Day",
    description: "Bring your own wine or beer - no corkage fee! Perfect for celebrations.",
    badge: "No Corkage",
    terms: "Please drink responsibly. ID required.",
  },
  {
    title: "Catering Discount",
    description: "Book catering for 50+ guests and receive a complimentary dessert platter.",
    badge: "FREE DESSERT",
    terms: "Minimum order value applies. Advance booking required.",
  },
];

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Offers & Gift Cards | Indian Kitchen Lovash BYOB Philadelphia</title>
        <meta 
          name="description" 
          content="Explore special offers, promotions, and gift cards at Indian Kitchen Lovash BYOB. Join our club for exclusive deals and updates." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="bg-charcoal text-cream py-20 px-4">
          <div className="container-wide mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block"
            >
              Special Offers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Deals & Gift Cards
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              Discover our current promotions and share the gift of authentic Indian cuisine.
            </motion.p>
          </div>
        </section>

        {/* Current Promotions */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Current Promotions
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {promotions.map((promo, index) => (
                <motion.div
                  key={promo.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {promo.badge}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Percent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <p className="text-xs text-muted-foreground italic">{promo.terms}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Cards */}
        <section className="section-padding bg-secondary">
          <div className="container-wide mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">Perfect Gift</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Give the Gift of Flavor
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Share the experience of authentic Indian cuisine with friends and family. Our gift cards are perfect for any occasion.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Available in any denomination",
                    "Never expires",
                    "Valid for dine-in and takeout",
                    "Redeemable for catering orders",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <Star className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="lg">
                  Purchase Gift Card
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-saffron-dark rounded-2xl p-8 text-primary-foreground shadow-glow">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <p className="text-sm opacity-80">Gift Card</p>
                      <h3 className="font-display text-2xl font-bold">Indian Kitchen Lovash</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="font-display font-bold text-lg">IK</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">Value</p>
                    <p className="font-display text-4xl font-bold">$50.00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Club */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal text-cream rounded-2xl p-8 lg:p-12 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Newsletter</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Join Our Club
              </h2>
              <p className="text-cream/70 max-w-xl mx-auto mb-8">
                Be the first to know about exclusive offers, new menu items, special events, and more. Subscribe to our mailing list today.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg text-cream placeholder:text-cream/50 focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="default">
                  Subscribe
                </Button>
              </form>
              <p className="text-cream/50 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Offers;
