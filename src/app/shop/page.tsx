import ShopPage from "./ShopClient";


export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "TN Computers",
        "image": "https://www.tncomputers.in/tn-computers-logo.png",
        "url": "https://www.tncomputers.in/",
        "telephone": "+917429667788",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar",
          "addressLocality": "Chennai",
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
      },
      {
        "@type": "CollectionPage",
        "name": "Shop - TN Computers",
        "description":
          "Buy laptops, desktop computers & computer accessories online from TN Computers.",
        "url": "https://www.tncomputers.in/shop",
        "isPartOf": {
          "@type": "WebSite",
          "name": "TN Computers",
          "url": "https://www.tncomputers.in/",
        },
      },
    ],
  };

  return {
    title: "Buy Laptops, Desktops & Computer Accessories Online",
    description:
      "Buy laptops, desktop computers & computer accessories online from TN Computers. Best computer shop for quality PCs, peripherals & affordable prices.",

    robots: {
      index: true,
      follow: true,
    
    },
      keywords: [
      "TN Computers shop",
      "buy laptops online",
      "refurbished laptops Chennai",
      "desktop computers",
      "computer accessories",
      "gaming PCs",
      "PC peripherals",
      "budget laptops",
      "computer store KK Nagar",
      "new and refurbished computers"
    ],


    alternates: {
      canonical: "https://www.tncomputers.in/shop",
    },

    openGraph: {
      type: "website",
      siteName: "TN Computers",
      title: "Buy Laptops, Desktops & Computer Accessories Online",
      description:
        "Buy laptops, desktop computers & computer accessories online from TN Computers. Best computer shop for quality PCs, peripherals & affordable prices.",
      url: "https://www.tncomputers.in/shop",
      locale: "en_IN",
      images: [
        {
          url: "https://www.tncomputers.in/tn-computers-logo.png",
          width: 1200,
          height: 630,
          alt: "TN Computers",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Buy Laptops, Desktops & Computer Accessories Online",
      description:
        "Shop the best new and refurbished laptops and desktops in Chennai at TN Computers.",
      images: ["https://www.tncomputers.in/tn-computers-logo.png"],
    },

    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}


export default function ShopClient() {
  return <ShopPage/>;
}
