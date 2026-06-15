'use client';

import { motion } from 'framer-motion';

export default function RefundPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-700"
      >
        Refund & Cancellation Policy
      </motion.h1>

      <p className="text-center text-sm text-gray-500 mb-10">Effective Date: 11 July 2025</p>

      <div className="space-y-8">
        {/* 1. Order Cancellation */}
        <Section title="1. Order Cancellation">
          <ul className="list-disc pl-6 space-y-2">
            <li>You may cancel your order within <strong>12 hours</strong> of placing it, provided it has not been shipped.</li>
            <li>To cancel, contact us at <a href="mailto:info@tncomputers.in" className="text-blue-600 underline">info@tncomputers.in</a> with your order number.</li>
            <li>Orders that are processed or shipped cannot be canceled.</li>
          </ul>
        </Section>

        {/* 2. Refund Eligibility */}
        <Section title="2. Refund Eligibility">
          <ul className="list-disc pl-6 space-y-2">
            <li>Applies only for defective, damaged, or incorrect products.</li>
            <li>Notify us within <strong>48 hours</strong> of delivery.</li>
            <li>Items must be unused, in original condition and packaging.</li>
          </ul>
        </Section>

        {/* 3. Refund Process */}
        <Section title="3. Refund Process">
          <p>Email <a href="mailto:info@tncomputers.in" className="text-blue-600 underline">info@tncomputers.in</a> with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Order number</li>
            <li>Reason for refund</li>
            <li>Photos or videos of the issue</li>
          </ul>
          <p className="mt-4">
            Once inspected, well notify you of refund approval. Approved refunds will be processed within 7–10 business days to your original payment method.
          </p>
        </Section>

        {/* 4. Return Shipping */}
        <Section title="4. Return Shipping">
          <p>
            Customers bear the shipping cost unless it’s our error. We recommend using trackable shipping or insurance for returns.
          </p>
        </Section>

        {/* 5. Non-Refundable Items */}
        <Section title="5. Non-Refundable Items">
          <ul className="list-disc pl-6 space-y-2">
            <li>Customized or special-order products</li>
            <li>Digital/downloadable goods</li>
            <li>Items without original packaging or accessories</li>
          </ul>
        </Section>

        {/* 6. Exchange Policy */}
        <Section title="6. Exchange Policy">
          <p>Exchanges are available only for defective/damaged items. Contact us within 48 hours to start the process.</p>
        </Section>

        {/* 7. Contact Info */}
        <Section title="7. Contact Us">
          <p>If you have questions, contact us:</p>
          <div className="mt-2 space-y-1 text-sm">
            <p><strong>TN COMPUTERS</strong></p>
            <p>Email: <a href="mailto:info@tncomputers.in" className="text-blue-600 underline">info@tncomputers.in</a></p>
            <p>Phone: +91-7429667788</p>
            <p>Address: No: 126 B, Vanniar Street, Bangaru Colony, KK Nagar, Chennai – 600078</p>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 shadow-sm rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-indigo-600 mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed text-sm md:text-base">{children}</div>
    </motion.section>
  );
}
