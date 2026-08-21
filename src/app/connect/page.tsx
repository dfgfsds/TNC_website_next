import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Monitor, Laptop, Cpu, Keyboard, Building, Gamepad2,
  MapPin, Clock, Mail, PhoneCall, Star, ChevronDown, CheckCircle2
} from 'lucide-react';
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'TN Computers | Branded Laptops, Gaming PCs & Computer Store Chennai',
  description: 'Connect with TN Computers in Chennai for branded laptops, desktops, custom PC builds, refurbished laptops, computer accessories and expert support.',
  keywords: 'TN Computers, computer store Chennai, laptop shop Chennai, branded laptops Chennai, gaming PC Chennai, gaming laptops Chennai, desktop computers Chennai, custom PC builds Chennai, refurbished laptops Chennai, used laptops Chennai, computer accessories Chennai, gaming accessories Chennai, PC components Chennai, corporate IT solutions Chennai, laptop EMI Chennai, computer shop KK Nagar, laptop shop KK Nagar, gaming PC shop Chennai',
  alternates: {
    canonical: 'https://www.tncomputers.in/connect',
  },
  openGraph: {
    type: 'website',
    title: 'TN Computers | Branded Laptops, Gaming PCs & Computer Store Chennai',
    description: 'Connect with TN Computers in Chennai for branded laptops, desktops, gaming PCs, custom PC builds, refurbished laptops, computer accessories, IT solutions and expert support.',
    url: 'https://www.tncomputers.in/connect',
    siteName: 'TN Computers',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.tncomputers.in/tn-computers-logo.png',
        alt: 'TN Computers - Branded Laptops, Gaming PCs and Computer Store in Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TN Computers | Branded Laptops, Gaming PCs & Computer Store Chennai',
    description: 'Connect with TN Computers in Chennai for branded laptops, gaming PCs, desktops, custom PC builds, refurbished laptops and computer accessories.',
    images: ['https://www.tncomputers.in/tn-computers-logo.png'],
    site: '@Tncomputerstech',
  },
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#a100fe] to-[#7100b3] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            TN Computers <br className="hidden md:block" />
            <span className="text-purple-200 text-3xl md:text-4xl block mt-2">Branded Laptop, Desktop & Gaming PC Shop in Chennai</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-purple-100 leading-relaxed font-medium">
            Welcome to the official TN Computers Connect page. Whether you&apos;re looking for branded laptops, desktops, gaming PCs, custom PC builds, refurbished laptops, computer accessories, or reliable IT solutions, this page connects you with all of TN Computers&apos; official platforms in one convenient place.
          </p>
          <p className="mt-4 text-md md:text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto opacity-90">
            As one of the trusted computer stores in Chennai, TN Computers offers a wide range of branded laptops, gaming desktops, custom-built PCs, refurbished systems, and genuine computer accessories for students, professionals, gamers, businesses, and organizations. Stay connected through our website, social media platforms, WhatsApp support, and visit our showroom in Chennai for expert guidance and the latest technology solutions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Connect Platforms Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Connect With TN Computers</h2>
            <p className="mt-4 text-lg text-gray-600">Stay connected through our official platforms.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Instagram', icon: <FaInstagram size={32} />, url: 'https://www.instagram.com/tn__computers', color: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20' },
              { name: 'YouTube', icon: <FaYoutube size={32} />, url: 'https://youtube.com/@TN_Computers', color: 'bg-[#FF0000]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-red-500/20' },
              { name: 'Facebook', icon: <FaFacebookF size={32} />, url: 'https://www.facebook.com/tncomputershardware', color: 'bg-[#1877F2]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20' },
              // { name: 'LinkedIn', icon: <FaLinkedinIn size={32} />, url: 'https://www.linkedin.com/company/tn-computers-hardware/about/', color: 'bg-[#0A66C2]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20' },
              // { name: 'Threads', icon: <SiThreads size={32} />, url: 'https://www.threads.com/@ftds_hardware', color: 'bg-black', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20' },
              { name: 'Website', icon: <FaGlobe size={32} />, url: 'https://tncomputers.in/', color: 'bg-[#a100fe]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20' },
              { name: 'WhatsApp', icon: <FaWhatsapp size={32} />, url: 'https://wa.me/7429667788', color: 'bg-[#25D366]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-green-500/20' },
              { name: 'X (Twitter)', icon: <FaXTwitter size={32} />, url: 'https://x.com/Tncomputerstech', color: 'bg-black', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20' },
              { name: 'Google Maps', icon: <MapPin size={32} />, url: 'https://maps.app.goo.gl/Gr1titZGr5SgNEZJ6', color: 'bg-[#4285F4]', hover: 'hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-8 rounded-3xl text-white shadow-lg transition-all duration-300 ${link.color} ${link.hover}`}
              >
                {link.icon}
                <span className="mt-4 font-bold text-sm md:text-base tracking-wide">{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Services */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Services</h2>
            <div className="w-24 h-1.5 bg-[#a100fe] mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Buy Branded Laptops', icon: <Laptop size={32} className="text-[#a100fe]" /> },
              { title: 'Shop Desktop Computers', icon: <Monitor size={32} className="text-[#a100fe]" /> },
              { title: 'Custom Gaming PC Builds', icon: <Cpu size={32} className="text-[#a100fe]" /> },
              { title: 'Gaming Laptops', icon: <Gamepad2 size={32} className="text-[#a100fe]" /> },
              { title: 'Computer Accessories', icon: <Keyboard size={32} className="text-[#a100fe]" /> },
              { title: 'Business & Corporate IT', icon: <Building size={32} className="text-[#a100fe]" /> },
            ].map((service) => (
              <div key={service.title} className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all border border-gray-100 hover:border-purple-200 group cursor-default">
                <div className="bg-white p-4 rounded-xl shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#a100fe] transition-colors">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Google Review (Full Width Banner) */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-[#a100fe] rounded-3xl p-8 md:p-16 shadow-[0_10px_40px_rgb(59,130,246,0.3)] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap-10">
          <div className="absolute -top-24 -right-10 opacity-10 rotate-45 pointer-events-none">
            <Star size={400} />
          </div>
          <div className="absolute -bottom-20 -left-10 opacity-10 -rotate-12 pointer-events-none">
            <Star size={250} />
          </div>

          <div className="relative z-10 md:w-3/5 lg:w-2/3">
            <div className="flex gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-300 fill-yellow-300 drop-shadow-md" size={32} />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-balance drop-shadow-sm">Leave a Google Review</h2>
            <p className="text-blue-50 text-lg md:text-xl font-medium mb-4 leading-relaxed">
              Your feedback helps us continue providing high-quality computers and exceptional customer service.
            </p>
            <p className="text-blue-100/90 text-sm md:text-base leading-relaxed max-w-2xl hidden sm:block">
              If you&apos;ve purchased a laptop, desktop, gaming PC, refurbished computer, or accessories, we&apos;d love to hear about your experience. Your review helps others discover TN Computers as a trusted store in Chennai.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex shrink-0">
            <a href="https://rb.gy/514oj0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-1 w-full md:w-auto whitespace-nowrap group">
              Write a Review <Star size={24} className="fill-current group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        {/* Who Can Benefit (Full Width) */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Can Benefit From TN Computers?</h2>
                <p className="text-gray-600 font-medium text-lg max-w-2xl">
                  Our products and services are designed for customers looking for reliable computing solutions, including:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              {['Students', 'Working Professionals', 'Businesses', 'Startups', 'Corporate Offices', 'Gamers', 'Content Creators', 'Freelancers', 'Educational Institutions', 'Home Users'].map((person) => (
                <span key={person} className="bg-purple-50 text-[#a100fe] border border-purple-100/50 px-5 py-3 rounded-xl font-bold text-sm md:text-base flex items-center gap-2.5 hover:bg-[#a100fe] hover:text-white transition-colors cursor-default shadow-sm hover:shadow-md">
                  <CheckCircle2 size={20} /> {person}
                </span>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-gray-600 md:text-lg leading-relaxed text-center md:text-left">
                Whether you&apos;re buying a branded laptop, building a custom gaming PC, upgrading your desktop, purchasing a refurbished laptop, or shopping for computer accessories, TN Computers provides genuine products, expert recommendations, competitive pricing, and dependable after-sales support to help you choose the right technology for your personal, professional, gaming, or business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Store & Contact Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Visit Our Store */}
          <div className="bg-gradient-to-br from-[#a100fe] to-[#8000cc] text-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(161,0,254,0.2)] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <MapPin size={240} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
                <p className="text-purple-100 mb-8 text-lg">
                  Visit our Chennai showroom to explore the latest branded laptops, desktops, gaming PCs, and computer accessories.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <MapPin className="mt-1 flex-shrink-0 text-purple-200" size={28} />
                    <div>
                      <h4 className="font-bold text-xl mb-2">TN Computers</h4>
                      <p className="text-purple-50 leading-relaxed">No: 126 B, Vanniar Street</p>
                      <p className="text-purple-50 leading-relaxed">Bangaru Colony, KK Nagar</p>
                      <p className="text-purple-50 leading-relaxed">Chennai – 600078</p>
                      <p className="text-purple-50 leading-relaxed">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://rb.gy/514oj0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-[#a100fe] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg w-fit">
                Get Directions <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Business Hours & Contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-[#a100fe]" size={28} /> Business Hours
              </h3>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-3 rounded-lg transition-colors">
                    <span className="font-semibold text-gray-600">{day}</span>
                    <span className="text-gray-900 font-bold bg-purple-50 px-3 py-1 rounded-md text-sm">09:00 AM – 09:00 PM</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:info@tncomputers.in" className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 hover:border-purple-200 group">
                  <div className="bg-[#a100fe] text-white p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-0.5">Email</p>
                    <p className="text-gray-900 font-bold text-lg">info@tncomputers.in</p>
                  </div>
                </a>
                <a href="tel:+917429667788" className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 hover:border-purple-200 group">
                  <div className="bg-[#a100fe] text-white p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-0.5">Support</p>
                    <p className="text-gray-900 font-bold text-lg">+91 74296 67788</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-[#a100fe]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-balance drop-shadow-lg">Upgrade Your Technology with TN Computers Today</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 font-medium leading-relaxed">
              Follow TN Computers across our official social media channels and become part of our growing customer community. Stay updated with the latest laptop launches, gaming PC builds, desktop offers, computer accessories, exclusive discounts, and technology tips.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Whether you&apos;re searching for a branded laptop, a custom gaming PC, or reliable computer accessories, TN Computers is here to help you make the right choice with expert guidance and trusted service.
            </p>
            <Link href="/shop" className="inline-block bg-[#a100fe] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-purple-500 transition-all shadow-[0_0_40px_rgb(161,0,254,0.4)] hover:shadow-[0_0_60px_rgb(161,0,254,0.6)] hover:-translate-y-1">
              Explore Our Shop
            </Link>
          </div>
        </section>

        {/* FAQ (AEO Optimized) */}
        <section className="max-w-4xl mx-auto pb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-[#a100fe] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600">Everything you need to know about TN Computers.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is TN Computers?",
                a: "TN Computers is a trusted computer store in Chennai offering branded laptops, desktops, gaming PCs, custom-built computers, refurbished laptops, and computer accessories for students, professionals, gamers, and businesses."
              },
              {
                q: "Where is TN Computers located?",
                a: "TN Computers is located at: No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078, Tamil Nadu, India."
              },
              {
                q: "Does TN Computers sell branded laptops?",
                a: "Yes. TN Computers offers branded laptops from leading manufacturers along with desktops, gaming PCs, refurbished laptops, and genuine computer accessories."
              },
              {
                q: "Can I contact TN Computers through WhatsApp?",
                a: "Yes. You can contact TN Computers through WhatsApp during business hours for product enquiries, pricing, custom PC builds, and technical assistance."
              },
              {
                q: "What products and services does TN Computers provide?",
                a: "TN Computers offers: Branded Laptops, Desktop Computers, Gaming PCs, Custom PC Builds, Refurbished Laptops, Used Laptops, Gaming Laptops, Computer Accessories, Gaming Accessories, Laptop EMI Options, Corporate IT Solutions, Technical Support, Computer Upgrades, and PC Components."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-bold text-lg hover:text-[#a100fe] transition-colors">
                  {faq.q}
                  <span className="relative size-6 shrink-0 bg-purple-50 rounded-full flex items-center justify-center">
                    <ChevronDown className="absolute size-4 transition-transform duration-300 group-open:-rotate-180 text-[#a100fe]" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4 mt-2 mx-2">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TN Computers",
          "url": "https://www.tncomputers.in",
          "logo": "https://www.tncomputers.in/logo.png",
          "email": "info@tncomputers.in",
          "telephone": "+91-7429667788",
          "sameAs": [
            "https://www.facebook.com/tncomputershardware",
            "https://www.instagram.com/tn__computers/",
            "https://www.youtube.com/@TN_Computers",
            "https://x.com/Tncomputerstech",
            "https://wa.me/7429667788",
            "https://maps.app.goo.gl/LB2G1wvAP9bL8PUv6",
            "https://www.linkedin.com/company/tn-computers-hardware/about/"
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ComputerStore",
          "@id": "https://www.tncomputers.in/#organization",
          "name": "TN Computers",
          "url": "https://www.tncomputers.in",
          "logo": "https://www.tncomputers.in/tn-computers-logo.png",
          "image": "https://www.tncomputers.in/tn-computers-logo.png",
          "telephone": "+91-7429667788",
          "email": "info@tncomputers.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.126 B, Vanniar Street, Bangaru Colony",
            "addressLocality": "KK Nagar",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600078",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:30",
              "closes": "21:00"
            }
          ],
          "hasMap": "https://maps.app.goo.gl/LB2G1wvAP9bL8PUv6",
          "sameAs": [
            "https://www.facebook.com/tncomputershardware",
            "https://www.instagram.com/tn__computers/",
            "https://www.youtube.com/@TN_Computers",
            "https://x.com/Tncomputerstech",
            "https://wa.me/7429667788",
            "https://www.linkedin.com/company/tn-computers-hardware/about/",
            "https://maps.app.goo.gl/LB2G1wvAP9bL8PUv6"
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "TN Computers Connect",
          "description": "Official Connect page for TN Computers.",
          "url": "https://www.tncomputers.in/connect",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "name": "TN Computers",
            "url": "https://www.tncomputers.in"
          }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.tncomputers.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Connect",
              "item": "https://www.tncomputers.in/connect"
            }
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is TN Computers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TN Computers is a trusted computer store in Chennai offering branded laptops, desktops, gaming PCs, custom PC builds, refurbished laptops and computer accessories."
              }
            },
            {
              "@type": "Question",
              "name": "Where is TN Computers located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TN Computers is located at No.126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078."
              }
            },
            {
              "@type": "Question",
              "name": "Does TN Computers provide laptop EMI options?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. TN Computers offers laptop EMI options on selected products. Contact the store for eligibility and available plans."
              }
            },
            {
              "@type": "Question",
              "name": "Can I contact TN Computers through WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Customer support is available on WhatsApp at +91 74296 67788 during business hours."
              }
            },
            {
              "@type": "Question",
              "name": "What products does TN Computers offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TN Computers offers branded laptops, gaming laptops, desktops, gaming PCs, custom PC builds, refurbished laptops, computer accessories, PC components and corporate IT solutions."
              }
            }
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "TN Computers Featured Services",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Branded Laptops"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "Desktop Computers"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Gaming PCs"
            },
            {
              "@type": "Service",
              "position": 4,
              "name": "Custom PC Builds"
            },
            {
              "@type": "Service",
              "position": 5,
              "name": "Computer Accessories"
            },
            {
              "@type": "Service",
              "position": 6,
              "name": "Refurbished Laptops"
            }
          ]
        })
      }} />
    </div>
  );
}
