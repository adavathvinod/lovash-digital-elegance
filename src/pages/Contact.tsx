import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Indian Kitchen Lovash BYOB Philadelphia</title>
        <meta 
          name="description" 
          content="Contact Indian Kitchen Lovash BYOB. Located at 236 South Street, Philadelphia. Call (215) 925-3881 for reservations and inquiries." 
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
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream/70 max-w-2xl mx-auto"
            >
              We'd love to hear from you. Reach out for reservations, catering inquiries, or just to say hello.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Visit Our Restaurant
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-elegant">
                      <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          236 & 238 South Street<br />
                          Philadelphia, PA 19147
                        </p>
                        <a 
                          href="https://maps.google.com/maps?ll=39.941244,-75.147071&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5058873877330649298"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                        >
                          Get Directions <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-elegant">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a 
                          href="tel:2159253881"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (215) 925-3881
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-elegant">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a 
                          href="mailto:info@indiankitchenlovash.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@indiankitchenlovash.com
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-elegant">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <p>Sunday - Monday: 11:30 AM - 10:00 PM</p>
                          <p className="text-accent font-medium">Tuesday: Closed</p>
                          <p>Wednesday - Saturday: 11:30 AM - 10:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <a href="tel:2159253881">
                      <Phone className="w-5 h-5" />
                      Call for Reservations
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="rounded-2xl overflow-hidden shadow-elegant-lg h-full min-h-[500px]">
                  <iframe
                    src="https://maps.google.com/maps?ll=39.941244,-75.147071&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5058873877330649298&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indian Kitchen Lovash Location"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-elegant-lg">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Have a question or feedback? We'd love to hear from you.
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <div className="md:col-span-2">
                  <Button variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
