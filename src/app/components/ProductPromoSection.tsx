// 'use client';

// const products = [
//   {
//     title: 'GeForce RTX',
//     subtitle: '3060Ti',
//     tagline: 'THE ULTIMATE PLAY',
//     price: '$599.99',
//     buttonText: 'Shop Now',
//     bgImage:
//       'https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-06.jpg',
//     priceColor: 'text-green-400',
//   },
//   {
//     title: 'AORUS ELITE',
//     subtitle: 'AX AM5',
//     tagline: 'POWER TO THE CORE',
//     price: '$199.99',
//     buttonText: 'Shop Now',
//     bgImage:
//       'https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-07.jpg',
//     priceColor: 'text-blue-400',
//   },
// ];

// export default function ProductPromoSection() {
//   return (
//     <div className="py-2 md-py-10 px-4 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative rounded-xl overflow-hidden text-white min-h-[200px] md:min-h-[250px]"
//             style={{
//               backgroundImage: `url(${product.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-6">
//               <div>
//                 <p className="text-sm font-semibold uppercase tracking-wide">
//                   {product.tagline}
//                 </p>
//                 <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
//                   {product.title}
//                   <br />
//                   {product.subtitle}
//                 </h2>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <span className={`${product.priceColor} text-lg md:text-xl font-semibold`}>
//                   {product.price}
//                 </span>
//                 <button className="bg-red-700 text-white font-bold px-4 py-2 rounded shadow hover:bg-red-500 transition">
//                   {product.buttonText} &rarr;
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import Image from 'next/image';

const products = [
  {
    title: 'GeForce RTX',
    subtitle: '3060Ti',
    tagline: 'THE ULTIMATE PLAY',
    price: '$599.99',
    buttonText: 'Shop Now',
    bgImage:
      'https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-06.jpg',
    priceColor: 'text-green-400',
  },
  {
    title: 'AORUS ELITE',
    subtitle: 'AX AM5',
    tagline: 'POWER TO THE CORE',
    price: '$199.99',
    buttonText: 'Shop Now',
    bgImage:
      'https://cdn.shopify.com/s/files/1/0489/1171/2423/files/razox-img-07.jpg',
    priceColor: 'text-blue-400',
  },
];

export default function ProductPromoSection() {
  return (
    <section className="py-2 md:py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden text-white min-h-[200px] md:min-h-[250px]"
          >
            {/* 🔥 Optimized Background Image */}
            <Image
              src={product.bgImage}
              alt={`${product.title} ${product.subtitle}`}
              fill
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />

            {/* Overlay + Content */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {product.tagline}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
                  {product.title}
                  <br />
                  {product.subtitle}
                </h2>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span
                  className={`${product.priceColor} text-lg md:text-xl font-semibold`}
                >
                  {product.price}
                </span>
                <button className="bg-red-700 text-white font-bold px-4 py-2 rounded shadow hover:bg-red-500 transition">
                  {product.buttonText} &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
