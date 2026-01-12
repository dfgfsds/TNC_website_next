// 'use client';

// import Image from 'next/image';
// import { AiFillStar } from 'react-icons/ai';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const reviews = [
//   {
//     title: 'Great keyboard!',
//     text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate because I’d the way the switches respond to my fingers. Great keyboard!",
//     date: '28 Jun 2023',
//     author: 'Melvin N.',
//     productImg:
//       'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
//   },
//   {
//     title: 'Love the Sound',
//     text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built and protected.',
//     date: '28 Jun 2023',
//     author: 'Gregory D',
//     productImg:
//       'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
//   },
//   {
//     title: 'Great keyboard!',
//     text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate because I’d the way the switches respond to my fingers. Great keyboard!",
//     date: '28 Jun 2023',
//     author: 'Melvin N.',
//     productImg:
//       'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
//   },
//   {
//     title: 'Love the Sound',
//     text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built and protected.',
//     date: '28 Jun 2023',
//     author: 'Gregory D',
//     productImg:
//       'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
//   },
// ];

// export default function CustomerReviewSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-[#f5f7fc] py-12 px-4 md:px-8">

//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center mb-8">
//         <h2 className="text-3xl font-bold">
//           <span className="text-[#9333ea]">CUSTOMER</span> REVIEW
//         </h2>
//         <div className="mt-2 flex items-center justify-center gap-2 text-sm">
//           <span className="text-[#9333ea] font-semibold text-lg">4.8</span>
//           {[...Array(5)].map((_, i) => (
//             <AiFillStar key={i} size={14} className="text-yellow-400" />
//           ))}
//           <span className="text-gray-600 ml-1">view all 7,185 reviews</span>
//         </div>
//       </div>

//       {/* Review + Video Layout */}

// <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
//   {/* Right: Video Testimonial (Shown First on Mobile) */}
//   <div className="w-full md:w-1/3 order-1 md:order-2">
//     <div className="relative rounded-xl overflow-hidden h-full  min-h-[240px] md-min-h-[280px]">
//       <Image
//         src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
//         alt="testimonial"
//         width={500}
//         height={320}
//         className="h-full w-full object-cover rounded-xl"
//       />
//       <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md text-xl">
//         ▶
//       </div>
//     </div>
//   </div>

//   {/* Left: Review Slider */}
//   <div className="w-full md:w-2/3 order-2 md:order-1">
//     <Slider {...settings}>
//       {reviews.map((review, index) => (
//         <div key={index} className="p-0  md-p-2">
//           <div className="bg-white p-4 mr-4 md:p-5 rounded-xl shadow-sm h-[250px] flex">
//             <div className="flex flex-row justify-between gap-4 w-full">
//               {/* Text Content */}
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg mb-1">{review.title}</h3>
//                 <p className="text-gray-700 text-sm mb-2 line-clamp-3">{review.text}</p>
//                 <div className="flex items-center gap-1 text-yellow-400 mb-1">
//                   {[...Array(5)].map((_, i) => (
//                     <AiFillStar key={i} size={16} />
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-500">{review.date}</p>
//                 <p className="text-sm font-semibold mt-1">{review.author}</p>
//               </div>

//               {/* Product Image */}
//               <div className="flex-shrink-0 flex items-start">
//                 <Image
//                   src={review.productImg}
//                   alt="product"
//                   width={70}
//                   height={70}
//                   className="rounded border object-contain w-16 h-16"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   </div>
// </div>

//     </section>
//   );
// }


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const reviews = [
//   {
//     title: 'Love the Sound',
//     text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built.',
//     date: '28 Jun 2023',
//     author: 'Gregory D',
//     brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
//   },
//   {
//     title: 'Great keyboard!',
//     text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate.",
//     date: '28 Jun 2023',
//     author: 'Melvin N.',
//     brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
//   },
//   {
//     title: 'Excellent Service',
//     text: 'Fast delivery and amazing support. Highly recommended.',
//     date: '28 Jun 2023',
//     author: 'Arjun K',
//     brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
//   },
//   {
//     title: 'Super Experience',
//     text: 'Build quality and pricing both are excellent.',
//     date: '28 Jun 2023',
//     author: 'Rahul S',
//     brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
//   },
// ];

// export default function CustomerReviewSection() {
//   const [index, setIndex] = useState(0);
//   const startX = useRef(0);

//   const TOTAL_SLIDES = Math.ceil(reviews.length / 2);

//   // auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [TOTAL_SLIDES]);

//   // swipe
//   const onTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e: React.TouchEvent) => {
//     const diff = startX.current - e.changedTouches[0].clientX;
//     if (diff > 50) setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
//     if (diff < -50)
//       setIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
//   };

//   return (
//     <section className="bg-[#f5f7fc] py-12 px-4">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold">
//           <span className="text-[#9333ea]">CUSTOMER</span> REVIEW
//         </h2>

//         <div className="mt-2 flex justify-center items-center gap-1 text-yellow-400">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.363-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
//             </svg>
//           ))}
//           <span className="text-gray-600 text-sm ml-2">4.8 · view all 7,185 reviews</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Reviews */}
//         <div
//           className="lg:col-span-2 overflow-hidden"
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {Array.from({ length: TOTAL_SLIDES }).map((_, slideIdx) => (
//               <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {reviews.slice(slideIdx * 2, slideIdx * 2 + 2).map((r, i) => (
//                   <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
//                     <div className="flex justify-between items-start">
//                       <h3 className="font-bold text-lg">{r.title}</h3>
//                       {/* <Image src={r.brandImg} alt="brand" width={40} height={40} /> */}
//                       <div className="flex-shrink-0 flex items-start">
//                         <Image
//                           src={r.brandImg}
//                           alt="product"
//                           width={70}
//                           height={70}
//                           className="rounded border object-contain w-16 h-16"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mt-3 text-sm line-clamp-4">{r.text}</p>
//                     <div className="flex gap-1 text-yellow-400 mt-3">
//                       {Array.from({ length: 5 }).map((_, j) => (
//                         <svg key={j} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.363-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">{r.date}</p>
//                     <p className="font-semibold text-sm">{r.author}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
//               <span
//                 key={i}
//                 className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? 'bg-black' : 'bg-gray-300'
//                   }`}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Video */}
//         <div className="relative rounded-xl overflow-hidden min-h-[280px]">
//           <Image
//             src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
//             alt="testimonial"
//             fill
//             className="object-cover"
//             sizes="(max-width:768px) 100vw, 33vw"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl">
//               ▶
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    title: 'Love the Sound',
    text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built.',
    date: '28 Jun 2023',
    author: 'Gregory D',
    brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
  },
  {
    title: 'Great keyboard!',
    text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate.",
    date: '28 Jun 2023',
    author: 'Melvin N.',
    brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
  },
  {
    title: 'Excellent Service',
    text: 'Fast delivery and amazing support. Highly recommended.',
    date: '28 Jun 2023',
    author: 'Arjun K',
    brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
  },
  {
    title: 'Super Experience',
    text: 'Build quality and pricing both are excellent.',
    date: '28 Jun 2023',
    author: 'Rahul S',
    brandImg: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
  },
];

export default function CustomerReviewSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(0);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const ITEMS_PER_SLIDE = isMobile ? 1 : 2;
  const TOTAL_SLIDES = Math.ceil(reviews.length / ITEMS_PER_SLIDE);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 4000);
    return () => clearInterval(timer);
  }, [TOTAL_SLIDES]);

  // swipe
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) setIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    if (diff < -50)
      setIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  return (
    <section className="bg-[#f5f7fc] py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          <span className="text-[#9333ea]">CUSTOMER</span> REVIEW
        </h2>

        <div className="mt-2 flex justify-center items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.363-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
            </svg>
          ))}
          <span className="text-gray-600 text-sm ml-2">4.8 · view all 7,185 reviews</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reviews */}
        <div
          className="lg:col-span-2 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: TOTAL_SLIDES }).map((_, slideIdx) => (
              <div
                key={slideIdx}
                className={`min-w-full grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'
                  }`}
              >
                {reviews
                  .slice(
                    slideIdx * ITEMS_PER_SLIDE,
                    slideIdx * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((r, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
                    >
                      {/* Header */}
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-bold text-lg">{r.title}</h3>
                          <p className="text-gray-600 mt-1 text-sm line-clamp-4">
                            {r.text}
                          </p>
                        </div>
                        {/* <Image
                          src={r.brandImg}
                          alt="brand"
                          width={56}
                          height={56}
                          className="rounded border p-2"
                        /> */}
                        <div className="flex-shrink-0 flex items-start">
                          <Image
                            src={r.brandImg}
                            alt="product"
                            width={70}
                            height={70}
                            className="rounded border object-contain w-16 h-16"
                          />
                        </div>
                      </div>

                      {/* Review text */}


                      {/* Stars */}
                      <div className="flex gap-1 text-yellow-400 mt-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg
                            key={j}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.363-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                          </svg>
                        ))}
                      </div>

                      {/* Date & Author */}
                      <p className="text-xs text-gray-500 mt-2">{r.date}</p>
                      <p className="font-semibold text-sm">{r.author}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Video */}
        {/* <div className="relative rounded-xl overflow-hidden min-h-[280px]">
          <Image
            src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
            alt="testimonial"
            fill
            className="object-cover"
          />
        </div> */}

        {/* Video */}
        <div className="relative rounded-xl overflow-hidden min-h-[280px]">
          <Image
            src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
            alt="testimonial"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
