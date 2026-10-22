import { postCartitemApi } from '../api-endpoints/CartsApi';

export interface GuestCartItem {
  id: string;
  product: string | number;
  quantity: number;
}

export const getGuestCart = (): GuestCartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('guest_cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading guest_cart:', e);
    return [];
  }
};

export const saveGuestCart = (cart: GuestCartItem[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('guest_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('guestCartUpdated'));
};

export const addToGuestCart = (productId: string | number, quantity: number = 1) => {
  const cart = getGuestCart();
  const existingIndex = cart.findIndex((i) => String(i.product) === String(productId));
  const qtyToAdd = Number(quantity) || 1;
  if (existingIndex > -1) {
    cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 0) + qtyToAdd;
  } else {
    cart.push({
      id: `guest_${productId}`,
      product: productId,
      quantity: qtyToAdd,
    });
  }
  saveGuestCart(cart);
};

export const updateGuestCartQty = (productId: string | number, newQty: number) => {
  const prodId = String(productId).replace('guest_', '');
  if (newQty <= 0) {
    removeFromGuestCart(prodId);
    return;
  }
  const cart = getGuestCart();
  const updated = cart.map((item) =>
    String(item.product) === prodId || String(item.id) === String(productId)
      ? { ...item, quantity: newQty }
      : item
  );
  saveGuestCart(updated);
};

export const removeFromGuestCart = (productId: string | number) => {
  const prodId = String(productId).replace('guest_', '');
  const cart = getGuestCart();
  const updated = cart.filter(
    (item) =>
      String(item.product) !== prodId &&
      String(item.id) !== String(productId) &&
      String(item.id) !== `guest_${prodId}`
  );
  saveGuestCart(updated);
};

export const clearGuestCart = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('guest_cart');
  window.dispatchEvent(new Event('guestCartUpdated'));
};

export const syncGuestCartToApi = async (
  cartId: string | number,
  userId: string | number,
  vendorId: any,
  userName?: string
) => {
  if (typeof window === 'undefined') return;
  const guestCart = getGuestCart();
  if (!guestCart || guestCart.length === 0) return;

  for (const item of guestCart) {
    const payload = {
      cart: cartId,
      product: item.product,
      user: userId,
      vendor: vendorId || 66,
      quantity: item.quantity || 1,
      created_by: userName || 'user',
    };
    try {
      await postCartitemApi('', payload);
    } catch (err) {
      console.error('Error posting guest cart item to API:', item, err);
    }
  }

  clearGuestCart();
};
