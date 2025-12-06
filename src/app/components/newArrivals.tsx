'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaFire } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useProducts } from '../../../context/ProductsContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function TrendingProducts() {
  const router = useRouter()

  const handleViewDetails = (id: any) => {
    router.push(`/product/${id}`)
  }

  const { products } = useProducts()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <section className="py-6 md-py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        {/* <FaFire className="text-[#9333ea]" size={24} /> */}
        <h2 className="text-xl md-text-2xl font-bold">
          <span className="text-[#9333ea]">TRENDING</span> PRODUCTS
        </h2>
      </div>

      <Slider {...settings}>
        {products?.data?.map((item: any, index: number) => (
          <div key={item.id} className="px-3">
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition duration-300 h-[360px] flex flex-col justify-between">
              {/* Image */}
              <div className="relative group overflow-hidden">
                <Image
                  height={100}
                  width={100}
                  src={item?.image_urls[0]}
                  alt={item.name}
                  className="w-full h-44 object-contain bg-gray-50 p-1 transition-transform duration-300 group-hover:scale-105"
                />
                {item.isTrending && (
                  <span className="absolute top-2 left-2 bg-[#9333ea] text-white text-xs px-2 py-1 rounded">
                    TRENDING
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-gray-400 uppercase">{item.category_name}</p>
                <h3 className="text-sm font-semibold mt-1 line-clamp-2">{item.name}</h3>
                <div className="mt-2 text-lg font-bold text-black">
                  ₹{item?.price}{' '}
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ₹{item?.discount}
                  </span>
                </div>
                <div className="mt-auto">
                  <button onClick={() => handleViewDetails(item?.id)} className="group relative mt-4 w-full overflow-hidden rounded-md bg-[#9333ea] px-4 py-2 text-sm text-white">
                    {/* Icon + Text Layer */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <AiOutlineShoppingCart size={18} />
                      View Details
                    </span>

                    {/* Hover Background Animation Layer */}
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#e02727] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
