'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    title: 'Great PC Build Experience',
    text: 'Got my PC built at TN Computers and I’m very happy with the performance. The staff were friendly, explained everything clearly, and guided me throughout the purchase. Overall, the experience was smooth and satisfying.',
    author: 'Vejaysundaram R',
    rating: 5,
  },
  {
    title: 'Affordable Laptop Purchase',
    text: 'I purchased an Acer Aspire 3 laptop from TN Computers at a very affordable price. The customer handling was really good, and I’m completely satisfied with the service. A great place to explore branded products.',
    author: 'Udhaya Kumar',
    rating: 5,
  },
  {
    title: 'Excellent Laptop Pricing & Support',
    text: 'I bought a brand-new Lenovo laptop from TN Computers and was really impressed with the pricing. The team provided good customer service and made the overall buying experience easy and comfortable.',
    author: 'Mr. Praveen',
    rating: 5,
  },
  {
    title: 'Quality Gaming PC at a Great Budget',
    text: 'I bought a new gaming PC and was very happy with the product and the suggestions provided by the team. The PC quality was better than I expected for my budget. Very satisfied with the overall experience.',
    author: 'Bala Balalakshmi',
    rating: 5,
  },
  {
    title: 'Friendly & Knowledgeable Team',
    text: 'The staff were knowledgeable, friendly, and patient. They explained the differences between laptop models clearly and answered all my questions without rushing me into a decision. I really appreciated the genuine guidance.',
    author: 'ZS ROSE',
    rating: 5,
  },
  {
    title: 'Good Service & Affordable Pricing',
    text: 'I purchased a PC from TN Computers and was satisfied with the affordable pricing, product quality, and service. The staff had good hardware knowledge and provided helpful guidance throughout the purchase. A recommended place for PCs and laptops.',
    author: 'Lokesh Karthik',
    rating: 5,
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
    }, 4500);
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
    <section className="bg-[#f5f7fc] py-14 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold text-purple-800 uppercase tracking-widest mb-3">
          <Quote className="w-3.5 h-3.5" /> Testimonial
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">CUSTOMER</span> REVIEWS
        </h2>

        <div className="mt-3 flex justify-center items-center gap-1.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-gray-700 text-sm font-semibold ml-2">4.9 · Verified Customer Ratings</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Reviews Slider */}
        <div
          className="lg:col-span-2 overflow-hidden flex flex-col justify-between"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
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
                      className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-purple-50 hover:shadow-md transition-all flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Top: Stars & Quote Icon */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex gap-1 text-amber-400">
                            {Array.from({ length: r.rating }).map((_, j) => (
                              <Star
                                key={j}
                                className="w-4 h-4 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">
                          {r.title}
                        </h3>

                        {/* Review Body */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                          “{r.text}”
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <p className="font-bold text-gray-900 text-sm tracking-wide">
                          — {r.author}
                        </p>
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-purple-600' : 'w-2.5 bg-gray-300 hover:bg-purple-300'
                  }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Video / Showcase Banner */}
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] shadow-sm border border-gray-200/80">
          <Image
            src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
            alt="Customer Testimonial"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-xl shadow-lg transition-transform hover:scale-110 cursor-pointer">
                ▶
              </div>
              <div>
                <p className="text-white font-bold text-sm">Customer Stories</p>
                <p className="text-white/80 text-xs">Watch real buyer experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
