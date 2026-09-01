'use client';

import HomeSeoSection from "./HomeSeoSection";
import { Laptop, PhoneCall, ShoppingBag, GraduationCap, Briefcase, Gamepad2, Wrench, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from 'next/link';

export default function HeroSectionTrustedLap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50/40 py-16 sm:py-20 lg:py-24 border-t border-purple-100/70">

      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-[450px] bg-gradient-to-tr from-purple-200/30 via-fuchsia-100/20 to-violet-200/30 blur-3xl -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200 shadow-sm shadow-purple-100/50 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wider uppercase">
                TN Computers Chennai
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-purple-300"></span>
              <span className="hidden sm:inline-block text-xs font-semibold text-purple-600">KK Nagar</span>
            </div>

            {/* Exact H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.18]">
              Computer Shop in Chennai for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-700">Laptops, PCs, Gaming &amp; Hardware</span>
            </h1>

            {/* Exact Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Looking for a reliable computer store in Chennai for laptops, desktop computers, gaming PCs, custom builds, components, accessories, or technical support? TN Computers is a local technology destination serving students, professionals, businesses, gamers, content creators, developers, freelancers, and home users.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Students can rely on us as a trusted laptop shop in Chennai for affordable, everyday-ready devices. Businesses looking for a dependable computer dealer in Chennai can count on us for office-ready systems and ongoing support. And for gamers chasing serious performance, our high-performance gaming PC in Chennai builds are configured around the games you actually play. Whatever you need, our focus stays the same — helping you choose technology that matches your requirements and budget.
            </p>

            {/* Audience Badges */}
            <div className="pt-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Serving All User Categories:
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
                    className="px-3.5 py-1.5 bg-white/95 border border-purple-100 hover:border-purple-300 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 shadow-sm hover:shadow hover:text-purple-700 hover:bg-purple-50/60 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/shop"
                className="group inline-flex justify-center items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explore Store</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+917429667788"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 text-base font-bold text-purple-800 bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-300 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-purple-600 animate-pulse" />
                <span>+91 7429667788</span>
              </a>
            </div>
          </div>

          {/* Right Visual Features Column */}
          <div className="lg:col-span-5">
            <div className="relative">

              {/* Outer Decorative Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400/25 via-fuchsia-400/20 to-violet-400/25 rounded-[2.5rem] blur-2xl opacity-75 -z-10"></div>

              {/* Main Card Container */}
              <div className="bg-white/95 backdrop-blur-xl rounded-[2.25rem] p-6 sm:p-8 shadow-2xl shadow-purple-900/10 border border-purple-100/90 relative space-y-4 overflow-hidden">

                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600"></div>

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                      Core Specializations
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1.5">
                      Tailored Tech Hub
                    </h2>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-purple-300">
                    <Laptop className="w-5 h-5" />
                  </div>
                </div>

                {/* 1. Students Feature Card */}
                <div className="group p-4 rounded-2xl bg-gradient-to-r from-purple-50/80 to-white border border-purple-100/80 hover:border-purple-300 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-600 group-hover:scale-105 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-purple-200 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-purple-700 transition-colors">Students</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      Trusted laptop shop in Chennai for affordable, everyday-ready devices.
                    </p>
                  </div>
                </div>

                {/* 2. Businesses Feature Card */}
                <div className="group p-4 rounded-2xl bg-gradient-to-r from-fuchsia-50/80 to-white border border-fuchsia-100/80 hover:border-fuchsia-300 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-600 group-hover:scale-105 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-fuchsia-200 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-fuchsia-700 transition-colors">Businesses</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      Dependable computer dealer in Chennai for office-ready systems &amp; ongoing support.
                    </p>
                  </div>
                </div>

                {/* 3. Gamers Feature Card */}
                <div className="group p-4 rounded-2xl bg-gradient-to-r from-violet-50/80 to-white border border-violet-100/80 hover:border-violet-300 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-600 group-hover:scale-105 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-violet-200 transition-transform">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-violet-700 transition-colors">Gamers</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                      High-performance gaming PC builds configured around the games you actually play.
                    </p>
                  </div>
                </div>

                {/* 4. Hardware & Support Feature Card */}
                <div className="group p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 to-white border border-amber-100/80 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-600 group-hover:scale-105 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-amber-200 transition-transform">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-amber-700 transition-colors">Custom Builds &amp; Support</h3>
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