"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedAbout() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [isInView, controls]);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // FIXED
            },
        },
    };

    return (
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

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed bg-gray-50 p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                        Welcome to <span className="font-semibold text-purple-600">TN Computers</span>,
                        one of Chennai’s most trusted destinations for
                        <span className="font-medium text-gray-900"> new laptops, desktops, custom-built PCs</span>,
                        and <span className="font-medium text-gray-900">refurbished systems</span>.
                        With years of experience in the computer retail and service industry, we are committed to providing
                        <span className="text-purple-600 font-semibold"> reliable technology</span>, expert support, and
                        <span className="font-semibold text-purple-600"> cost-effective solutions</span>
                        for students, professionals, businesses, and gaming enthusiasts.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <Link href="/shop">
                            <button className="group relative mt-4 overflow-hidden rounded-xl bg-[#9333ea] px-6 py-3 text-sm text-white shadow-md transition-all duration-300">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Shop Now
                                </span>

                                <span className="absolute inset-0 overflow-hidden rounded-xl">
                                    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#f32b2b] transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                                </span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
