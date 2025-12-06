"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function StoreLocationPage() {
  const store = {
    city: "Chennai",
    address:
      "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078",
    phone: "+91 74296 67788",
    email: "info@tncomputers.in",
  };

  return (
    <main className="min-h-auto bg-white text-gray-800">
    

      {/* Two Column Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Store Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-[#9333ea] mb-4">
            {store.city} Store
          </h2>
          <div className="text-gray-700 space-y-4 text-base">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#9333ea] mt-1" />
              {store.address}
            </p>
            <p className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#9333ea] mt-1" />
              {store.phone}
            </p>
            <p className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#9333ea] mt-1" />
              {store.email}
            </p>
          </div>
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg h-[350px] w-full"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9336163260246!2d80.20172627484198!3d13.031568287292797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266fc38d3e80b%3A0x57ec6b7311992733!2sBangaru%20Colony%2C%20K.K.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600078!5e0!3m2!1sen!2sin!4v1720751136596!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </main>
  );
}
