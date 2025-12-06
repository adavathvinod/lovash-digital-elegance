import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dishCurry from "@/assets/dish-curry.png";
import dishPlatter from "@/assets/dish-platter.png";
import dishThali from "@/assets/dish-thali.png";
import dishOkra from "@/assets/dish-okra.png";
import kidsPlate from "@/assets/kids-plate.png";
import dessertsBanner from "@/assets/desserts-banner.png";
import foodCollage from "@/assets/food-collage.png";

const galleryImages = [
  { src: dishThali, alt: "Traditional Indian Thali", category: "food" },
  { src: dishCurry, alt: "Authentic Curry Dish", category: "food" },
  { src: dishPlatter, alt: "Mixed Platter", category: "food" },
  { src: dishOkra, alt: "Bhindi Masala", category: "food" },
  { src: kidsPlate, alt: "Kids Menu", category: "food" },
  { src: dessertsBanner, alt: "Indian Desserts", category: "food" },
  { src: foodCollage, alt: "Restaurant Food Selection", category: "restaurant" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <>
      <Helmet>
        <title>Gallery | Indian Kitchen Lovash BYOB - Photos & Videos</title>
        <meta 
          name="description" 
          content="Explore our gallery of authentic Indian cuisine photos and videos. See the vibrant dishes prepared fresh daily at Indian Kitchen Lovash BYOB Philadelphia." 
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
              Gallery
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Visual Feast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              Experience the colors and artistry of our authentic Indian cuisine.
            </motion.p>
          </div>
        </section>

        {/* Tabs */}
        <div className="border-b border-border bg-background">
          <div className="container-wide mx-auto px-4">
            <div className="flex gap-8 py-4">
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex items-center gap-2 py-2 font-medium transition-colors ${
                  activeTab === "photos" 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Photos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 py-2 font-medium transition-colors ${
                  activeTab === "videos" 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Video className="w-4 h-4" />
                Videos
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            {activeTab === "photos" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant-lg"
                >
                  <iframe
                    src="https://www.youtube.com/embed/SO0t4s3HuGU"
                    title="Indian Kitchen Lovash BYOB Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
                <p className="text-center text-muted-foreground mt-6">
                  Discover the story behind Indian Kitchen Lovash BYOB
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 p-2 text-cream hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
