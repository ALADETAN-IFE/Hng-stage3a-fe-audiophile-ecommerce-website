export interface CartItem {
  id: string; // product title as id
  title: string;
  price: number; // numeric price
  quantity: number;
}

const CART_STORAGE_KEY = 'audiophile_cart';

export function getCartItems(): CartItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
}

export function getCartLength(): number {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export function saveCartItems(items: CartItem[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}

export function addToCart(item: Omit<CartItem, 'quantity'> & { quantity?: number }): void {
  const cart = getCartItems();
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += item.quantity || 1;
  } else {
    cart.push({
      ...item,
      quantity: item.quantity || 1,
    });
  }
  
  saveCartItems(cart);
}

export function updateCartItemQuantity(itemId: string, quantity: number): void {
  const cart = getCartItems();
  
  if (quantity <= 0) {
    // Remove item
    saveCartItems(cart.filter(item => item.id !== itemId));
  } else {
    // Update quantity
    const item = cart.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
      saveCartItems(cart);
    }
  }
}

export function removeCartItem(itemId: string): void {
  const cart = getCartItems();
  saveCartItems(cart.filter(item => item.id !== itemId));
}

export function clearCart(): void {
  saveCartItems([]);
}

