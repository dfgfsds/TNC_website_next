
'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { baseUrl } from '../../../api-endpoints/ApiUrls'
import { useVendor } from '../../../context/VendorContext'
import { useRouter } from 'next/navigation'

// export default function Carousel() {
export default function Carousel({ banners = [] }: { banners: any[] }) {
  const router = useRouter()
  const { vendorId } = useVendor()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Detect Mobile View safely
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Filter banners based on screen
  const filteredBanners = useMemo(() => {
    if (!banners?.length) return []

    return banners.filter((banner: any) =>
      isMobile
        ? banner.type === "Mobile View"
        : banner.type === "Web View"
    )
  }, [banners, isMobile])

  // Auto Slide
  useEffect(() => {
    if (!filteredBanners.length) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === filteredBanners.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [filteredBanners])

  // Reset index when banners change
  useEffect(() => {
    setCurrentIndex(0)
  }, [isMobile])

  // Prev
  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredBanners.length - 1 : prev - 1
    )
  }

  // Next
  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredBanners.length - 1 ? 0 : prev + 1
    )
  }

  // Prevent rendering if we have no banners at all after filtering
  if (!filteredBanners || filteredBanners.length === 0) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[16/5] overflow-hidden bg-gray-100 animate-pulse flex items-center justify-center">
        </div>
      </div>
    )
  }

  return (


    <div className="relative w-full overflow-hidden">

      {/* Banner */}
      <div className="relative w-full aspect-[16/5] overflow-hidden bg-white">

        {!filteredBanners.length && (
          <div className="h-full bg-gray-200 animate-pulse" />
        )}

        {filteredBanners[currentIndex] && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() =>
              router.push(
                filteredBanners[currentIndex]?.target_url || "/"
              )
            }
          >
            <Image
              src={filteredBanners[currentIndex]?.image_url}
              alt="TN Computers Hero Banner"
              fill
              priority
              className="object-contain sm:object-cover"
            />
          </div>
        )}

      </div>

      {/* Prev Button */}
      {filteredBanners.length > 1 && (
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-2 sm:left-3 z-30 -translate-y-1/2"
          aria-label="Previous slide"
        >
          <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/40 backdrop-blur-md">
            <svg
              className="w-4 h-4 text-white"
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
      )}

      {/* Next Button */}
      {filteredBanners.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 sm:right-3 z-30 -translate-y-1/2"
          aria-label="Next slide"
        >
          <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/40 backdrop-blur-md">
            <svg
              className="w-4 h-4 text-white"
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
      )}
    </div>
  )
}

