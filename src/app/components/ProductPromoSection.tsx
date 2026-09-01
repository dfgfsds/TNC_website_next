'use client';

import Image from 'next/image';
import Link from 'next/link';

const promoBanners = [
  {
    id: 1,
    image: '/1.webp',
    alt: 'TN Computers Promo Banner 1',
    href: '/categories/laptops',
  },
  {
    id: 2,
    image: '/2.webp',
    alt: 'TN Computers Promo Banner 2',
    href: '/categories/printer',
  },
  {
    id: 3,
    image: '/3.webp',
    alt: 'TN Computers Promo Banner 3',
    href: '/shop',
  },
];

export default function ProductPromoSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.href}
            className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white"
          >
            {/* Image Container with Responsive Aspect Ratio */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                priority={banner.id === 1}
              />
              {/* Subtle hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
