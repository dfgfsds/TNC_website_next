

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
  const computerStoreSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://www.tncomputers.in/#store",
    "name": "TN Computers",
    "url": "https://tncomputers.in",
    "image": "https://www.tncomputers.in/tn-computers-logo.png",
    "logo": "https://www.tncomputers.in/tn-computers-logo.png",
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
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the Best Computer Shop in Chennai for buying laptops?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TN Computers is rated as the Best Computer Shop in Chennai, located in KK Nagar. We offer brand-new laptops, refurbished models, and custom gaming PC builds with warranty and expert support."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy reliable Refurbished Laptops in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy certified Refurbished Laptops in Chennai at TN Computers. We provide quality-tested second-hand laptops that are perfect for students and professionals, available at a fraction of the cost of new devices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have a physical Laptop Showroom in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Laptop Showroom in Chennai is located at No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078. You can visit us to test devices before buying."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build a custom Gaming PC at TN Computers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in custom PC builds. As a leading Laptop Store in Chennai, we can assemble high-performance gaming PCs and editing workstations tailored to your budget."
        }
      }
    ]
  };

  return {
    title: "Best Computer Shop in Chennai | Branded & New | TN Computers",
    description: "Visit TN Computers, the Best computer shop in Chennai. Shop new & Branded laptops, gaming PCs, and custom builds. Get expert advice & deals today!",
    keywords: [
      "second hand laptop chennai",
      "refurbished laptop chennai",
      "gaming laptop in chennai",
      "gaming pc build chennai",
      "best computer shop in chennai"
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: "https://www.tncomputers.in/" },
    openGraph: {
      title: "Best Computer Shop in Chennai | Branded & New | TN Computers",
      description: "Shop new & refurbished laptops, gaming PCs, and custom builds at TN Computers — Chennai’s trusted laptop showroom",
      url: "https://www.tncomputers.in/",
      type: "website",
      siteName: "TN Computers",
      images: [
        {
          url: "https://www.tncomputers.in/banner/Banner1.jpg",
          width: 1200,
          height: 630,
          alt: "TN Computers Computer Shop Chennai"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Computer Shop in Chennai | Branded & New | TN Computers",
      description: "Your trusted laptop store in Chennai—new laptops, refurbished systems, gaming PCs & more.",
      images: ["https://www.tncomputers.in/banner/Banner1.jpg"]
    },
    other: { "application/ld+json": JSON.stringify([computerStoreSchema, faqSchema]) }
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
   

      </div>
    </>
  )
}

export default HomePage
