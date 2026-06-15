// 'use client';

// import { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import { FaFire } from 'react-icons/fa';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { useProducts } from '../../../context/ProductsContext';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { slugConvert } from '../../../lib/utils';


// export default function TrendingProducts() {
//   const router = useRouter()

//   const handleViewDetails = (name: any) => {
//     router.push(`/product/${slugConvert(name)}`)
//   }

//   const { products } = useProducts()

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     rows: 1,
//     slidesPerRow: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           rows: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           rows: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           rows: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <section className="py-6 md-py-12 px-4 max-w-7xl mx-auto">
//       <div className="flex items-center gap-2 mb-6">
//         {/* <FaFire className="text-[#9333ea]" size={24} /> */}
//         <h2 className="text-xl md-text-2xl font-bold">
//           <span className="text-[#9333ea]">TRENDING</span> PRODUCTS
//         </h2>
//       </div>

//       <Slider {...settings}>
//         {products?.data?.map((item: any, index: number) => (
//           <div key={item.id} className="px-3">
//             <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition duration-300 h-[360px] flex flex-col justify-between">
//               {/* Image */}
//               <div className="relative group overflow-hidden">
//                 <Image
//                   height={100}
//                   width={100}
//                   src={item?.image_urls[0]}
//                   alt={item.name}
//                   className="w-full h-44 object-contain bg-gray-50 p-1 transition-transform duration-300 group-hover:scale-105"
//                 />
//                 {item.isTrending && (
//                   <span className="absolute top-2 left-2 bg-[#9333ea] text-white text-xs px-2 py-1 rounded">
//                     TRENDING
//                   </span>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <p className="text-xs text-gray-400 uppercase">{item.category_name}</p>
//                 <h3 className="text-sm font-semibold mt-1 line-clamp-2">{item.name}</h3>
//                 <div className="mt-2 text-lg font-bold text-black">
//                   ₹{item?.price}{' '}
//                   <span className="text-sm text-gray-400 line-through ml-2">
//                     ₹{item?.discount}
//                   </span>
//                 </div>
//                 <div className="mt-auto">
//                   <button onClick={() => handleViewDetails(item?.name)} className="group relative mt-4 w-full overflow-hidden rounded-md bg-[#9333ea] px-4 py-2 text-sm text-white">
//                     {/* Icon + Text Layer */}
//                     <span className="relative z-10 flex items-center justify-center gap-2">
//                       <AiOutlineShoppingCart size={18} />
//                       View Details
//                     </span>

//                     {/* Hover Background Animation Layer */}
//                     <span className="absolute inset-0 overflow-hidden rounded-md">
//                       <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#e02727] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useProducts } from '../../../context/ProductsContext';
import { useRouter } from 'next/navigation';
import { slugConvert } from '../../../lib/utils';

export default function TrendingProducts({ products }: any) {
  // const { products } = useProducts();
  const router = useRouter();
  const items = products || [];
  const [index, setIndex] = useState(0);

  const ITEMS_PER_VIEW = 4;
  const maxIndex =
    items.length > ITEMS_PER_VIEW
      ? items.length - ITEMS_PER_VIEW
      : 0;

  // swipe refs
  const startX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // 👉 AUTO SLIDE
  useEffect(() => {
    if (!items.length) return;

    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [items.length, maxIndex]);

  // 👉 TOUCH START
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;

    // pause auto slide while swiping
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  // 👉 TOUCH END
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      // swipe left
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (diff < -50) {
      // swipe right
      setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }

    isDragging.current = false;
  };

  if (!items.length) return null;

  return (
    <section className="py-6 md:py-12 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        <span className="text-[#9333ea]">TRENDING</span> PRODUCTS
      </h2>

      {/* Slider */}
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 25}%)`,
          }}
        >
          {items.map((item: any) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-3 flex-shrink-0"
            >
              <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition h-[360px] flex flex-col">
                {/* Image */}
                <div className="relative h-44 bg-gray-50">
                  <Image
                    src={item.image_urls?.[0]}
                    alt={item.name}
                    fill
                    loading="lazy"
                    sizes="25vw"
                    className="object-contain p-2"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-gray-400 uppercase">
                    {item.category_name}
                  </p>

                  <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="mt-2 text-lg font-bold">
                    ₹{item.price}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ₹{item.discount}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      router.push(
                        `/product/${slugConvert(item.name)}`
                      )
                    }
                    className="mt-auto bg-[#9333ea] text-white text-sm py-2 rounded-md hover:bg-[#7e22ce]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
