'use client';

import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    title: 'Great keyboard!',
    text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate because I’d the way the switches respond to my fingers. Great keyboard!",
    date: '28 Jun 2023',
    author: 'Melvin N.',
    productImg:
      'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
  },
  {
    title: 'Love the Sound',
    text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built and protected.',
    date: '28 Jun 2023',
    author: 'Gregory D',
    productImg:
      'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
  },
  {
    title: 'Great keyboard!',
    text: "Love the way it feels! I've been using it for work. I feel like I type faster and more accurate because I’d the way the switches respond to my fingers. Great keyboard!",
    date: '28 Jun 2023',
    author: 'Melvin N.',
    productImg:
      'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
  },
  {
    title: 'Love the Sound',
    text: 'These guys are top notch. Bought two PCs from them this year. They both arrived promptly and perfectly built and protected.',
    date: '28 Jun 2023',
    author: 'Gregory D',
    productImg:
      'https://demo811.leotheme.com/prestashop/leo_razox_elementor_demo/img/m/1-manu_default.jpg',
  },
];

export default function CustomerReviewSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#f5f7fc] py-12 px-4 md:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-[#9333ea]">CUSTOMER</span> REVIEW
        </h2>
        <div className="mt-2 flex items-center justify-center gap-2 text-sm">
          <span className="text-[#9333ea] font-semibold text-lg">4.8</span>
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} size={14} className="text-yellow-400" />
          ))}
          <span className="text-gray-600 ml-1">view all 7,185 reviews</span>
        </div>
      </div>

      {/* Review + Video Layout */}
  
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
  {/* Right: Video Testimonial (Shown First on Mobile) */}
  <div className="w-full md:w-1/3 order-1 md:order-2">
    <div className="relative rounded-xl overflow-hidden h-full  min-h-[240px] md-min-h-[280px]">
      <Image
        src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-12.jpg"
        alt="testimonial"
        width={500}
        height={320}
        className="h-full w-full object-cover rounded-xl"
      />
      <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md text-xl">
        ▶
      </div>
    </div>
  </div>

  {/* Left: Review Slider */}
  <div className="w-full md:w-2/3 order-2 md:order-1">
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div key={index} className="p-0  md-p-2">
          <div className="bg-white p-4 mr-4 md:p-5 rounded-xl shadow-sm h-[250px] flex">
            <div className="flex flex-row justify-between gap-4 w-full">
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{review.title}</h3>
                <p className="text-gray-700 text-sm mb-2 line-clamp-3">{review.text}</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} size={16} />
                  ))}
                </div>
                <p className="text-xs text-gray-500">{review.date}</p>
                <p className="text-sm font-semibold mt-1">{review.author}</p>
              </div>

              {/* Product Image */}
              <div className="flex-shrink-0 flex items-start">
                <Image
                  src={review.productImg}
                  alt="product"
                  width={70}
                  height={70}
                  className="rounded border object-contain w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

    </section>
  );
}
