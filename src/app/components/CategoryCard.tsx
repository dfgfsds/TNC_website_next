'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { slugConvert } from '../../../lib/utils';

interface Props {
  name: string;
  image: string;
  products: number;
  link: string;
  id: any;
}

export default function CategoryCard({ name, image, products, link, id }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/categories/${slugConvert(name)}`);
  };

  return (
    <div
      className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 min-h-[150px] sm:min-h-[240px] md:min-h-[280px] flex flex-col justify-between"
      onClick={handleClick}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0 transition duration-300" />

      {/* Title */}
      {/* <h3 className="absolute top-10 sm:top-16 left-3 sm:left-5 text-dark text-lg sm:text-xl md:text-2xl font-extrabold z-10 leading-snug drop-shadow max-w-[85%] sm:max-w-[70%]">
        {name}
      </h3> */}

      {/* Bottom Content */}
      <div className="relative z-10 p-3 sm:p-4 mt-auto">
        <div className="flex items-center justify-between mt-2">
          <span className="text-dark text-xs sm:text-sm font-medium">
            {/* {products} Products */}
          </span>
          <button
            onClick={handleClick}
            className="inline-block bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"

          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
