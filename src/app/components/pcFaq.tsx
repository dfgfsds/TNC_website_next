'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: ' Why should I choose TN Computers for a custom PC build in Chennai?',
    answer:
      "TN Computers offers expert guidance, genuine components, and fully tested systems for gaming, workstations, home PCs. Our local Chennai team ensures quick support and reliable after-sales service.",
  },
  {
    question: 'What types of custom PCs can I build in Chennai with TN Computers?',
    answer:
      "We build gaming PCs, professional workstations, and home/office PCs. Each system is optimized for your performance needs and budget, using branded components and latest technology.",
  },
  {
    question: 'Can I choose specific components for my custom PC?',
    answer:
      "Yes! You can select the CPU, GPU, RAM, storage, motherboard, and cooling system according to your requirements. Our experts help design a balanced system for performance and value.",
  },
  {
    question: 'How long does it take to build a custom PC in Chennai? ',
    answer:
      "Typically, custom PC builds take 3–7 business days, depending on component availability and system complexity. We ensure thorough testing before delivery to guarantee optimal performance.",
  },
    {
    question: ' Are your custom PCs upgradeable in the future?',
    answer:
      "Absolutely. Every PC we build is designed with future upgrades in mind, so you can easily add more RAM, storage, or a new graphics card as your needs grow.",
  },
  {
    question: 'Do you provide warranty on custom PCs built in Chennai?',
    answer:
      "Yes. All components come with manufacturer warranties, and our assembly carries a TN Computers warranty, giving you peace of mind and local support in Chennai.",
  },
  {
    question: 'Can TN Computers help me build a gaming PC under a budget?',
    answer:
      "Yes! We specialize in creating budget-friendly custom gaming PCs in Chennai without compromising performance. Our team recommends the best components for your budget and gaming needs.",
  },
  {
    question: 'How do I start my custom PC build with TN Computers?',
    answer:
      " Simply contact us via phone, email, or website form, share your requirements and budget, and our Chennai experts will guide you through the component selection, assembly, and delivery process.",
  },
];

export default function  PcFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
          Custom PC Build in Chennai

          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
                activeIndex === index ? 'border-[#a100fe] bg-slate-50' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h5
                  className={`text-lg font-semibold ${
                    activeIndex === index
                      ? 'text-[#a100fe]'
                      : 'text-gray-900 hover:text-[#a100fe]'
                  }`}
                >
                  {faq.question}
                </h5>
                {activeIndex === index ? (
                  <HiMinusSm className="text-[#a100fe] text-2xl transition-all" />
                ) : (
                  <HiPlusSm className="text-gray-600 text-2xl transition-all" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
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
