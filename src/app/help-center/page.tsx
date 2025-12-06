"use client";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaUndo,
  FaUserShield,
  FaCreditCard,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

const categories = [
  {
    title: "Shipping & Delivery",
    icon: <FaTruck className="text-[#9333ea] w-6 h-6" />,
    description: "Track your order, delivery timeframes, and shipping methods.",
  },
  {
    title: "Returns & Refunds",
    icon: <FaUndo className="text-[#9333ea] w-6 h-6" />,
    description: "Learn about return policies, refunds, and exchanges.",
  },
  {
    title: "Account & Security",
    icon: <FaUserShield className="text-[#9333ea] w-6 h-6" />,
    description: "Manage your account, password, and personal info safely.",
  },
  {
    title: "Payments & Billing",
    icon: <FaCreditCard className="text-[#9333ea] w-6 h-6" />,
    description: "Get help with payments, charges, and payment methods.",
  },
  {
    title: "FAQs",
    icon: <FaQuestionCircle className="text-[#9333ea] w-6 h-6" />,
    description: "Answers to common questions about shopping with us.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-[#9333ea] mb-4"
      >
        Help Center
      </motion.h1>
      <p className="text-center text-gray-600 mb-10">
        Find answers to common questions or contact our support team.
      </p>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search help topics..."
            className="w-full border border-gray-300 rounded-full px-5 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute top-3.5 left-4 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
