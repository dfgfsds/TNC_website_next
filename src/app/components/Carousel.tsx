'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { baseUrl } from '../../../api-endpoints/ApiUrls'
import { useVendor } from '../../../context/VendorContext'
import { useRouter } from 'next/navigation'

export default function Carousel() {
  const router = useRouter();
  const { vendorId } = useVendor();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState<any[]>([]);

  // Fetch banners
  const bannerGetApi = async () => {
    try {
      const res = await axios.get(`${baseUrl}/banners/?vendorId=${vendorId}`);
      if (res.data?.banners) {
        setBanners(res.data.banners);
      } else {
        console.warn('Unexpected API response:', res.data);
      }
    } catch (error) {
      console.log('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    bannerGetApi();
  }, [vendorId]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }
  console.log(banners, 'banners');


  return (
    <div className="relative w-full">
      <div className="relative h-56 md:h-[400px] overflow-hidden ">
        {banners.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            onClick={() => router.push(src?.target_url || '/')}
          >
            <Image
              src={src?.image_url}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 z-30 flex items-center justify-center p-2 sm:p-3 md:p-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 z-30 flex items-center justify-center p-2 sm:p-3 md:p-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>

    </div>
  )
}
