import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely the best Indian food in Philadelphia! Chef Mohan's butter chicken is legendary. We've been coming here for over a decade and it never disappoints.",
    date: "November 2024",
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The live kitchen is such a unique experience. Watching the chefs work the tandoor while enjoying fresh naan is incredible. BYOB makes it even better!",
    date: "October 2024",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Finally, authentic Indian food that reminds me of home! The thali is generous and the spice levels are perfect. Highly recommend for anyone craving real Indian flavors.",
    date: "September 2024",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Great for our family - they have excellent vegetarian and vegan options. The staff is always accommodating with dietary restrictions. A gem on South Street!",
    date: "August 2024",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4 md:px-12"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl font-display italic text-cream/90 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-cream">{testimonials[currentIndex].name}</p>
                <p className="text-cream/60 text-sm">{testimonials[currentIndex].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-cream/20 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-cream/20 hover:border-primary hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-cream/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
