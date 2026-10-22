"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCartitemsApi } from "../api-endpoints/CartsApi";
import {
    getGuestCart,
    addToGuestCart,
    updateGuestCartQty,
    removeFromGuestCart,
    clearGuestCart,
    syncGuestCartToApi,
    GuestCartItem,
} from "../lib/cartUtils";

// Context
const CartItemContext = createContext<any | undefined>(undefined);

// Provider
export function CartItemProvider({ children }: { children: ReactNode }) {
    const [cartId, setCartId] = useState<string | null>(null);
    const [guestCart, setGuestCart] = useState<GuestCartItem[]>([]);

    useEffect(() => {
        const updateFromStorage = () => {
            if (typeof window !== 'undefined') {
                setCartId(localStorage.getItem('cartId'));
                setGuestCart(getGuestCart());
            }
        };

        updateFromStorage();
        window.addEventListener('storage', updateFromStorage);
        window.addEventListener('guestCartUpdated', updateFromStorage);

        return () => {
            window.removeEventListener('storage', updateFromStorage);
            window.removeEventListener('guestCartUpdated', updateFromStorage);
        };
    }, []);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getCartitemsData", cartId],
        queryFn: () => getCartitemsApi(`/${cartId}`),
        enabled: !!cartId,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        const storedGuestCart = localStorage.getItem('guest_cart');
        if (storedUserId && storedCartId && storedGuestCart) {
            syncGuestCartToApi(storedCartId, storedUserId, 66).then(() => {
                refetch();
            });
        }
    }, [cartId, refetch]);

    const effectiveCartItem = cartId ? (data || { data: [] }) : { data: guestCart };

    return (
        <CartItemContext.Provider
            value={{
                cartItem: effectiveCartItem,
                isAuthenticated: !!data,
                isLoading,
                refetchCart: refetch, // ⬅️ Expose refetch as `refetchCart`
                addToGuestCart,
                updateGuestCartQty,
                removeFromGuestCart,
                clearGuestCart,
                guestCart,
            }}
        >
            {children}
        </CartItemContext.Provider>
    );
}

// Hook
export function useCartItem() {
    const context = useContext(CartItemContext);
    if (!context) {
        throw new Error("useCartItem must be used within a CartItemProvider");
    }
    return context;
}

