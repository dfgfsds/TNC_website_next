'use client'

import { motion } from 'framer-motion'

const termsData = [
  {
    title: '1. Information We Collect',
    content: [
      'Contact Information: Name, email address, phone number, billing and shipping address.',
      'Payment Information: Card details (via secure third-party payment processors).',
      'Account Information: Login credentials, user ID, and preferences.',
      'Device and Usage Information: IP address, browser type, etc.',
      'Communication Data: Feedback, inquiries, support, surveys.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To process and fulfill orders.',
      'To provide customer service and technical support.',
      'To send order updates and promotional emails (if opted in).',
      'To improve our website and services.',
      'To prevent fraud and ensure security.',
    ],
  },
  {
    title: '3. Sharing of Information',
    content: [
      'Service providers (payment, shipping, hosting, etc.).',
      'Legal authorities when required.',
      'In case of a merger, acquisition, or asset sale.',
    ],
  },
  {
    title: '4. Cookies and Tracking',
    content:
      'We use cookies to personalize your experience and analyze traffic. You can manage these through browser settings.',
  },
  {
    title: '5. Data Security',
    content:
      'We implement safeguards to protect your data but no method is 100% secure.',
  },
  {
    title: '6. Your Rights and Choices',
    content: [
      'Access, correct, or delete your personal data.',
      'Opt out of marketing communications.',
      'Request data portability.',
      'Contact: info@tncomputers.in',
    ],
  },
  {
    title: '7. Third-Party Links',
    content:
      'We are not responsible for the privacy practices of third-party websites linked from our site.',
  },
  {
    title: '8. Children’s Privacy',
    content:
      'We do not knowingly collect data from children under 13 without parental consent.',
  },
  {
    title: '9. Changes to This Policy',
    content:
      'We may update this Privacy Policy periodically. The latest version will always be posted here with the effective date.',
  },
  {
    title: '10. Contact Us',
    content: [
      'Email: info@tncomputers.in',
      'Phone: +91-7429667788',
      'Address: No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-700"
      >
        Privacy Policy
      </motion.h1>

      <p className="mb-4 text-base leading-relaxed">
        <strong>Effective Date:</strong> 11 July 2025
      </p>
      <p className="mb-8 text-base leading-relaxed">
        TN COMPUTERS (“we,” “our,” or “us”) is committed to protecting your
        privacy. This Privacy Policy outlines how we collect, use, disclose,
        and safeguard your information when you visit our website, interact
        with us, or use our services.
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
            <h2 className="text-lg font-semibold text-indigo-700 mb-2">
              {item.title}
            </h2>
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
    </main>
  )
}
