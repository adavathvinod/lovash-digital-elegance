import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import ChefSection from "@/components/ChefSection";
import MenuPreview from "@/components/MenuPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CateringCTA from "@/components/CateringCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Indian Kitchen Lovash BYOB | Award-Winning Authentic Indian Restaurant Philadelphia</title>
        <meta 
          name="description" 
          content="Experience award-winning authentic Indian cuisine at Indian Kitchen Lovash BYOB in Philadelphia. Chef Mohan Parmar's 40+ years of expertise. 100% Halal, Gluten Free & Vegan options." 
        />
        <meta name="keywords" content="Indian restaurant Philadelphia, Halal Indian food, BYOB restaurant, South Street dining, authentic Indian cuisine, Chef Mohan Parmar" />
        <link rel="canonical" href="https://indiankitchenlovash.com" />
        
        <meta property="og:title" content="Indian Kitchen Lovash BYOB | Award-Winning Indian Restaurant" />
        <meta property="og:description" content="Award-winning authentic Indian cuisine in Philadelphia. 100% Halal, Gluten Free & Vegan options. BYOB welcome." />
        <meta property="og:type" content="restaurant" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Indian Kitchen Lovash BYOB",
            "image": "https://indiankitchenlovash.com/hero-bg.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "236 & 238 South Street",
              "addressLocality": "Philadelphia",
              "addressRegion": "PA",
              "postalCode": "19147",
              "addressCountry": "US"
            },
            "telephone": "(215) 925-3881",
            "servesCuisine": "Indian",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "11:30",
                "closes": "22:00"
              }
            ],
            "sameAs": ["https://youtu.be/SO0t4s3HuGU"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <USPSection />
          <ChefSection />
          <MenuPreview />
          <TestimonialsSection />
          <CateringCTA />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
