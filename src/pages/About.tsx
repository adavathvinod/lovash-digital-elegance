import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, Clock, Leaf, Shield, Flame, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChefSection from "@/components/ChefSection";
import chefImage from "@/assets/chef-mohan.png";

const milestones = [
  { year: "1983", title: "The Beginning", description: "Chef Mohan Parmar opens Indian Kitchen on South Street, bringing authentic Indian flavors to Philadelphia." },
  { year: "1990", title: "Expanding Horizons", description: "Added South Indian cuisine to the menu, becoming one of the few restaurants in the city to offer both North and South Indian dishes." },
  { year: "2005", title: "Award Recognition", description: "Received multiple culinary awards for excellence in authentic Indian cuisine preparation." },
  { year: "2015", title: "Lovash BYOB", description: "Expanded to include the adjoining space, creating the full Indian Kitchen Lovash BYOB experience." },
  { year: "Today", title: "40+ Years Strong", description: "Continuing the legacy of authentic Indian cooking, now serving second and third-generation customers." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Indian Kitchen Lovash BYOB - Our Story Since 1983</title>
        <meta 
          name="description" 
          content="Learn about Chef Mohan Parmar and the 40+ year legacy of Indian Kitchen Lovash BYOB. Award-winning authentic Indian cuisine in Philadelphia since 1983." 
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
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              A Legacy of Flavor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              Four decades of bringing authentic Indian cuisine to Philadelphia's South Street.
            </motion.p>
          </div>
        </section>

        {/* Chef Section */}
        <ChefSection />

        {/* Values */}
        <section className="section-padding bg-secondary">
          <div className="container-wide mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "100% Halal", description: "All our meats are certified Halal, ensuring the highest standards of preparation." },
                { icon: Leaf, title: "Fresh Ingredients", description: "We source the freshest ingredients and authentic spices for every dish." },
                { icon: Flame, title: "Live Kitchen", description: "Watch your meal being prepared in our open kitchen with traditional techniques." },
                { icon: Award, title: "Award-Winning", description: "Recognized for culinary excellence by food critics and loyal customers alike." },
                { icon: Heart, title: "Family Tradition", description: "Recipes passed down through generations, cooked with love and care." },
                { icon: Clock, title: "Consistency", description: "40+ years of the same authentic taste that keeps customers coming back." },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-primary font-bold text-xl">{milestone.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
