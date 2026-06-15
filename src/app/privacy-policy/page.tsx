// import type { Metadata } from "next";

// import PrivacyPolicyPage from "./PrivacyClient";

// export const metadata: Metadata = {
//   title: "Privacy Policy | TN Computers India",
//   description:
//     "Read TN Computers privacy policy to understand how we collect, use and protect your personal information on our website.",
// };

// export default function Page() {
//   return <PrivacyPolicyPage />;
// }

import type { Metadata } from "next";
import Script from "next/script";



import PrivacyPolicyPage from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | TN Computers Chennai - Laptop & Desktop Store",

  description:
    "Read the privacy policy of TN Computers, Chennai's trusted laptop and desktop store. Learn how we collect, use, and protect your personal data securely.",

  keywords: [
    "privacy policy TN Computers",
    "privacy policy Chennai",
    "laptop store privacy policy Chennai",
    "computer shop privacy policy India",
    "data protection TN Computers",
    "user data privacy Chennai",
    "website privacy policy India",
    "IT store privacy policy Chennai",
    "TN Computers data policy",
    "personal data protection Chennai",
    "online privacy TN Computers",
    "computer store terms privacy Chennai",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://www.tncomputers.in/privacy-policy/",
  },

  openGraph: {
    type: "website",
    title: "Privacy Policy | TN Computers Chennai",
    description:
      "Learn how TN Computers Chennai collects, uses, and protects your personal information. Your privacy matters to us.",
    url: "https://www.tncomputers.in/privacy-policy/",
    siteName: "TN Computers",
    locale: "en_IN",
    images: [
      {
        url: "https://www.tncomputers.in/tn-computers-logo.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TN Computers Chennai",
    description:
      "Read the privacy policy of TN Computers Chennai. We ensure secure handling of your personal information.",
    images: [
      "https://www.tncomputers.in/tn-computers-logo.png",
    ],
  },

  other: {
    "image_src":
      "https://www.tncomputers.in/tn-computers-logo.png",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "url": "https://www.tncomputers.in/privacy-policy/",
  "description":
    "Privacy policy of TN Computers Chennai explaining how user data is collected, used, and protected.",
  "publisher": {
    "@type": "Organization",
    "name": "TN Computers",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressCountry": "India"
    }
  }
};

export default function Page() {
  return (
    <>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />

      <PrivacyPolicyPage />
    </>
  );
}