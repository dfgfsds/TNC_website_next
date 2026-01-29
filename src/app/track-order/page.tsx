import TrackOrder from "./TrackOrderClient"


// SEO & Metadata for App Router
export const metadata = {
  title: "Track Order | TNComputers – Order Status & Delivery",
  description: "Track your TNComputers order instantly. Get real-time updates on order status, shipment progress, delivery details and estimated arrival.",
  robots: "index, follow",
  openGraph: {
    title: "Track Order | TNComputers – Order Status & Delivery",
    description: "Track your TNComputers order instantly. Get real-time updates on order status, shipment progress, delivery details and estimated arrival.",
    url: "https://www.tncomputers.in/track-order",
    siteName: "TNComputers",
    images: [
      {
        url: "https://www.tncomputers.in/veriton-M200-H610.jpg",
        width: 1200,
        height: 630,
        alt: "Track your TNComputers order",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Order | TNComputers – Order Status & Delivery",
    description: "Track your TNComputers order instantly with real-time order status and delivery updates.",
    images: ["https://www.tncomputers.in/veriton-M200-H610.jpg"],
  },
  alternates: {
    canonical: "https://www.tncomputers.in/track-order",
  },
}

export default function TrackOrderPage() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Track Order",
            "url": "https://www.tncomputers.in/track-order",
            "description": "Track your TNComputers order instantly and get real-time delivery and shipment updates.",
            "publisher": {
              "@type": "Organization",
              "name": "TNComputers",
              "url": "https://www.tncomputers.in"
            }
          })
        }}
      />
      

    <TrackOrder/>
    </>
  )
}
