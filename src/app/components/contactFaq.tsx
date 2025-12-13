'use client';

import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: 'Where is your laptop showroom in Chennai located?',
    answer:
      'TN Computers is conveniently located at No.126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai. We are easily accessible for customers looking for a laptop store in Chennai’s central regions. Please refer to the map above for exact directions.',
  },
  {
    question: 'Do you sell refurbished laptops?',
    answer:
      'Yes! TN Computers is a trusted source for refurbished laptops in Chennai. We offer thoroughly quality-checked business and gaming laptops at a fraction of the original cost, ensuring reliability and long-term performance.',
  },
  {
    question: 'Can you help me build a custom gaming PC?',
    answer:
      'Absolutely. We specialize in custom gaming PC build services in Chennai. You can discuss your gaming or professional workflow requirements with our experts, and we will assemble a powerful PC tailored specifically to your needs.',
  },
  {
    question: 'Do you offer a warranty on your products?',
    answer:
      'Yes. All brand-new products come with a standard manufacturer warranty. Our refurbished systems and custom-built PCs also include a TN Computers service warranty, giving you complete peace of mind and dependable after-sales support.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-12 ">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= Heading ================= */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Everything you need to know about <b>TN Computers</b>, our laptop showroom,
            custom PC builds, and refurbished systems.
          </p>
        </div>

        {/* ================= FAQ List ================= */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
                activeIndex === index
                  ? 'border-[#9333ea] bg-slate-50'
                  : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h5
                  className={`text-lg font-semibold transition-colors ${
                    activeIndex === index
                      ? 'text-[#9333ea]'
                      : 'text-gray-900 hover:text-[#7705e0]'
                  }`}
                >
                  {faq.question}
                </h5>

                {activeIndex === index ? (
                  <HiMinusSm className="text-[#9333ea] text-2xl shrink-0" />
                ) : (
                  <HiPlusSm className="text-gray-600 text-2xl shrink-0" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 text-base leading-relaxed">
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
