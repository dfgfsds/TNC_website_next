// // components/BrandsSection.tsx
// "use client";

// import Image from "next/image";
// import Slider from "react-slick";

// const brands = [
//   {
//     name: "Asus",
//     logo: "/assets/brand/asus.svg",
//   },
//   {
//     name: "HP",
//    logo: "/assets/brand/hp.svg",
//   },
//   {
//     name: "Lenovo",
//     logo: "/assets/brand/lenovo.svg",
//   },
//   {
//     name: "Samsung",
//    logo: "/assets/brand/samsung.svg",
//   },
//   {
//     name: "Dell",
//    logo: "/assets/brand/dell.svg",
//   },

// ];


// export default function BrandsSection() {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section>
//       <div className="py-6 max-w-7xl md-my-0 my-5 mx-auto border-y border-gray-400 relative">
//         {/* Border corners */}
//         <div className="absolute top-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-br-md" />
//         <div className="absolute top-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-bl-md" />
//         <div className="absolute bottom-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tr-md" />
//         <div className="absolute bottom-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tl-md" />

//         {/* Title */}
//         <div className="text-center px-4">
//           <p className="text-sm font-semibold text-gray-700">SHOP BY</p>
//           <h2 className="text-xl font-bold text-[#9333ea] mb-6">POPULAR BRANDS</h2>
//         </div>

//         {/* Brand carousel */}
//         <Slider {...settings} className="px-4">
//           {brands.map((brand) => (
//             <div key={brand.name} className="flex justify-center items-center px-2">
//               <Image
//                 src={brand.logo}
//                 alt={brand.name}
//                 width={100}
//                 height={100}
//                 className="object-contain bg-slate-100 w-full rounded-lg h-36"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'Asus', logo: '/assets/brand/asus.svg' },
  { name: 'HP', logo: '/assets/brand/hp.svg' },
  { name: 'Lenovo', logo: '/assets/brand/lenovo.svg' },
  { name: 'Samsung', logo: '/assets/brand/samsung.svg' },
  { name: 'Dell', logo: '/assets/brand/dell.svg' },
];

export default function BrandsSection() {
  const items = brands;
  const [index, setIndex] = useState(0);

  const ITEMS_PER_VIEW = 5;
  const maxIndex =
    items.length > ITEMS_PER_VIEW
      ? items.length - ITEMS_PER_VIEW
      : 0;

  // swipe refs – SAME AS TRENDING PRODUCTS
  const startX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // 👉 AUTO SLIDE (EXACT SAME)
  useEffect(() => {
    if (!items.length) return;

    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [items.length, maxIndex]);

  // 👉 TOUCH START (EXACT SAME)
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;

    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  // 👉 TOUCH END (EXACT SAME)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (diff < -50) {
      setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }

    isDragging.current = false;
  };

  return (
    <section>
      <div className="py-6 max-w-7xl my-5 mx-auto border-y border-gray-400 relative">
        {/* Border corners */}
        <div className="absolute top-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-br-md" />
        <div className="absolute top-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-bl-md" />
        <div className="absolute bottom-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tr-md" />
        <div className="absolute bottom-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tl-md" />

        {/* Title */}
        <div className="text-center px-4 mb-6">
          <p className="text-sm font-semibold text-gray-700">SHOP BY</p>
          <h2 className="text-xl font-bold text-[#9333ea]">
            POPULAR BRANDS
          </h2>
        </div>

        {/* SLIDER – SAME STRUCTURE AS TRENDING */}
        <div
          className="overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / ITEMS_PER_VIEW)}%)`,
            }}
          >
            {items.map((brand) => (
              <div
                key={brand.name}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 flex-shrink-0"
              >
                <div className="h-36 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
