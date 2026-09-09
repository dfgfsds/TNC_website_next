'use client';

import { useState } from 'react';
import Image from 'next/image';
import QrImage from "../../../public/assets/tn_computers_google_play_qr.png";

export default function MobileAppQR() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 flex transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'
        }`}
    >
      <div className="bg-white rounded-l-2xl shadow-[-5px_0_25px_rgba(0,0,0,0.1)] border border-r-0 border-gray-200 flex overflow-hidden group">

        {/* Toggle Button Area (Left side) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[40px] shrink-0 bg-gray-50 flex flex-col items-center justify-center gap-1.5 border-r border-gray-100 hover:bg-purple-50 transition-colors cursor-pointer z-10 py-3"
          aria-label={isOpen ? "Hide QR Code" : "Show QR Code"}
        >
          {isOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 group-hover:text-gray-700 transition-colors"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          ) : (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#a100fe]"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span
                className="text-[9px] font-extrabold text-[#a100fe] uppercase tracking-widest leading-tight"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                App QR
              </span>
            </>
          )}
        </button>

        {/* QR Content (Right side) */}
        <div className="p-3 flex flex-col items-center shrink-0 w-[120px]">
          <div className="w-[90px] h-[90px] relative mb-2">
            <Image
              src={QrImage}
              alt="TN Computers App QR"
              fill
              sizes="90px"
              loading="lazy"
              className="object-contain"
            />
          </div>
          <p className="text-[9px] font-bold tracking-[0.15em] text-gray-700 text-center uppercase">
            Download App
          </p>
        </div>

      </div>
    </div>
  );
}

