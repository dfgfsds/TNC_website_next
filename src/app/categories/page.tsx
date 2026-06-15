
import CategoriesPage from "./CategoriesUI";

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": "https://www.tncomputers.in",
    "name": "TN Computers",
    "image": "https://www.tncomputers.in/tn-computers-logo.png",
    "url": "https://www.tncomputers.in/categories",
    "telephone": "+917429667788",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
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
      "closes": "21:00",
    },
    "sameAs": [
      "https://www.facebook.com/tncomputershardware",
      "https://www.instagram.com/tn__computers/",
    ],
  };

  return {
    title: "TN Computers Categories | Best computer online store",
    description:
      "Discover our wide range of electronics, including Desktops, Printers, and PC Components. We offer the best deals on new and refurbished computers in Chennai. Shop now!",

    keywords: [
      "TN Computers",
      "Computer Store Chennai",
      "Online Electronics Store",
      "Refurbished Computers Chennai",
      "Custom PC Build",
      "PC Components",
      "Desktops",
      "Laptops",
      "Printers",
      "Gaming PC",
      "Computer Hardware",
      "Buy Computer Online India",
    ],

    authors: [{ name: "TN Computers" }],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.tncomputers.in/categories",
    },

    openGraph: {
      type: "website",
      url: "https://www.tncomputers.in/categories",
      siteName: "TN Computers",
      title: "TN Computers Categories | Best computer online store",
      description:
        "Discover our wide range of electronics, including Desktops, Printers, and PC Components. We offer the best deals on new and refurbished computers in Chennai. Shop now!",
      locale: "en_IN",
      images: [
        {
          url: "https://www.tncomputers.in/tn-computers-logo.png",
          width: 1200,
          height: 630,
          alt: "TN Computers Categories",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "TN Computers Categories | Best computer online store",
      description:
        "Discover our wide range of electronics, including Desktops, Printers, and PC Components. We offer the best deals on new and refurbished computers in Chennai. Shop now!",
      images: [
        "https://www.tncomputers.in/assets/tn-computers-logo.png",
      ],
    },

    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}

export default function CategoriesPageSeo() {
  return <CategoriesPage/>
}
