

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
import logo from "../../public/tn-computers-logo.png";
import banner from "../../public/banner/Banner1.jpg"

import HeroSectionTrustedLap from './components/trustedLaptop';

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://tncomputers.in/#store",
    "name": "TN Computers",
    "url": "https://tncomputers.in",
    "image": `https://tncomputers.in/${logo.src}`,
    "logo": `https://tncomputers.in/${logo.src}`,
    "description":
      "TN Computers is the best laptop store in Chennai offering new laptops, refurbished laptops, gaming PCs, custom PC builds, and IT accessories.",
    "telephone": "+91-7429667788",
    "priceRange": "₹₹",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "126 B, Vanniar St, Bangaru Colony, K. K. Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600078",
      "addressCountry": "IN",
    },

    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "09:00",
      "closes": "22:00",
    },

    "sameAs": [
      "https://www.facebook.com/tncomputershardware",
      "https://www.instagram.com/tn__computers/",
      "https://www.youtube.com/@TN_Computers",
    ],

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7429667788",
      "contactType": "Customer Support",
      "areaServed": "Chennai",
      "availableLanguage": ["English", "Tamil"],
    },
  };

  return {
    title: "TN Computers: Best Laptop Store in Chennai | New & Refurbished",

    description:
      "Visit TN Computers, the leading laptop showroom in Chennai. Shop new & refurbished laptops, gaming PCs, and custom builds. Get expert advice & deals today!",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://tncomputers.in/",
    },

    openGraph: {
      title: "TN Computers: Best Laptop Store in Chennai | New & Refurbished",
      description:
        "Shop new & refurbished laptops, gaming PCs, and custom builds at TN Computers — Chennai’s trusted laptop showroom.",
      url: "https://tncomputers.in/",
      siteName: "TN Computers",
      type: "website",
      images: [
        {
          url: "https://tncomputers.in/banner/Banner1.jpg",
          width: 1200,
          height: 630,
          alt: "TN Computers Laptop Store Chennai",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "TN Computers: Best Laptop Store in Chennai | New & Refurbished",
      description:
        "Your trusted laptop store in Chennai—new laptops, refurbished systems, gaming PCs & more.",
      images: ["https://tncomputers.in/banner/Banner1.jpg"],
    },

    // JSON-LD injected into <head>
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}



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
     
      <div>
        {/* Hero Section */}
        <Carousel />

        <TopCategories />
        <NewArrivals />
        <ProductPromoSection />
        <HeroSectionTrustedLap/>
        <FeatureHighlights />
        <CustomerReviewSection />
        <BrandsSection />


      </div>
    </>
  )
}

export default HomePage
