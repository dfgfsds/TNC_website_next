// import type { Metadata } from "next";
// import RefundPolicy from "./refundPolicy";


// export const metadata: Metadata = {
//   title: "Refund & Return Policy | TN Computers",
//   description:
//     "Check TN Computers refund and return policy for product cancellations, replacements, eligibility and processing timelines.",
// };

// export default function Page() {
//   return <RefundPolicy/>;
// }


import type { Metadata } from "next";
import Script from "next/script";

import RefundPolicy from "./refundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | TN Computers Chennai",

  description:
    "Read TN Computers refund and return policy for laptops, computers, accessories, replacements, warranty, and order cancellations.",

  keywords: [
    "TN Computers refund policy",
    "laptop refund policy Chennai",
    "computer return policy",
    "electronics refund terms",
    "refund and replacement policy",
    "gaming PC return policy",
    "TN Computers returns",
    "computer accessories refund policy",
    "warranty and refund policy Chennai",
    "online computer store refund",
  ],

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  alternates: {
    canonical: "https://www.tncomputers.in/refund-policy/",
  },

  openGraph: {
    type: "website",
    title: "Refund Policy | TN Computers Chennai",
    description:
      "Read TN Computers refund and return policy for laptops, computers, accessories, replacements, warranty, and order cancellations.",
    url: "https://www.tncomputers.in/refund-policy",
    siteName: "TN Computers",
    images: [
      {
        url: "https://www.tncomputers.in/tn-computers-logo.png",
        alt: "TN Computers Refund Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | TN Computers Chennai",
    description:
      "Review TN Computers refund, replacement, cancellation, and warranty policy for electronics and accessories.",
    images: [
      "https://www.tncomputers.in/tn-computers-logo.png",
    ],
  },

  other: {
    image_src:
      "https://www.tncomputers.in/tn-computers-logo.png",
  },
};

const refundPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Refund Policy - TN Computers",
  "description":
    "Read TN Computers refund and return policy regarding laptops, desktops, accessories, warranty claims, replacements, and cancellations.",
  "url": "https://www.tncomputers.in/refund-policy",
  "image":
    "https://www.tncomputers.in/tn-computers-logo.png",

  "publisher": {
    "@type": "Organization",
    "name": "TN Computers",
    "url": "https://www.tncomputers.in"
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="refund-policy-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(refundPolicySchema),
        }}
      />

      <RefundPolicy />
    </>
  );
}