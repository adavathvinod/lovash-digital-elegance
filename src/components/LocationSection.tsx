import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="reservations" className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Find Us on South Street
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-elegant-lg h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?ll=39.941244,-75.147071&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5058873877330649298&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indian Kitchen Lovash Location"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground mb-4">
                    236 & 238 South Street<br />
                    Philadelphia, PA 19147
                  </p>
                  <a 
                    href="https://maps.google.com/maps?ll=39.941244,-75.147071&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5058873877330649298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Get Directions
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Sunday - Monday</span>
                      <span>11:30 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between text-accent font-medium">
                      <span>Tuesday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday - Saturday</span>
                      <span>11:30 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">Reservations</h3>
                  <p className="text-muted-foreground mb-4">
                    Call us to make a reservation or inquire about catering services.
                  </p>
                  <Button variant="default" className="w-full sm:w-auto" asChild>
                    <a href="tel:2159253881">
                      <Phone className="w-4 h-4" />
                      (215) 925-3881
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
