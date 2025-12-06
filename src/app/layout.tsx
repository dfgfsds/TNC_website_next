// app/layout.tsx or app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script"; // ✅ Proper script usage
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavbarPage from "./components/navbar";
import FooterPage from "./components/footer";
import { Toaster } from "react-hot-toast";
import { AppProviders } from "./components/providers"; // ✅ Adjusted relative path
import { Suspense } from "react";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TN COMPUTERS",
  description: "Buy best computers products online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Razorpay script in <head> using Script component */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <AppProviders>
     <Suspense fallback={<div>Loading...</div>}>
          <NavbarPage />
          </Suspense>
          {children}
          
          <FooterPage />
          <WhatsAppFloatingButton/>
          <Toaster position="top-right" reverseOrder={false} />
        </AppProviders>
      </body>
    </html>
  );
}
