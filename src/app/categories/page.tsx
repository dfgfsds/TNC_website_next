import { Metadata } from "next";
import CategoriesPage from "./CategoriesUI";

export const metadata: Metadata = {
  title: "Computer Store Chennai | Laptops, PC Parts & More",
  description: "Explore computer categories at TN Computers Chennai, including laptops, desktops, PC components, RAM, SSDs, GPUs, monitors and more.",
  keywords: "computer store Chennai, computer shop Chennai, computer accessories Chennai, PC components Chennai, laptops Chennai, desktops Chennai, custom PC build Chennai, gaming PC Chennai, RAM, SSD, graphics card, processor, monitor, CPU cooler, power supply, refurbished laptops",
  alternates: {
    canonical: "https://www.tncomputers.in/categories",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Computer Store Chennai | Laptops, PC Parts & More",
    description: "Explore computer categories at TN Computers Chennai, including laptops, desktops, PC components, RAM, SSDs, GPUs, monitors and more.",
    type: "website",
    url: "https://www.tncomputers.in/categories",
    siteName: "TN Computers",
    images: [
      {
        url: "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
        alt: "TN Computers - Computer Store Chennai",
      }
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Store Chennai | Laptops, PC Parts & More",
    description: "Explore laptops, desktops, PC components, RAM, SSDs, GPUs, monitors and more at TN Computers Chennai.",
    images: ["https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png"],
    site: "@TNcomputerstech",
  },
  other: {
    "image_src": "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tncomputers.in/categories#webpage",
      "url": "https://www.tncomputers.in/categories",
      "name": "Computer Store Chennai | Laptops, PC Parts & More",
      "description": "Explore computer categories at TN Computers Chennai, including laptops, desktops, PC components, RAM, SSDs, GPUs, monitors and more.",
      "isPartOf": {
        "@id": "https://www.tncomputers.in/#website"
      },
      "about": {
        "@id": "https://www.tncomputers.in/#business"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tncomputers.in/#website",
      "url": "https://www.tncomputers.in/",
      "name": "TN Computers",
      "publisher": {
        "@id": "https://www.tncomputers.in/#business"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Store",
      "@id": "https://www.tncomputers.in/#business",
      "name": "TN Computers",
      "url": "https://www.tncomputers.in/",
      "logo": "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
      "image": "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
      "telephone": "+91 74296 67788",
      "email": "info@tncomputers.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600078",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chennai"
        },
        {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/tncomputershardware",
        "https://x.com/Tncomputerstech",
        "https://www.youtube.com/@TN_Computers",
        "https://www.instagram.com/tn__computers/"
      ],
      "keywords": [
        "computer store Chennai",
        "computer shop Chennai",
        "computer accessories Chennai",
        "PC components Chennai",
        "laptops Chennai",
        "custom PC build Chennai",
        "gaming PC Chennai"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tncomputers.in/categories#itemlist",
      "name": "TN Computers Product Categories",
      "description": "Computer, laptop, PC component and accessory categories available from TN Computers.",
      "numberOfItems": 20,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Laptops",
          "url": "https://www.tncomputers.in/categories/laptops"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Desktops",
          "url": "https://www.tncomputers.in/categories/desktops"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Custom PC Build",
          "url": "https://www.tncomputers.in/categories/custom-pc-build"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "PC Components",
          "url": "https://www.tncomputers.in/categories/pc-components"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Processor",
          "url": "https://www.tncomputers.in/categories/processor"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "RAM",
          "url": "https://www.tncomputers.in/categories/ram"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "SSD",
          "url": "https://www.tncomputers.in/categories/ssd"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Graphics Card",
          "url": "https://www.tncomputers.in/categories/graphics-card"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Monitors",
          "url": "https://www.tncomputers.in/categories/monitors"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Power Supply",
          "url": "https://www.tncomputers.in/categories/power-supply"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Cabinet",
          "url": "https://www.tncomputers.in/categories/cabinet"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "CPU Cooler",
          "url": "https://www.tncomputers.in/categories/cpu-cooler"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Keyboard and Mouse",
          "url": "https://www.tncomputers.in/categories/keyboard-and-mouse"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "Headphones",
          "url": "https://www.tncomputers.in/categories/headphones"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "Printer",
          "url": "https://www.tncomputers.in/categories/printer"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "Barcode Scanner",
          "url": "https://www.tncomputers.in/categories/barcode-scanner"
        },
        {
          "@type": "ListItem",
          "position": 17,
          "name": "Gamepad",
          "url": "https://www.tncomputers.in/categories/gamepad"
        },
        {
          "@type": "ListItem",
          "position": 18,
          "name": "Refurbished Laptops",
          "url": "https://www.tncomputers.in/categories/refurbished-laptops"
        },
        {
          "@type": "ListItem",
          "position": 19,
          "name": "AMD",
          "url": "https://www.tncomputers.in/categories/amd"
        },
        {
          "@type": "ListItem",
          "position": 20,
          "name": "Intel",
          "url": "https://www.tncomputers.in/categories/intel"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tncomputers.in/categories#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tncomputers.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Categories",
          "item": "https://www.tncomputers.in/categories"
        }
      ]
    }
  ]
};

export default function CategoriesPageSeo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <CategoriesPage />
    </>
  );
}
