'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

type ProductProps = {
  product?: {
    id: string;
    title: string;
    name: string;
    price: number;
    discount?: number;
    image_urls: string[];
    category_name: string;
  };
  isLoading?: boolean;
};

export default function ProductCard({ product, isLoading }: ProductProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    if (product) {
      const slug = product.id;
      router.push(`/product/${slug}`);
    }
  };

  if (isLoading || !product) {
    return (
      <div className="border border-gray-200 rounded-lg bg-white shadow-sm h-[360px] flex flex-col animate-pulse">
        {/* Image Skeleton */}
        <div className="h-44 bg-gray-200 rounded-t-lg" />

        {/* Content Skeleton */}
        <div className="flex-1 p-4 space-y-3">
          <div className="h-3 w-1/3 bg-gray-300 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-1/2 bg-gray-300 rounded" />
          <div className="h-8 w-full bg-gray-300 rounded mt-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition duration-300 h-[360px] flex flex-col justify-between">
      {/* Product Image */}
      <div className="relative group overflow-hidden bg-gray-50 h-44 flex items-center justify-center">
        <Image
          src={product?.image_urls[0]}
          alt={product.name}
          width={100}
          height={100}
          className="w-full h-44 object-contain bg-gray-50 p-1 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 w-full flex flex-col items-center text-center space-y-2">
        {/* Category */}
        <p className="text-xs text-gray-400 uppercase">{product.category_name}</p>

        {/* Title */}
        <h2 className="font-semibold text-sm text-gray-800 line-clamp-2">
          {product.name}
        </h2>

        {/* Price + Discount */}
        <div className="text-base font-bold text-black">
          ₹{product.price}
          {product.discount && (
            <span className="text-sm text-gray-400 line-through ml-2">
              ₹{product.discount}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="group relative mt-2 w-full sm:w-3/4 overflow-hidden rounded-md bg-[#9333ea] px-4 py-2 text-sm text-white"
        >
          {/* Icon + Text */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <AiOutlineShoppingCart size={18} />
            View Details
          </span>

          {/* Animated Hover Background */}
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#e02727] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
