'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-indigo-700"
      >
        Terms and Conditions
      </motion.h1>

      <p className="text-sm text-center text-gray-500 mb-10">
        Effective Date: 11 July 2025
      </p>

      <section className="space-y-8">
        {termsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold text-indigo-700 mb-2">{item.title}</h2>
            {Array.isArray(item.content) ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {item.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{item.content}</p>
            )}
          </motion.div>
        ))}
      </section>

      <div className="mt-10 text-sm text-center text-gray-500">
        For any questions, contact us at{' '}
        <a href="mailto:info@tncomputers.in" className="text-indigo-600 hover:underline">
          info@tncomputers.in
        </a>
        .
      </div>
    </main>
  )
}

// Card data
const termsData = [
  {
    title: '1. Use of Website',
    content: [
      'You agree to use our website and services only for lawful purposes.',
      'You must not violate any applicable laws or regulations.',
      'You must not distribute spam, malware, or harmful content.',
      'You must not interfere with the operation of the website.',
    ],
  },
  {
    title: '2. Product Orders and Payments',
    content: [
      'All orders are subject to availability and acceptance by TN COMPUTERS.',
      'Prices listed are in INR and may include applicable taxes unless stated otherwise.',
      'Payments must be made through secure payment gateways.',
    ],
  },
  {
    title: '3. Shipping and Delivery',
    content:
      'We will make reasonable efforts to deliver products within the estimated time frame. Delivery times may vary based on location and availability. We are not liable for delays caused by external factors beyond our control.',
  },
  {
    title: '4. Returns and Refunds',
    content:
      'Our return and refund policy is outlined on our website. You may return eligible products within the specified period if they meet the return conditions.',
  },
  {
    title: '5. Intellectual Property',
    content:
      'All content on our website is the property of TN COMPUTERS or its licensors and is protected by intellectual property laws. You may not reproduce or distribute any part without written consent.',
  },
  {
    title: '6. Disclaimer of Warranties',
    content:
      'Our website and services are provided "as is" without warranties of any kind. We do not guarantee accuracy, reliability, or completeness of content.',
  },
  {
    title: '7. Limitation of Liability',
    content:
      'TN COMPUTERS shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products.',
  },
  {
    title: '8. Governing Law',
    content:
      'These Terms are governed by the laws of India. Disputes will be resolved in the competent courts of Chennai, Tamil Nadu.',
  },
  {
    title: '9. Changes to Terms',
    content:
      'We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the revised Terms.',
  },
  {
    title: '10. Contact Us',
    content:
      'TN COMPUTERS, No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078. Phone: +91-7429667788',
  },
]
