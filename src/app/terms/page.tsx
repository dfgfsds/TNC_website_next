// import type { Metadata } from "next";

// import TermsPage from "./terms";

// export const metadata: Metadata = {
//   title: "Terms and Conditions | TN Computers",
//   description:
//     "View the terms and conditions for using TN Computers website, products, services, payments and customer responsibilities.",
// };

// export default function Page() {
//   return <TermsPage/>;
// }

import type { Metadata } from "next";
import Script from "next/script";

import TermsPage from "./terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | TN Computers Chennai",

  description:
    "Read the Terms & Conditions of TN Computers for purchases, services, warranties, shipping, returns, and website usage policies.",

  keywords: [
    "terms and conditions TN Computers",
    "terms and conditions Chennai",
    "laptop store terms Chennai",
    "computer shop terms India",
    "TN Computers terms policy",
    "website terms Chennai",
    "IT store terms and conditions Chennai",
    "online store terms India",
    "TN Computers usage policy",
    "Chennai computer store legal terms",
    "electronics store terms Chennai",
  ],

  robots: "index, follow, max-image-preview:large",

  alternates: {
    canonical: "https://www.tncomputers.in/terms/",
  },

  openGraph: {
    type: "website",
    title: "Terms & Conditions | TN Computers Chennai",
    description:
      "Read the Terms & Conditions of TN Computers for purchases, services, warranties, shipping, returns, and website usage policies.",
    url: "https://www.tncomputers.in/terms",
    siteName: "TN Computers",
    images: [
      {
        url: "https://www.tncomputers.in/tn-computers-logo.png",
        alt: "TN Computers Terms and Conditions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | TN Computers Chennai",
    description:
      "Review TN Computers terms for orders, warranty, shipping, returns, and website policies.",
    images: [
      "https://www.tncomputers.in/tn-computers-logo.png",
    ],
  },

  other: {
    image_src:
      "https://www.tncomputers.in/tn-computers-logo.png",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms & Conditions - TN Computers",
  "description":
    "Read the Terms & Conditions for TN Computers regarding product purchases, shipping, warranty, returns, and website usage.",
  "url": "https://www.tncomputers.in/terms",
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
        id="terms-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema),
        }}
      />

      <TermsPage />
    </>
  );
}