import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavbarPage from "./components/navbar";
import FooterPage from "./components/footer";
import { Toaster } from "react-hot-toast";
import { AppProviders } from "./components/providers";
import { Suspense } from "react";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import BottomNav from "./components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TN Computers: Best Laptop Store in Chennai | New & Refurbished",
  description: " Visit TN Computers, the leading laptop showroom in Chennai. Shop new & refurbished laptops, gaming PCs, and custom builds. Get expert advice & deals today!",
  verification: {
    google: "j8dH9YxheO62XXAxghiINupP8fwIPE1b3eUqjiO53Bs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Razorpay Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KVB12R4DF6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KVB12R4DF6');
          `}
        </Script>


        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TL2K58MJ');
          `}
        </Script>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL2K58MJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AppProviders>
          <Suspense fallback={<div>Loading...</div>}>
            <NavbarPage />
          </Suspense>
          {children}
          <FooterPage />
          <WhatsAppFloatingButton />
          <Toaster position="top-right" reverseOrder={false} />
        </AppProviders>
        <BottomNav />
      </body>
    </html>
  );
}
