
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Script from "next/script";
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
import axios from 'axios';
import { baseUrl } from '../../api-endpoints/ApiUrls';


export const metadata = {
  title: "Best Laptop Store in Chennai | Gaming PC & Refurbished Laptops",
  description: "Buy laptops, gaming PCs, desktops & refurbished laptops at TN Computers Chennai. Best prices, EMI offers & custom PC builds.",
  keywords: [
    "laptop store in Chennai",
    "best laptop shop in Chennai",
    "computer shop in Chennai",
    "desktop store in Chennai",
    "buy laptop in Chennai",
    "gaming PC Chennai",
    "custom PC builders in Chennai",
    "refurbished laptops in Chennai",
    "used laptops Chennai",
    "computer accessories shop Chennai",
    "laptop showroom near me Chennai",
    "gaming desktop Chennai",
    "budget gaming PC Chennai",
    "TN Computers Chennai",
    "laptop EMI Chennai",
    "refurbished gaming laptops Chennai",
    "cheap laptop Chennai",
    "PC store near me Chennai",
    "custom gaming desktop Chennai",
    "branded laptops Chennai",
    "second hand laptop chennai",
    "refurbished laptop chennai",
    "used laptop in chennai",
    "gaming laptop in chennai",
    "gaming pc build chennai",
    "best computer shop in chennai",
    "buy laptop online india",
    "computer accessories shop chennai"
  ],
  openGraph: {
    title: "Best Laptop Store in Chennai | Gaming PC & Refurbished Laptops",
    description: "Buy laptops, gaming PCs, desktops & refurbished laptops at TN Computers Chennai. Best prices, EMI offers & custom PC builds.",
    url: "https://tncomputers.in",
    type: "website",
    images: ["https://www.tncomputers.in/banner/Banner1.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Computer Shop in Chennai | Branded & New | TN Computers",
    description: "Your trusted laptop store in Chennai—new laptops, refurbished systems, gaming PCs & more.",
    images: ["https://www.tncomputers.in/banner/Banner1.jpg"]
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.tncomputers.in/"
  }
};




async function getHomeData() {
  const vendorId = 66;

  try {
    const headers = { Origin: 'https://tncomputers.in' };
    const [bannerRes, categoryRes, productRes] = await Promise.all([
      axios.get(`${baseUrl}/banners/?vendorId=${vendorId}`, { headers }),
      axios.get(`${baseUrl}/api/categories/?vendor_id=${vendorId}`, { headers }),
      axios.get(`${baseUrl}/api/products/?vendor_id=${vendorId}`, { headers }),
    ]);

    return {
      banners: bannerRes?.data?.banners || [],
      categories: categoryRes?.data?.data || categoryRes?.data || [],
      products: productRes?.data?.data || productRes?.data || [],
    };
  } catch (error) {
    console.error("Home SSR API Error:", error);
    return {
      banners: [],
      categories: [],
      products: [],
    };
  }
}


// async function getHomeData() {
//   const vendorId = 66;

//   const [bannersRes, categoriesRes, productsRes] = await Promise.all([
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_TEST}/banners/?vendorId=${vendorId}`, { cache: 'no-store' }),
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_TEST}/api/categories/?vendor_id=${vendorId}`, { cache: 'no-store' }),
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL_TEST}/api/products/?vendor_id=${vendorId}`, { cache: 'no-store' }),
//   ]);

//   return {
//     banners: (await bannersRes.json())?.banners ?? [],
//     categories: (await categoriesRes.json())?.data ?? [],
//     products: (await productsRes.json())?.data ?? [],
//   };
// }



// const HomePage = async () => {
export default async function HomePage() {
  // const { banners } = await getHomeData();
  const { banners, categories, products } = await getHomeData();
  console.log(banners, 'banners from home page');
  console.log(categories, 'categories from home page');
  console.log(products, 'products from home page');
  // JSON-LD Computer Store Schema
  // const computerStoreSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "ComputerStore",
  //   "@id": "https://www.tncomputers.in/#store",
  //   "name": "TN Computers",
  //   "url": "https://tncomputers.in",
  //   "image": "https://www.tncomputers.in/tn-computers-logo.png",
  //   "logo": "https://www.tncomputers.in/tn-computers-logo.png",
  //   "description": "TN Computers is the best laptop store in Chennai offering new laptops, refurbished laptops, gaming PCs, custom PC builds, and IT accessories.",
  //   "telephone": "+91-7429667788",
  //   "priceRange": "₹₹",
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "126 B, Vanniar St, Bangaru Colony, K. K. Nagar",
  //     "addressLocality": "Chennai",
  //     "addressRegion": "TN",
  //     "postalCode": "600078",
  //     "addressCountry": "IN"
  //   },
  //   "openingHoursSpecification": {
  //     "@type": "OpeningHoursSpecification",
  //     "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //     "opens": "09:00",
  //     "closes": "22:00"
  //   },
  //   "sameAs": [
  //     "https://www.facebook.com/tncomputershardware",
  //     "https://www.instagram.com/tn__computers/",
  //     "https://www.youtube.com/@TN_Computers"
  //   ],
  //   "contactPoint": {
  //     "@type": "ContactPoint",
  //     "telephone": "+91-7429667788",
  //     "contactType": "Customer Support",
  //     "areaServed": "Chennai",
  //     "availableLanguage": ["English", "Tamil"]
  //   }
  // };
  const computerStoreSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://www.tncomputers.in/#store",
    "name": "TN Computers",
    "image": "https://www.tncomputers.in/tn-computers-logo.png",
    "logo": "https://www.tncomputers.in/tn-computers-logo.png",
    "url": "https://tncomputers.in",
    "telephone": "+91-7429667788",
    "priceRange": "₹₹",
    "description":
      "TN Computers is a trusted laptop store in Chennai offering laptops, gaming PCs, refurbished laptops, desktops, accessories and custom PC builds.",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600078",
      "addressCountry": "IN"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0418",
      "longitude": "80.1994"
    },

    "openingHours": "Mo-Sa 09:00-21:00",

    "sameAs": [
      "https://www.facebook.com/tncomputershardware/",
      "https://www.instagram.com/tn__computers/",
      "https://www.youtube.com/@TN_Computers"
    ],

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7429667788",
      "contactType": "Customer Support",
      "areaServed": "Chennai",
      "availableLanguage": ["English", "Tamil"]
    },

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Laptops"
        },
        {
          "@type": "OfferCatalog",
          "name": "Gaming PCs"
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished Laptops"
        },
        {
          "@type": "OfferCatalog",
          "name": "Computer Accessories"
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom PC Builds"
        }
      ]
    }
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best laptop store in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "TN Computers is one of the best laptop stores in Chennai offering branded laptops, gaming laptops, refurbished laptops, desktops, and accessories at affordable prices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build custom gaming PCs in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, TN Computers provides custom gaming PC building services in Chennai for gamers, creators, and professionals with RTX graphics and high-performance components."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer EMI options for laptops and gaming PCs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, TN Computers offers flexible EMI options on laptops, desktops, gaming PCs, and accessories."
        }
      },
      {
        "@type": "Question",
        "name": "Which brands are available at TN Computers Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We offer laptops and desktops from top brands including Dell, HP, Lenovo, Acer, ASUS, MSI, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upgrade SSD and RAM at your computer shop in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we provide SSD installation, RAM upgrades, PC assembly, and laptop upgrade services in Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sell gaming accessories in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we sell gaming keyboards, mouse, monitors, cabinets, CPU coolers, gamepads, and gaming accessories in Chennai."
        }
      }
    ]
  };

  // 👇 ADD THIS BELOW faqSchema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TN Computers",
    "url": "https://tncomputers.in",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Aravind Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "I was searching for the best laptop shop in Chennai and found TN Computers. Their pricing, support, and laptop collection were excellent. I purchased a Dell i7 laptop with SSD at a great price."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul S"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "TN Computers built my custom RTX gaming PC exactly the way I wanted. If you are looking for custom PC builders in Chennai or a gaming PC shop in Chennai, this is the right place."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya M"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "I bought a refurbished Dell Latitude laptop for office work. The laptop condition was excellent and the pricing was affordable. One of the best places to buy refurbished laptops in Chennai."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Karthik V"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "TN Computers is the best computer shop in Chennai for students and professionals. I upgraded my RAM and SSD here. Fast service, affordable pricing, and genuine products."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Naveen Raj"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "I purchased a gaming keyboard, mouse, monitor, and CPU cooler from TN Computers. Their gaming accessories collection is amazing."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Deepak R"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody":
          "I was looking for affordable laptops in Chennai with EMI options. TN Computers helped me choose the perfect HP laptop within my budget."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "7185"
    }
  };

  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length)
  //   }, 5000)
  //   return () => clearInterval(timer)
  // }, [])


  return (
    <>


      <Script
        id="home-jsonld-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([computerStoreSchema, faqSchema, reviewSchema]),
        }}
      />



      <div>
        {/* Hero Section */}
        <Carousel banners={banners} />

        {/* <TopCategories /> */}
        <TopCategories categories={categories} />
        {/* <NewArrivals /> */}
        <NewArrivals products={products} />
        <ProductPromoSection />
        <HeroSectionTrustedLap />

        <FeatureHighlights />


      </div>
    </>
  )
}

// export default HomePage;


