'use client';


import HomeSeoSection from "./HomeSeoSection";

export default function HeroSectionTrustedLap() {
  return (
    <>    <section className="relative overflow-hidden bg-[#f5f7fc]">
      {/* Soft Background */}
      <div className="absolute inset-0 bg-[#f5f7fc] " />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Heading */}
        <h2 className="text-[#a100fe] mb-2 text-3xl sm:text-4xl md:text-4xl  font-extrabold leading-snug sm:leading-tight">TN Computers</h2>
        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold leading-snug sm:leading-tight text-gray-900">
          Your Trusted Best Computer Shop in Chennai

        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg  max-w-5xl mx-auto leading-relaxed">
          Welcome to TN Computers, the Best laptop & Computer Shop in Chennai  Whether you’re searching for brand-new laptops, refurbished systems, gaming laptops, or custom PC builds, we have it all under one roof. Our Chennai showroom is a hub for tech enthusiasts, professionals, students, and gamers looking for high-quality computers and accessories at unbeatable prices.

        </p>

        <HomeSeoSection />
      </div>


    </section>

    </>

  );
}
