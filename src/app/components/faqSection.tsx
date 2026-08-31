
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
      question:
        'Which is a reliable computer store in Chennai for laptops, desktops and gaming PCs?',
      answer:
        'TN Computers is a one-stop destination in KK Nagar for laptops, desktops, gaming PCs, custom builds, upgrades and repairs — with staff who explain specs in practical terms instead of pushing the priciest configuration.',
    },
    {
      question:
        'What makes TN Computers the best computer shop in Chennai for students and businesses?',
      answer:
        'TN Computers matches configurations to real usage — budget-friendly builds for students, office-ready systems for businesses, and performance builds for gamers — rather than one-size-fits-all setups.',
    },
    {
      question:
        'Where can I buy quality PC accessories in Chennai for a gaming setup?',
      answer:
        'TN Computers stocks gaming keyboards, mice, headsets, monitors and controllers, chosen for comfort, response time and durability during long sessions.',
    },
    {
      question:
        'Which is an affordable laptop store in Chennai for students and professionals?',
      answer:
        'TN Computers helps balance price and performance — prioritizing portability and battery life for students, processing power for professionals — without compromising on what actually matters for your use case.',
    },
    {
      question:
        'How do I get a custom PC build in Chennai for gaming or video editing?',
      answer:
        'TN Computers plans builds around your actual workload — gaming, streaming, 3D rendering or editing — checking every component works together, not just performs well individually. The same team also sources PC components in Chennai for future upgrades, so your build stays compatible long-term.',
    },
    {
      question:
        'Are affordable refurbished laptops in Chennai a good option for budget buyers?',
      answer:
        'Yes — if you check processor generation, battery health, screen condition and warranty support. TN Computers evaluates these factors so you get real usability, not just a low price tag.',
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