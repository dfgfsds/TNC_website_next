'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Banner {
  id?: string | number
  type: string
  image_url: string
  target_url?: string
}

export default function Carousel({ banners = [] }: { banners: Banner[] }) {
  const router = useRouter()

  const mobileBanners = useMemo(
    () => banners.filter((b) => b.type === "Mobile View"),
    [banners]
  )
  const webBanners = useMemo(
    () => banners.filter((b) => b.type === "Web View"),
    [banners]
  )

  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const [currentWebIndex, setCurrentWebIndex] = useState(0)

  // Auto Slide - Mobile
  useEffect(() => {
    if (mobileBanners.length <= 1) return
    const timer = setInterval(() => {
      setCurrentMobileIndex((prev) =>
        prev === mobileBanners.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [mobileBanners.length])

  // Auto Slide - Web
  useEffect(() => {
    if (webBanners.length <= 1) return
    const timer = setInterval(() => {
      setCurrentWebIndex((prev) =>
        prev === webBanners.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [webBanners.length])

  if (!banners || banners.length === 0) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/5] overflow-hidden bg-gray-100 animate-pulse" />
      </div>
    )
  }

  const renderBannerSection = (
    bannerList: Banner[],
    currentIndex: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    className: string,
    isMobile: boolean
  ) => {
    if (!bannerList.length) return null

    const currentBanner = bannerList[currentIndex]

    return (
      <div className={`relative w-full overflow-hidden group ${className}`}>
        <div className="relative w-full aspect-[4/3] md:aspect-[16/5] overflow-hidden bg-white">
          {currentBanner && (
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => router.push(currentBanner.target_url || "/")}
            >
              <Image
                src={currentBanner.image_url}
                alt="TN Computers Banner"
                fill
                priority={isMobile ? currentIndex === 0 : false}
                loading={isMobile ? (currentIndex === 0 ? "eager" : "lazy") : "eager"}
                quality={75}
                sizes={
                  isMobile
                    ? "(max-width: 480px) 100vw, (max-width: 768px) 100vw, 768px"
                    : "(max-width: 1024px) 100vw, (max-width: 1280px) 1280px, 1500px"
                }
                className="object-fill md:object-cover"
              />
            </div>
          )}
        </div>

        {/* Prev Button */}
        {bannerList.length > 1 && (
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? bannerList.length - 1 : prev - 1))
            }
            className="absolute top-1/2 left-2 sm:left-3 z-30 -translate-y-1/2"
            aria-label="Previous slide"
          >
            <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors">
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
        {bannerList.length > 1 && (
          <button
            onClick={() =>
              setIndex((prev) => (prev === bannerList.length - 1 ? 0 : prev + 1))
            }
            className="absolute top-1/2 right-2 sm:right-3 z-30 -translate-y-1/2"
            aria-label="Next slide"
          >
            <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors">
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

  return (
    <>
      {/* Mobile View Slider */}
      {renderBannerSection(
        mobileBanners,
        currentMobileIndex,
        setCurrentMobileIndex,
        "block md:hidden",
        true
      )}

      {/* Web View Slider */}
      {renderBannerSection(
        webBanners,
        currentWebIndex,
        setCurrentWebIndex,
        "hidden md:block",
        false
      )}
    </>
  )
}
