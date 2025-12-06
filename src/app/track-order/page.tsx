'use client'

import { useState } from 'react'
import { FaBoxOpen, FaTruckMoving, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const handleTrack = () => {
    if (orderId.trim() !== '') setShowDetails(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4 sm:px-6">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-[#a100fe] mb-8 text-center leading-snug"
      >
        Track Your Order
      </motion.h1>

      {/* Search Box */}
      <div className="w-full max-w-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20 p-5 sm:p-6 rounded-xl mb-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Order ID or Email"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 px-4 py-3 text-sm sm:text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleTrack}
            className="w-full sm:w-auto px-6 py-3 bg-[#a100fe] text-white text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition"
          >
            Track
          </button>
        </div>
      </div>

      {/* Order Details */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white p-5 sm:p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="text-sm sm:text-base space-y-1">
            <p><strong>Order ID:</strong> #TN123456789</p>
            <p><strong>Placed on:</strong> July 10, 2025</p>
            <p><strong>Status:</strong> Out for Delivery</p>
          </div>

          {/* Timeline */}
          <div className="mt-6 space-y-6">
            <TimelineStep icon={<FaBoxOpen />} title="Order Placed" active />
            <TimelineStep icon={<FaTruckMoving />} title="Shipped" active />
            <TimelineStep icon={<FaTruckMoving />} title="Out for Delivery" active />
            <TimelineStep icon={<FaCheckCircle />} title="Delivered" active={false} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

function TimelineStep({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode
  title: string
  active: boolean
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`text-xl sm:text-2xl p-2 rounded-full ${
          active ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
        }`}
      >
        {icon}
      </div>
      <p className={`text-base sm:text-lg font-medium ${active ? 'text-gray-900' : 'text-gray-400'}`}>
        {title}
      </p>
    </div>
  )
}
