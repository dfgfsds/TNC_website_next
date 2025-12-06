// store/cartStore.ts
import { create } from 'zustand'

type CartItem = {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (newItem) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === newItem.id)
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        }
      }
      return { cart: [...state.cart, newItem] }
    }),
}))
