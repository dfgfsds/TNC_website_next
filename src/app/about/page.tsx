"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import FeatureHighlights from "../components/FeatureHighlights";
import TabsSection from "../components/tabsSection";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div>
      <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <div
          ref={ref}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="TN Computers - Laptops and Tech"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              About TN Computers
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              At <span className="font-semibold text-purple-600">TN Computers</span>, 
              we specialize in providing the latest <strong>laptops, monitors, and 
              technology solutions</strong> to meet the needs of students, professionals, 
              and businesses.
            </p>
            <p className="text-sm sm:text-md text-gray-500">
              From high-performance laptops to crystal-clear monitors and essential 
              accessories, we ensure quality, affordability, and trusted after-sales 
              support—making us your reliable partner for all things tech.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href="/shop">
              <button className="group relative mt-4 overflow-hidden rounded-xl bg-[#9333ea] px-6 py-3 text-sm text-white shadow-md transition-all duration-300">
                {/* Icon + Text Layer */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                </span>

                {/* Hover Animation Layer */}
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#f32b2b] transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <TabsSection />
      {/* <FeatureHighlights /> */}
    </div>
  );
}
