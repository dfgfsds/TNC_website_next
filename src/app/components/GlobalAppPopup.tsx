"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/tn-computers-logo.png"

export default function GlobalAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen and closed the popup (optional, but good practice)
      const hasSeenPopup = localStorage.getItem("hasSeenAppPopup");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenAppPopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center">
        <button
          onClick={closePopup}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 flex justify-center">
                <Image alt='logo' className='h-14 w-auto' src={logoImg} width={300} height={120} />
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">Download Our App</h3>
        <p className="mb-6 text-sm text-gray-600">
          Get the best deals on new & refurbished laptops directly on your phone!
        </p>

        <Link
          href="https://play.google.com/store/apps/details?id=in.tncomputers.app&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            // Optional: close on click
            closePopup();
          }}
          className="inline-block transition-transform hover:scale-105"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="h-16 w-auto mx-auto"
          />
        </Link>
      </div>
    </div>
  );
}
