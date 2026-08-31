'use client';

import HomeSeoSection from "./HomeSeoSection";
import { Laptop, PhoneCall, ShoppingBag, GraduationCap, Briefcase, Gamepad2, Wrench } from "lucide-react";
import Link from 'next/link';

export default function HeroSectionTrustedLap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-gray-50/30 py-16 sm:py-20 lg:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Main Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/90 border border-purple-200 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wider uppercase">
                TN Computers Chennai
              </span>
            </div>

            {/* Exact H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.18] mb-6">
              Computer Shop in Chennai for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-700">Laptops, PCs, Gaming &amp; Hardware</span>
            </h1>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-700 mb-5 leading-relaxed font-normal">
              Looking for a reliable computer store in Chennai for laptops, desktop computers, gaming PCs, custom builds, components, accessories, or technical support? TN Computers is a local technology destination serving students, professionals, businesses, gamers, content creators, developers, freelancers, and home users.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed font-normal">
              Students can rely on us as a trusted laptop shop in Chennai for affordable, everyday-ready devices. Businesses looking for a dependable computer dealer in Chennai can count on us for office-ready systems and ongoing support. And for gamers chasing serious performance, our high-performance gaming PC in Chennai builds are configured around the games you actually play. Whatever you need, our focus stays the same — helping you choose technology that matches your requirements and budget.
            </p>

            {/* Audience Badges extracted directly from content */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Serving All User Categories:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  'Students',
                  'Professionals',
                  'Businesses',
                  'Gamers',
                  'Content Creators',
                  'Developers',
                  'Freelancers',
                  'Home Users'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-white border border-purple-200/80 rounded-xl text-xs sm:text-sm font-semibold text-purple-950 shadow-sm hover:border-purple-400 hover:bg-purple-50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-2xl shadow-lg shadow-purple-300/50 hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                Explore Store
              </Link>
              <a
                href="tel:+917429667788"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-3.5 text-base font-bold text-purple-800 bg-white hover:bg-purple-50 border border-purple-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-purple-600" />
                +91 7429667788
              </a>
            </div>
          </div>

          {/* Right Visual Features Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative Blur */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-300/40 via-fuchsia-300/30 to-violet-300/40 rounded-[2.5rem] blur-2xl opacity-70 -z-10"></div>

              <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border border-purple-100 relative space-y-4">

                {/* Students Feature Card */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Students</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      Trusted laptop shop in Chennai for affordable, everyday-ready devices.
                    </p>
                  </div>
                </div>

                {/* Businesses Feature Card */}
                <div className="p-4 rounded-2xl bg-fuchsia-50/70 border border-fuchsia-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Businesses</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      Dependable computer dealer in Chennai for office-ready systems &amp; ongoing support.
                    </p>
                  </div>
                </div>

                {/* Gamers Feature Card */}
                <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Gamers</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      High-performance gaming PC builds configured around the games you actually play.
                    </p>
                  </div>
                </div>

                {/* Hardware & Support Feature Card */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Custom Builds &amp; Support</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      Components, accessories, custom PC builds, and professional technical support.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* DETAILED CONTENT & SECTIONS */}
        <div className="mt-16 sm:mt-20">
          <HomeSeoSection />
        </div>

      </div>
    </section>
  );
}