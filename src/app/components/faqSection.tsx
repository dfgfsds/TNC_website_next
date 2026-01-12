// 'use client';
// import { useState } from 'react';
// import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

// const faqData = [
//   {
//     question: 'Which is the Best Computer Shop in Chennai for buying laptops and PCs?',
//     answer:
//       "Computers is widely rated as the Best Computer Shop in Chennai. We offer a complete range of brand-new laptops, high-performance gaming rigs, and budget-friendly desktops. Located in KK Nagar, we are trusted by thousands of customers for our genuine products, transparent pricing, and expert after-sales support.",
//   },
//   {
//     question: 'Where can I buy reliable Refurbished Laptops in Chennai?',
//     answer:
//       "Refurbished Laptops in Chennai directly from TN Computers. Unlike other sellers, we rigorously test every refurbished unit to ensure it performs like new. Whether you need a laptop for students, coding, or office work, we provide premium refurbished models at unbeatable prices with warranty support.",
//   },
//   {
//     question: 'Do you have a physical Laptop Showroom in Chennai where I can test products?',
//     answer:
//       "Yes! We invite you to visit our dedicated Laptop Showroom in Chennai located at No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar. Visiting our store allows you to experience the look and feel of our laptops, check the display quality, and consult with our experts before making a purchase.",
//   },
//   {
//     question: 'Can I get a custom Gaming PC built at your Laptop Store in Chennai? ',
//     answer:
//       "We specialize in custom PC builds. As a premier Laptop Store Chennai, our technicians can build the ultimate gaming PC, video editing workstation, or trading setup tailored to your specific budget and requirements. We use top-tier components like NVIDIA GeForce RTX cards and AMD Ryzen/Intel processors.",
//   },
//     {
//     question: 'What brands are available at TN Computers?',
//     answer:
//       " We stock all major global brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. Whether you are looking for a lightweight ultrabook or a heavy-duty workstation, you will find the latest models at our Computer Shop in Chennai.",
//   },
//   {
//     question: 'Do you offer delivery across Chennai?',
//     answer:
//       "Yes, we offer secure shipping for all our products. While we love seeing customers at our Laptop Showroom in Chennai, you can also order online or via phone, and we will ensure your new or refurbished computer reaches you safely anywhere in the city.",
//   },
// ];

// export default function  FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 ">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-600 mt-3">
//             Everything you need to know about <b>TN Computers</b> and our services.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-6">
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
//                 activeIndex === index ? 'border-[#a100fe] bg-slate-50' : ''
//               }`}
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex items-center justify-between text-left"
//               >
//                 <h5
//                   className={`text-lg font-semibold ${
//                     activeIndex === index
//                       ? 'text-[#a100fe]'
//                       : 'text-gray-900 hover:text-[#a100fe]'
//                   }`}
//                 >
//                   {faq.question}
//                 </h5>
//                 {activeIndex === index ? (
//                   <HiMinusSm className="text-[#a100fe] text-2xl transition-all" />
//                 ) : (
//                   <HiPlusSm className="text-gray-600 text-2xl transition-all" />
//                 )}
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
//                 }`}
//               >
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: 'Which is the Best Computer Shop in Chennai for buying laptops and PCs?',
    answer:
      "TN Computers is widely rated as the Best Computer Shop in Chennai. We offer a complete range of brand-new laptops, high-performance gaming rigs, and budget-friendly desktops. Located in KK Nagar, we are trusted by thousands of customers for our genuine products, transparent pricing, and expert after-sales support.",
  },
  {
    question: 'Where can I buy reliable Refurbished Laptops in Chennai?',
    answer:
      "Buy refurbished laptops in Chennai directly from TN Computers. Unlike other sellers, we rigorously test every refurbished unit to ensure it performs like new. Whether you need a laptop for students, coding, or office work, we provide premium refurbished models at unbeatable prices with warranty support.",
  },
  {
    question: 'Do you have a physical Laptop Showroom in Chennai where I can test products?',
    answer:
      "Yes! Visit our dedicated Laptop Showroom in Chennai at No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar. You can experience the laptops directly, test performance, and consult our experts before purchase.",
  },
  {
    question: 'Can I get a custom Gaming PC built at your Laptop Store in Chennai?',
    answer:
      "Yes. We specialize in custom PC builds including gaming PCs, video editing workstations, and trading setups. Our Laptop Store in Chennai uses premium components like NVIDIA GeForce RTX GPUs and AMD Ryzen or Intel processors.",
  },
  {
    question: 'What brands are available at TN Computers?',
    answer:
      "We stock all major global brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. Whether you need an ultrabook or a high-end workstation, you will find the latest models at our Computer Shop in Chennai.",
  },
  {
    question: 'Do you offer delivery across Chennai?',
    answer:
      "Yes, we offer safe and secure delivery across Chennai. You can order online or via phone, and we ensure your laptop or PC reaches you safely anywhere in the city.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know about <b>TN Computers</b> and our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
                activeIndex === index
                  ? 'border-[#a100fe] bg-slate-50'
                  : 'border-gray-300'
              }`}
            >
              {/* Question */}
              <button
                aria-expanded={activeIndex === index}
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h5
                  className={`text-lg font-semibold transition-colors ${
                    activeIndex === index
                      ? 'text-[#a100fe]'
                      : 'text-gray-900 hover:text-[#a100fe]'
                  }`}
                >
                  {faq.question}
                </h5>

                {activeIndex === index ? (
                  <HiMinusSm className="text-2xl text-[#a100fe]" />
                ) : (
                  <HiPlusSm className="text-2xl text-gray-600" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-screen mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
