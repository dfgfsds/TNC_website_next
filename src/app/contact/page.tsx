"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import FeatureHighlights from "../components/FeatureHighlights";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function ContactSection() {
  return (
    <div>
      <section className="bg-[#fffcfc] py-20 px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <motion.div variants={fadeUp} custom={2}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={3}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Type your message..."
                />
              </motion.div>

              <motion.button
                variants={fadeUp}
                custom={5}
                type="submit"
                className="group relative mt-4 w-full overflow-hidden rounded-md bg-[#9333ea] px-4 py-3 text-base font-semibold text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend size={18} />
                  Send Message
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#f12828] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="order-2 md:order-1 space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or want to work together? Fill out the form or
              reach us directly using the info below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[#9333ea]" />
                <span className="text-gray-700">+91 - 7429667788</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#9333ea]" />
                <span className="text-gray-700">info@tncomputers.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#9333ea]" />
                <span className="text-gray-700">
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>

            <div className="mt-8 w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                   src="https://www.google.com/maps?q=TN+Computers+Hardware,+126+B,+Vanniar+St,+Bangaru+Colony,+K.+K.+Nagar,+Chennai,+Tamil+Nadu+600078&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <FeatureHighlights />
    </div>
  );
}
