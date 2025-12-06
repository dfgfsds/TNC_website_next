// components/BrandsSection.tsx
"use client";

import Image from "next/image";
import Slider from "react-slick";

const brands = [
  {
    name: "Asus",
    logo: "/assets/brand/asus.svg",
  },
  {
    name: "HP",
   logo: "/assets/brand/hp.svg",
  },
  {
    name: "Lenovo",
    logo: "/assets/brand/lenovo.svg",
  },
  {
    name: "Samsung",
   logo: "/assets/brand/samsung.svg",
  },
  {
    name: "Dell",
   logo: "/assets/brand/dell.svg",
  },
  
];


export default function BrandsSection() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section>
      <div className="py-6 max-w-7xl md-my-0 my-5 mx-auto border-y border-gray-400 relative">
        {/* Border corners */}
        <div className="absolute top-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-br-md" />
        <div className="absolute top-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-bl-md" />
        <div className="absolute bottom-0 left-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tr-md" />
        <div className="absolute bottom-0 right-0 w-[20px] h-[3px] bg-[#9333ea] rounded-tl-md" />

        {/* Title */}
        <div className="text-center px-4">
          <p className="text-sm font-semibold text-gray-700">SHOP BY</p>
          <h2 className="text-xl font-bold text-[#9333ea] mb-6">POPULAR BRANDS</h2>
        </div>

        {/* Brand carousel */}
        <Slider {...settings} className="px-4">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center px-2">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={100}
                className="object-contain bg-slate-100 w-full rounded-lg h-36"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
