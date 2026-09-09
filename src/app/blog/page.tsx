import { Metadata } from "next";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Computer & Laptop Buying Guides in Chennai | TN Computers",
  description:
    "Explore computer and laptop buying guides, PC reviews, gaming PC tips and IT accessory advice from TN Computers in Chennai.",
  keywords:
    "computer buying guide Chennai, laptop buying guide Chennai, laptop reviews Chennai, PC reviews Chennai, gaming PC guide Chennai, custom PC builds Chennai, refurbished laptops Chennai, computer accessories Chennai, PC components Chennai, gaming laptops Chennai, TN Computers Chennai",
  alternates: {
    canonical: "https://www.tncomputers.in/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Computer & Laptop Buying Guides in Chennai | TN Computers",
    description:
      "Explore computer and laptop buying guides, PC reviews, gaming PC tips and IT accessory advice from TN Computers in Chennai.",
    url: "https://www.tncomputers.in/blog",
    siteName: "TN Computers",
    locale: "en_IN",
    images: [
      {
        url: "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
        alt: "TN Computers Blog - Laptop, PC and Gaming Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer & Laptop Buying Guides in Chennai | TN Computers",
    description:
      "Explore computer and laptop buying guides, PC reviews, gaming PC tips and IT accessory advice from TN Computers in Chennai.",
    images: [
      "https://www.tncomputers.in/_next/static/media/tn-computers-logo.5bf25c46.png",
    ],
  },
};

export default function BlogPage() {
  return <BlogsPageClient />;
}