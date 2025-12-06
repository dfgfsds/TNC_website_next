"use client";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShippingFast,
  FaClock,
} from "react-icons/fa";

const orders = [
  {
    id: "ORD123456",
    date: "2025-07-10",
    product: {
      name: "HP Pavilion Laptop 15s",
      image:
        "https://cdn.shopify.com/s/files/1/0661/9630/7113/files/laptop.jpg?v=1664353252",
    },
    total: "₹56,999",
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2025-07-08",
    product: {
      name: "Logitech Wireless Mouse",
      image:
        "https://cdn.shopify.com/s/files/1/0661/9630/7113/files/mouse.jpg?v=1664353321",
    },
    total: "₹999",
    status: "Shipped",
  },
  {
    id: "ORD123458",
    date: "2025-07-07",
    product: {
      name: "WD 1TB External Hard Drive",
      image:
        "https://cdn.shopify.com/s/files/1/0661/9630/7113/files/hdd.jpg?v=1664353342",
    },
    total: "₹3,999",
    status: "Pending",
  },
];

const getStatusBadge = (status: string) => {
  const base =
    "px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1";
  switch (status) {
    case "Delivered":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>
          <FaCheckCircle className="w-4 h-4" /> Delivered
        </span>
      );
    case "Shipped":
      return (
        <span className={`${base} bg-blue-100 text-blue-700`}>
          <FaShippingFast className="w-4 h-4" /> Shipped
        </span>
      );
    case "Pending":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>
          <FaClock className="w-4 h-4" /> Pending
        </span>
      );
    default:
      return null;
  }
};

export default function OrderHistoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#9333ea] mb-8 text-center"
      >
        Order History
      </motion.h1>

      <div className="space-y-6">
        {orders.map((order, idx) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border rounded-xl p-4 md:p-6 shadow-sm bg-white flex flex-col md:flex-row gap-4 md:items-center"
          >
            <img
              src={order.product.image}
              alt={order.product.name}
              className="w-24 h-24 object-cover rounded-lg border"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold">{order.product.name}</h2>
              <p className="text-sm text-gray-600">
                Order ID: <span className="font-medium">{order.id}</span>
              </p>
              <p className="text-sm text-gray-600">
                Date: <span className="font-medium">{order.date}</span>
              </p>
              <p className="text-sm text-gray-600">
                Total: <span className="font-medium">{order.total}</span>
              </p>
            </div>

            {/* Status Badge */}
            <div className="md:text-right">{getStatusBadge(order.status)}</div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
