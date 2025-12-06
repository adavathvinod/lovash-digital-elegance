import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Leaf, Flame, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuCategories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "tandoor", name: "Tandoor Se" },
  { id: "curries", name: "Curries" },
  { id: "biryani", name: "Biryani & Rice" },
  { id: "south-indian", name: "South Indian" },
  { id: "breads", name: "Breads" },
  { id: "kids", name: "Kids Menu" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = {
  appetizers: [
    { name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: "$6.99", tags: ["vegan", "gf"] },
    { name: "Vegetable Pakora", description: "Mixed vegetables in chickpea batter, deep fried", price: "$7.99", tags: ["vegan", "gf"] },
    { name: "Chicken Tikka", description: "Boneless chicken marinated in yogurt and spices", price: "$12.99", tags: ["gf", "halal"] },
    { name: "Seekh Kebab", description: "Minced lamb skewers with herbs and spices", price: "$13.99", tags: ["gf", "halal"] },
    { name: "Paneer Tikka", description: "Cottage cheese cubes marinated and grilled", price: "$11.99", tags: ["gf"] },
    { name: "Fish Amritsari", description: "Battered fish fillets with Punjabi spices", price: "$14.99", tags: ["halal"] },
  ],
  tandoor: [
    { name: "Tandoori Chicken", description: "Half chicken marinated overnight, roasted in clay oven", price: "$16.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Lamb Chops", description: "Tender lamb chops with aromatic spices", price: "$24.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Chicken Malai Kebab", description: "Creamy chicken kebabs with cashew and cream", price: "$17.99", tags: ["gf", "halal"], spice: 1 },
    { name: "Tandoori Shrimp", description: "Jumbo shrimp marinated in tandoori spices", price: "$21.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Mixed Grill Platter", description: "Assortment of tandoor-grilled meats", price: "$29.99", tags: ["gf", "halal"], spice: 2 },
  ],
  curries: [
    { name: "Butter Chicken", description: "Tender chicken in creamy tomato sauce", price: "$17.99", tags: ["gf", "halal"], spice: 1 },
    { name: "Lamb Rogan Josh", description: "Kashmiri style lamb curry with aromatic spices", price: "$19.99", tags: ["gf", "halal"], spice: 3 },
    { name: "Palak Paneer", description: "Cottage cheese in creamy spinach gravy", price: "$15.99", tags: ["gf", "vegan"], spice: 1 },
    { name: "Chicken Tikka Masala", description: "Grilled chicken in rich masala sauce", price: "$17.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Goat Curry", description: "Traditional goat curry with bone-in pieces", price: "$21.99", tags: ["gf", "halal"], spice: 3 },
    { name: "Dal Makhani", description: "Black lentils slow-cooked with cream and butter", price: "$13.99", tags: ["gf", "vegan"], spice: 1 },
    { name: "Vegetable Korma", description: "Mixed vegetables in cashew cream sauce", price: "$14.99", tags: ["gf", "vegan"], spice: 1 },
  ],
  biryani: [
    { name: "Chicken Biryani", description: "Basmati rice layered with spiced chicken", price: "$18.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Lamb Biryani", description: "Aromatic rice with tender lamb pieces", price: "$21.99", tags: ["gf", "halal"], spice: 2 },
    { name: "Vegetable Biryani", description: "Mixed vegetables and rice with saffron", price: "$15.99", tags: ["gf", "vegan"], spice: 2 },
    { name: "Goat Biryani", description: "Hyderabadi style goat biryani", price: "$23.99", tags: ["gf", "halal"], spice: 3 },
  ],
  "south-indian": [
    { name: "Masala Dosa", description: "Crispy crepe filled with spiced potatoes", price: "$12.99", tags: ["gf", "vegan"], spice: 2 },
    { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "$10.99", tags: ["gf", "vegan"], spice: 1 },
    { name: "Uttapam", description: "Thick rice pancake with vegetables", price: "$11.99", tags: ["gf", "vegan"], spice: 1 },
    { name: "Chicken Chettinad", description: "Spicy chicken curry from Tamil Nadu", price: "$18.99", tags: ["gf", "halal"], spice: 4 },
  ],
  breads: [
    { name: "Naan", description: "Traditional leavened bread from tandoor", price: "$3.99", tags: [] },
    { name: "Garlic Naan", description: "Naan topped with fresh garlic and cilantro", price: "$4.99", tags: [] },
    { name: "Cheese Naan", description: "Naan stuffed with melted cheese", price: "$5.99", tags: [] },
    { name: "Roti", description: "Whole wheat flatbread", price: "$2.99", tags: ["vegan"] },
    { name: "Paratha", description: "Layered flaky bread", price: "$4.99", tags: [] },
    { name: "Peshwari Naan", description: "Sweet naan with coconut and raisins", price: "$5.99", tags: [] },
  ],
  kids: [
    { name: "Kid's Butter Chicken", description: "Mild butter chicken with rice", price: "$10.99", tags: ["gf", "halal"], spice: 0 },
    { name: "Kid's Chicken Nuggets", description: "Indian spiced chicken nuggets with fries", price: "$8.99", tags: ["halal"], spice: 0 },
    { name: "Kid's Paneer Tikka", description: "Mild grilled cottage cheese with naan", price: "$9.99", tags: ["gf"], spice: 0 },
    { name: "Kid's Pasta", description: "Pasta in mild Indian-spiced tomato sauce", price: "$8.99", tags: [], spice: 0 },
  ],
  desserts: [
    { name: "Gulab Jamun", description: "Deep-fried milk balls in sugar syrup", price: "$5.99", tags: [] },
    { name: "Kheer", description: "Traditional rice pudding with nuts", price: "$5.99", tags: ["gf"] },
    { name: "Mango Kulfi", description: "Indian ice cream with mango", price: "$6.99", tags: ["gf"] },
    { name: "Ras Malai", description: "Cottage cheese balls in sweetened milk", price: "$6.99", tags: ["gf"] },
  ],
};

const SpiceLevel = ({ level }: { level: number }) => {
  if (level === 0) return null;
  return (
    <div className="flex items-center gap-0.5" title={`Spice level: ${level}/4`}>
      {[...Array(4)].map((_, i) => (
        <Flame 
          key={i} 
          className={cn(
            "w-3 h-3",
            i < level ? "text-accent fill-accent" : "text-muted-foreground/30"
          )} 
        />
      ))}
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  return (
    <>
      <Helmet>
        <title>Menu | Indian Kitchen Lovash BYOB - Authentic Indian Cuisine</title>
        <meta 
          name="description" 
          content="Explore our extensive menu of authentic Indian dishes. From tandoor specialties to South Indian classics. Gluten-free, vegan, and Halal options available." 
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
              Our Menu
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Authentic Flavors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              Each dish is prepared fresh with traditional spices and techniques passed down through generations.
            </motion.p>
          </div>
        </section>

        {/* Category Tabs */}
        <div className="sticky top-16 z-30 bg-background border-b border-border shadow-sm">
          <div className="container-wide mx-auto px-4">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            {/* Dietary Legend */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <span className="badge-vegan flex items-center gap-1">
                <Leaf className="w-3 h-3" /> Vegan
              </span>
              <span className="badge-gf flex items-center gap-1">
                <Star className="w-3 h-3" /> Gluten Free
              </span>
              <span className="badge-halal flex items-center gap-1">
                100% Halal
              </span>
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-elegant-lg transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        {item.spice !== undefined && <SpiceLevel level={item.spice} />}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.includes("vegan") && (
                          <span className="badge-vegan text-xs">Vegan</span>
                        )}
                        {item.tags.includes("gf") && (
                          <span className="badge-gf text-xs">GF</span>
                        )}
                        {item.tags.includes("halal") && (
                          <span className="badge-halal text-xs">Halal</span>
                        )}
                      </div>
                    </div>
                    <span className="text-primary font-semibold text-lg">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Order CTA */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">Ready to order?</p>
              <Button variant="default" size="lg" asChild>
                <a href="https://order.indiankitchenlovash.com" target="_blank" rel="noopener noreferrer">
                  Order Online Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Menu;
