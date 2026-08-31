import Script from "next/script";
import CategoryCard from './components/CategoryCard';
import NewArrivals from './components/newArrivals';
import ProductPromoSection from './components/ProductPromoSection';
import FeatureHighlights from './components/FeatureHighlights';
import Carousel from './components/Carousel';
import TopCategories from './components/TopCategories';
import HeroSectionTrustedLap from './components/trustedLaptop';
import axios from 'axios';
import { baseUrl } from '../../api-endpoints/ApiUrls';

export const metadata = {
  title: "Computer Shop in Chennai | Laptops, PCs & Gaming | TN Computers",
  description:
    "TN Computers is a best computer store in Chennai offering laptops, gaming PCs, custom PC builds, refurbished laptops, components, accessories and repairs.",
  keywords: [
    "computer shop in Chennai",
    "computer store Chennai",
    "laptop store Chennai",
    "laptop shop Chennai",
    "laptop dealer Chennai",
    "gaming laptop Chennai",
    "gaming PC Chennai",
    "gaming computer Chennai",
    "custom PC builder Chennai",
    "custom gaming PC Chennai",
    "PC building service Chennai",
    "refurbished laptops Chennai",
    "used laptops Chennai",
    "desktop computers Chennai",
    "PC components Chennai",
    "computer hardware Chennai",
    "gaming accessories Chennai",
    "laptop repair Chennai",
    "computer repair Chennai",
    "computer shop KK Nagar",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.tncomputers.in/",
  },
  openGraph: {
    type: "website",
    title: "Computer Shop in Chennai | Laptops, PCs & Gaming | TN Computers",
    description:
      "Shop laptops, desktop computers, gaming PCs, custom PC builds, refurbished laptops, PC components and accessories at TN Computers in KK Nagar, Chennai.",
    url: "https://www.tncomputers.in/",
    siteName: "TN Computers",
    locale: "en_IN",
    images: [
      {
        url: "https://www.tncomputers.in/images/tn-computers-homepage.jpg",
        alt: "TN Computers - Computer Shop in Chennai",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Shop in Chennai | Laptops, PCs & Gaming | TN Computers",
    description:
      "Explore laptops, gaming PCs, custom PC builds, refurbished laptops, components, accessories and computer services at TN Computers, KK Nagar Chennai.",
    images: [
      {
        url: "https://www.tncomputers.in/images/tn-computers-homepage.jpg",
        alt: "TN Computers - Computer Shop in Chennai",
      },
    ],
    site: "@Tncomputerstech",
    creator: "@Tncomputerstech",
  },
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

export default async function HomePage() {
  const { banners, categories, products } = await getHomeData();

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tncomputers.in/#organization",
        "name": "TN Computers",
        "url": "https://www.tncomputers.in/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.tncomputers.in/#logo",
          "url": "https://www.tncomputers.in/images/tn-computers-logo.png",
          "contentUrl": "https://www.tncomputers.in/images/tn-computers-logo.png"
        },
        "telephone": "+91 74296 67788",
        "email": "info@tncomputers.in",
        "sameAs": [
          "https://www.facebook.com/tncomputershardware",
          "https://x.com/Tncomputerstech",
          "https://www.youtube.com/@TN_Computers",
          "https://www.instagram.com/tn__computers/"
        ]
      },
      {
        "@type": "ComputerStore",
        "@id": "https://www.tncomputers.in/#localbusiness",
        "name": "TN Computers",
        "url": "https://www.tncomputers.in/",
        "image": "https://www.tncomputers.in/images/tn-computers-homepage.jpg",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tncomputers.in/images/tn-computers-logo.png"
        },
        "telephone": "+91 74296 67788",
        "email": "info@tncomputers.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony",
          "addressLocality": "KK Nagar",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600078",
          "addressCountry": "IN"
        },
        "parentOrganization": {
          "@id": "https://www.tncomputers.in/#organization"
        },
        "sameAs": [
          "https://www.facebook.com/tncomputershardware",
          "https://x.com/Tncomputerstech",
          "https://www.youtube.com/@TN_Computers",
          "https://www.instagram.com/tn__computers/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tncomputers.in/#website",
        "name": "TN Computers",
        "url": "https://www.tncomputers.in/",
        "publisher": {
          "@id": "https://www.tncomputers.in/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tncomputers.in/#webpage",
        "url": "https://www.tncomputers.in/",
        "name": "Computer Shop in Chennai | Laptops, PCs & Gaming | TN Computers",
        "description": "TN Computers offers laptops, desktop computers, gaming PCs, custom PC builds, refurbished laptops, PC components, gaming accessories and computer services in Chennai.",
        "isPartOf": {
          "@id": "https://www.tncomputers.in/#website"
        },
        "about": {
          "@id": "https://www.tncomputers.in/#localbusiness"
        },
        "publisher": {
          "@id": "https://www.tncomputers.in/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tncomputers.in/images/tn-computers-homepage.jpg"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "ItemList",
        "@id": "https://www.tncomputers.in/#testimonials",
        "name": "TN Computers Customer Testimonials",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Vejaysundaram R"
              },
              "reviewBody": "Got my PC built at TN Computers and I’m very happy with the performance. The staff were friendly, explained everything clearly, and guided me throughout the purchase. Overall, the experience was smooth and satisfying.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Udhaya Kumar"
              },
              "reviewBody": "I purchased an Acer Aspire 3 laptop from TN Computers at a very affordable price. The customer handling was really good, and I’m completely satisfied with the service.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Mr. Praveen"
              },
              "reviewBody": "I bought a brand-new Lenovo laptop from TN Computers and was really impressed with the pricing. The team provided good customer service and made the overall buying experience easy and comfortable.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Bala Balalakshmi"
              },
              "reviewBody": "I bought a new gaming PC and was very happy with the product and the suggestions provided by the team. The PC quality was better than I expected for my budget. Very satisfied with the overall experience.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "ZS ROSE"
              },
              "reviewBody": "The staff were knowledgeable, friendly, and patient. They explained the differences between laptop models clearly and answered all my questions without rushing me into a decision.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Lokesh Karthik"
              },
              "reviewBody": "I purchased a PC from TN Computers and was satisfied with the affordable pricing, product quality, and service. The staff had good hardware knowledge and provided helpful guidance throughout the purchase.",
              "itemReviewed": {
                "@id": "https://www.tncomputers.in/#localbusiness"
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tncomputers.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is a reliable computer store in Chennai for laptops, desktops and gaming PCs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TN Computers is a one-stop destination in KK Nagar for laptops, desktops, gaming PCs, custom builds, upgrades and repairs, with staff who explain specifications in practical terms."
            }
          },
          {
            "@type": "Question",
            "name": "What makes TN Computers a good computer shop in Chennai for students and businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TN Computers matches configurations to real usage, including budget-friendly builds for students, office-ready systems for businesses, and performance-focused builds for gamers."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I buy quality PC accessories in Chennai for a gaming setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TN Computers offers gaming keyboards, mice, headsets, monitors, controllers and other gaming peripherals for complete gaming setups."
            }
          },
          {
            "@type": "Question",
            "name": "Which is an affordable laptop store in Chennai for students and professionals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TN Computers helps customers balance price and performance by considering portability and battery life for students and processing power and specifications for professionals."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a custom PC build in Chennai for gaming or video editing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TN Computers plans custom builds around workloads such as gaming, streaming, 3D rendering and editing while checking component compatibility, performance and future upgrade requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Are affordable refurbished laptops in Chennai a good option for budget buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Refurbished laptops can be a practical option when processor generation, battery health, screen condition, specifications and warranty or service support are carefully checked."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="home-jsonld-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />

      <div>
        {/* Hero Section */}
        <Carousel banners={banners} />

        <TopCategories categories={categories} />
        <NewArrivals products={products} />
        <ProductPromoSection />
        <HeroSectionTrustedLap />

        <FeatureHighlights />
      </div>
    </>
  );
}
