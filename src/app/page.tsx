'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';
import { fadeUp } from './data/animations';
import NewArrivals from './components/newArrivals';
import ProductPromoSection from './components/ProductPromoSection';
import FeatureHighlights from './components/FeatureHighlights';
import BrandsSection from './components/BrandsSection';
import CustomerReviewSection from './components/CustomerReviewSection';
import Carousel from './components/Carousel';
import TopCategories from './components/TopCategories';
import { useUser } from '../../context/UserContext';
import Head from "next/head";


const HomePage = () => {
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length)
  //   }, 5000)
  //   return () => clearInterval(timer)
  // }, [])


  return (
    <>
      <Head>
        <title>TN Computers: Best Laptop Store in Chennai | New & Refurbished</title>
        <meta name="description" content="Visit TN Computers, the leading laptop showroom in Chennai. Shop new & refurbished laptops, gaming PCs, and custom builds. Get expert advice & deals today!" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tncomputers.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="TN Computers: Best Laptop Store in Chennai | New & Refurbished" />
        <meta property="og:description" content="Shop new & refurbished laptops, gaming PCs, and custom builds at TN Computers — Chennai’s trusted laptop showroom." />
        <meta property="og:url" content="https://tncomputers.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ecomapi.ftdigitalsolutions.org/media/Banner4_34705491.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TN Computers: Best Laptop Store in Chennai | New & Refurbished" />
        <meta name="twitter:description" content="Your trusted laptop store in Chennai—new laptops, refurbished systems, gaming PCs & more." />
        <meta name="twitter:image" content="https://ecomapi.ftdigitalsolutions.org/media/Banner4_34705491.jpg" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "name": "TN Computers",
              "url": "https://tncomputers.in",
              "@id": "https://tncomputers.in/#store",
              "image": "https://tncomputers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftn-computers-logo.5bf25c46.png&w=640&q=75",
              "logo": "https://tncomputers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftn-computers-logo.5bf25c46.png&w=640&q=75",
              "description": "TN Computers is the best laptop store in Chennai offering new laptops, refurbished laptops, gaming PCs, custom PC builds, and IT accessories.",
              "telephone": "+91-7429667788",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "126 B, Vanniar St, Bangaru Colony, K. K. Nagar",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600078",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
                ],
                "opens": "09:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://www.facebook.com/tncomputershardware",
                "https://www.instagram.com/tn__computers/",
                "https://www.youtube.com/@TN_Computers"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7429667788",
                "contactType": "Customer Support",
                "areaServed": "Chennai",
                "availableLanguage": ["English","Tamil"]
              }
            }
            `
          }}
        />
      </Head>
      <div>
        {/* Hero Section */}
        <Carousel />

        <TopCategories />
        <NewArrivals />
        <ProductPromoSection />
        <FeatureHighlights />
        <CustomerReviewSection />
        <BrandsSection />


        <div className="bg-gray-50 text-gray-800">

          {/* HERO */}
          <section className="bg-gradient-to-r from-[#9333ea] to-purple-700 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">TN Computers – Your Trusted Laptop Store in Chennai</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Welcome to TN Computers, the leading laptop store in Chennai! Whether you’re searching for brand-new laptops,
                refurbished systems, gaming laptops, or custom PC builds, we have it all under one roof.
              </p>
            </div>
          </section>

          {/* PRODUCTS */}
          <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl font-bold mb-6 text-center">Explore Our Wide Range of Products</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">New Laptops and Computers</h3>
                  <p>All major brands available — Dell, HP, Lenovo, ASUS, Acer, and more.</p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Refurbished Laptops & Desktops</h3>
                  <p>Quality-tested systems that deliver performance at affordable prices.</p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Custom PC & Laptop Builds</h3>
                  <p>Tailored machines designed for gaming, professional work, or personal use.</p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Gaming PCs & Laptops</h3>
                  <p>Powerful rigs for smooth gameplay and top-tier performance.</p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">IT Accessories</h3>
                  <p>Keyboards, mice, monitors, storage devices, and more.</p>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-12 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl font-bold mb-6 text-center">Why Choose TN Computers</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-2">Trusted Expertise</h4>
                  <p>Years of experience in computer sales, repair, and custom builds.</p>
                </div>

                <div className="bg-white shadow p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-2">Affordable Prices</h4>
                  <p>Refurbished laptops and top-quality systems at unbeatable rates.</p>
                </div>

                <div className="bg-white shadow p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-2">Customization Options</h4>
                  <p>From gaming builds to pro workstations — tailored to your needs.</p>
                </div>

                <div className="bg-white shadow p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-2">After-Sales Support</h4>
                  <p>Reliable service ensures peace of mind after your purchase.</p>
                </div>

                <div className="bg-white shadow p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-2">Wide Selection</h4>
                  <p>From popular laptop models to high-performance gaming rigs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* REFURBISHED */}
          <section className="py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4">Refurbished & Gaming Systems</h2>
              <p className="text-lg">
                Looking for value without compromise? Our refurbished gaming PCs and laptops are rigorously tested to ensure
                reliability and performance — all at competitive prices.
              </p>
            </div>
          </section>

          {/* CUSTOM PC BUILDER */}
          <section className="py-12 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4">Custom PC Builder – Build Your Dream Machine</h2>
              <p className="text-lg">
                Design your own PC with the latest components. Whether for gaming, work, or creativity — we help you build a
                high-performance system within your budget.
              </p>
            </div>
          </section>

          {/* SHOWROOM */}
          <section className="py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4">Visit Our Laptop Showroom in Chennai</h2>
              <p className="text-lg">
                Step into our store to explore laptops, desktops, refurbished systems, and custom PC builds. Get expert
                guidance and hands-on experience before you buy.
              </p>
            </div>
          </section>

          {/* FOOTER */}
          <section className="py-12 px-6 bg-[#9333ea] text-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-6">Shop With Confidence</h2>

              <ul className="space-y-2 text-lg">
                <li>✔ Laptop Store Chennai – All major brands available</li>
                <li>✔ Refurbished Laptops – Tested & trusted</li>
                <li>✔ Gaming PC Build Chennai – High-performance rigs</li>
                <li>✔ Custom PC Builder – Build your own machine</li>
              </ul>

              <p className="mt-6 text-lg font-semibold">
                TN Computers – Your trusted partner for laptops, desktops & accessories.
              </p>
            </div>
          </section>

        </div>


      </div>
    </>
  )
}

export default HomePage
