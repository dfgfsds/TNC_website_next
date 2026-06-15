'use client';

import HomeSeoSection from "./HomeSeoSection";
import { Laptop } from "lucide-react";
import Link from 'next/link';

export default function HeroSectionTrustedLap() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-semibold text-purple-700">Trusted Laptop Showroom in Chennai</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Visit TN Computers <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
                  Trusted Laptop Showroom
                </span> <br />
                in Chennai
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the latest laptops, gaming PCs, desktops, and accessories at our Chennai showroom.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Your trusted destination for:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Laptop store in Chennai',
                    'Desktop store in Chennai',
                    'Gaming PC shop in Chennai',
                    'Custom PC builders in Chennai',
                    'Refurbished laptops in Chennai',
                    'Computer accessories shop Chennai'
                  ].map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-gray-600 mb-8">
                Upgrade your technology with Chennai&apos;s most reliable computer store today.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95">
                  Explore Laptops
                </Link>
                <a href="tel:+917429667788" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-all active:scale-95">
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:ml-auto w-full max-w-lg relative">
              {/* Decorative blobs */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-fuchsia-100 rounded-[2.5rem] blur-2xl opacity-50 -z-10"></div>

              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Subtle top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">TN Computers</p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                      Chennai&apos;s Trusted <br /> PC Store
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Laptop className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all">
                    <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">1000+</h4>
                    <p className="text-sm font-medium text-gray-500">Happy Customers</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all">
                    <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">500+</h4>
                    <p className="text-sm font-medium text-gray-500">Gaming PCs Built</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all">
                    <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">EMI</h4>
                    <p className="text-sm font-medium text-gray-500">Available</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all">
                    <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">RTX</h4>
                    <p className="text-sm font-medium text-gray-500">Gaming Builds</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SEO section */}
          <div className="mt-20">
            <HomeSeoSection />
          </div>
        </div>
      </section>
    </>
  );
}