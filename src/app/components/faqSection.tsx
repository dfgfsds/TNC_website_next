

// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { HiPlusSm, HiMinusSm } from 'react-icons/hi';


// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Frequently Asked Questions (FAQs)
//           </h2>
//           <p className="text-gray-600 mt-3">
//             Everything you need to know about <b>TN Computers</b>
//           </p>
//         </div>

//         <div className="space-y-6">

//           {/* FAQ 1 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 0 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(0)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 0 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 Which is the Best Computer Shop in Chennai for buying laptops and PCs?
//               </h5>
//               {activeIndex === 0 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 0 && (
//               <p className="mt-3 text-gray-700">
//                 TN Computers is widely rated as the <Link href="./shop" className='font-semibold'>Best Computer Shop in Chennai</Link>. We offer a complete range of brand-new laptops, high-performance gaming rigs, and budget-friendly desktops. Located in KK Nagar, we are trusted by thousands of customers for our genuine products, transparent pricing, and expert after-sales support.

//               </p>
//             )}
//           </div>

//           {/* FAQ 2 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 1 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(1)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 1 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 Where can I buy reliable Refurbished Laptops in Chennai?
//               </h5>
//               {activeIndex === 1 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 1 && (
//               <p className="mt-3 text-gray-700">
//                 You can buy high-quality Refurbished Laptops in Chennai directly from TN Computers. Unlike other sellers, we rigorously test every refurbished unit to ensure it performs like new. Whether you need a laptop for students, coding, or office work, we provide premium refurbished models at unbeatable prices with warranty support.

//               </p>
//             )}
//           </div>

//           {/* FAQ 3 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 2 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(2)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 2 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 Do you have a physical Laptop Showroom in Chennai where I can test products?
//               </h5>
//               {activeIndex === 2 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 2 && (
//               <p className="mt-3 text-gray-700">
//               Yes! We invite you to visit our dedicated Laptop Showroom in Chennai located at <Link href='https://maps.app.goo.gl/gSwc8v7Qmvn2FVJ7A' className='font-bold'> No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar</Link>. Visiting our store allows you to experience the look and feel of our laptops, check the display quality, and consult with our experts before making a purchase.

//               </p>
//             )}
//           </div>

//           {/* FAQ 4 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 3 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(3)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 3 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 Can I get a custom Gaming PC built at your Laptop Store in Chennai?
//               </h5>
//               {activeIndex === 3 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 3 && (
//               <p className="mt-3 text-gray-700">
//               We specialize in <Link href='/custom-pc-build' className='font-semibold'> custom PC builds</Link>. As a premier <Link href='./categories/laptops' className='font-semibold'>Laptop Store Chennai</Link>, our technicians can build the ultimate gaming PC, video editing workstation, or trading setup tailored to your specific budget and requirements. We use top-tier components like NVIDIA GeForce RTX cards and AMD Ryzen/Intel processors.
//               </p>
//             )}
//           </div>

//           {/* FAQ 5 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 4 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(4)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 4 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 What brands are available at TN Computers?
//               </h5>
//               {activeIndex === 4 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 4 && (
//               <p className="mt-3 text-gray-700">
//                We stock all major global brands, including Dell, HP, Lenovo, ASUS, Acer, and MSI. Whether you are looking for a lightweight ultrabook or a heavy-duty workstation, you will find the latest models at our <Link href="./categories/laptops " className='font-semibold'>Computer Shop in Chennai</Link>.

//               </p>
//             )}
//           </div>

//           {/* FAQ 6 */}
//           <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 5 ? 'border-purple-600 bg-slate-50' : ''}`}>
//             <button onClick={() => toggle(5)} className="w-full flex justify-between text-left">
//               <h5 className={`text-lg font-semibold ${activeIndex === 5 ? 'text-purple-600' : 'text-gray-900'}`}>
//                 Do you offer delivery across Chennai?
//               </h5>
//               {activeIndex === 5 ? <HiMinusSm className="text-2xl text-purple-600" /> : <HiPlusSm className="text-2xl" />}
//             </button>
//             {activeIndex === 5 && (
//               <p className="mt-3 text-gray-700">
//                Yes, we offer secure shipping for all our products. While we love seeing customers at our Laptop Showroom in Chennai, you can also order online or via phone, and we will ensure your new or refurbished computer reaches you safely anywhere in the city.

//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Which is the best laptop store in Chennai?',
      answer:
        'TN Computers is one of the best laptop stores in Chennai offering branded laptops, gaming laptops, refurbished laptops, desktops, and accessories at affordable prices.',
    },
    {
      question: 'Do you build custom gaming PCs in Chennai?',
      answer:
        'Yes, TN Computers provides custom gaming PC building services in Chennai for gamers, creators, and professionals with RTX graphics and high-performance components.',
    },
    {
      question: 'Do you offer EMI options for laptops and gaming PCs?',
      answer:
        'Yes, TN Computers offers flexible EMI options on laptops, desktops, gaming PCs, and accessories.',
    },
    {
      question: 'Which brands are available at TN Computers Chennai?',
      answer:
        'We offer laptops and desktops from top brands including Dell, HP, Lenovo, Acer, ASUS, MSI, and more.',
    },
    {
      question: 'Can I upgrade SSD and RAM at your computer shop in Chennai?',
      answer:
        'Yes, we provide SSD installation, RAM upgrades, PC assembly, and laptop upgrade services in Chennai.',
    },
    {
      question: 'Do you sell gaming accessories in Chennai?',
      answer:
        'Yes, we sell gaming keyboards, mouse, monitors, cabinets, CPU coolers, gamepads, and gaming accessories in Chennai.',
    },
  ];

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700 mb-4">
            FAQs
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Find answers about laptops, gaming PCs, refurbished systems,
            accessories, EMI options, and custom PC builds at TN Computers.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${isActive
                  ? 'border-purple-600 bg-white shadow-lg'
                  : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
              >
                {/* BUTTON */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-5 px-6 sm:px-8 py-6 text-left"
                >
                  <h3
                    className={`text-lg sm:text-xl font-bold transition ${isActive ? 'text-purple-700' : 'text-gray-900'
                      }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`flex items-center justify-center min-w-[42px] h-[42px] rounded-full transition ${isActive
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    {isActive ? (
                      <HiMinusSm className="text-2xl" />
                    ) : (
                      <HiPlusSm className="text-2xl" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isActive
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6">
                      <div className="border-t border-gray-100 pt-5">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}