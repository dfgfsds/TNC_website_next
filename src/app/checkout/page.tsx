'use client'

import React from 'react'
import { useCartStore } from '../hooks/useCartStore'

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout Page</h1>

      <div className="border p-4 rounded-lg mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.title} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
        Pay Now
      </button>
    </div>
  )
}
