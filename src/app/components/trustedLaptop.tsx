'use client';

import HomeSeoSection from "./HomeSeoSection";

export default function HeroSectionTrustedLap() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fc]">
      {/* Soft Background */}
      <div className="absolute inset-0 bg-[#f5f7fc] "/>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold leading-snug sm:leading-tight text-gray-900">
           <span className="text-indigo-600 mb-2">TN Computers </span><br></br>{' '} Your Trusted Laptop Store in
          Chennai
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg  max-w-5xl mx-auto leading-relaxed">
         Welcome to TN Computers, the leading laptop store in Chennai! Whether you’re searching for brand-new laptops, refurbished systems, gaming laptops, or custom PC builds, we have it all under one roof. Our Chennai showroom is a hub for tech enthusiasts, professionals, students, and gamers looking for high-quality computers and accessories at unbeatable prices.
        </p>

             <HomeSeoSection/>
      </div>


    </section>
  );
}
