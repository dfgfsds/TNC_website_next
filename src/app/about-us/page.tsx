import AnimatedAbout from "./AnimatedAbout";
import TabsSection from "../components/tabsSection";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
  description:
    "Learn about TN Computers, one of Chennai’s most trusted laptop stores offering new laptops, custom PCs, refurbished systems, gaming desktops, and expert support.",

  keywords:
    "laptop store in chennai, best laptop shop in chennai, refurbished laptops chennai, custom pc builders chennai, used laptops chennai, gaming pc chennai",

  robots: "index, follow",
  authors: [{ name: "TN Computers" }],

  openGraph: {
    title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
    description:
      "TN Computers offers new laptops, desktops, custom-built PCs, used & refurbished systems, and IT accessories with expert support in Chennai.",
    url: "https://www.tncomputers.in/about-us",
    type: "website",
    images: [
      {
        url: "https://ecomapi.ftdigitalsolutions.org/media/Banner4_34705491.jpg",
        width: 1200,
        height: 630,
        alt: "TN Computers Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | TN Computers – Trusted Laptop Store in Chennai",
    description:
      "Discover TN Computers — Chennai’s go-to store for laptops, custom PCs, refurbished systems, and tech accessories.",
    images: ["https://ecomapi.ftdigitalsolutions.org/media/Banner4_34705491.jpg"],
  },

  alternates: {
    canonical: "https://www.tncomputers.in/about-us",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ✔ JSON-LD structured data for Google
 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "TN Computers",
  url: "https://www.tncomputers.in",
  description:
    "TN Computers is a trusted laptop store in Chennai offering new laptops, refurbished systems, gaming PCs, and custom-built computers.",
  image: "https://ecomapi.ftdigitalsolutions.org/media/Banner4_34705491.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.facebook.com/tncomputershardware",
    "https://www.youtube.com/@TN_Computers",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <AnimatedAbout />
        <TabsSection />
        <AboutContent />
      </div>
    </>
  );
}
