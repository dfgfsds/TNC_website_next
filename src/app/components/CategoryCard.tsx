'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { slugConvert } from '../../../lib/utils'

interface Props {
  name: string
  image: string
  products: number
  id: any
}

function CategoryCard({ name, image }: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/categories/${slugConvert(name)}`)
  }

  return (
    <div
      onClick={handleClick}
      role="button"
      aria-label={`Open ${name}`}
      className="group relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 min-h-[180px] sm:min-h-[240px] md:min-h-[280px]"
    >
      <Image
        src={image}
        alt={name}
        fill
        loading="lazy"
        quality={70}
        sizes="(max-width: 640px) 220px, (max-width: 1024px) 320px, 400px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom */}
      <div className="absolute bottom-0 w-full p-3 sm:p-4 z-10">
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md transition-all group-hover:scale-105"
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default memo(CategoryCard)