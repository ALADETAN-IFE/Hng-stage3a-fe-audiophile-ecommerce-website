'use client';

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import IncreaseButton from "../common/IncreaseButton";
import { getCartItems, updateCartItemQuantity, clearCart } from "@/utils/cart";
import { products } from "@/app/details/[id]/products";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  img: StaticImageData;
  title: string;
  price: number;
  quantity: number;
}

export default function CartUI() {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadCart = () => {
      const cartItems = getCartItems();
      const mappedItems: CartItem[] = cartItems
        .map((item) => {
          const product = products.find((p) => p.title === item.id);
          if (!product) return null;

          return {
            id: item.id,
            img: product.img,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
          };
        })
        .filter((item): item is CartItem => item !== null);

      setCarts(mappedItems);
    };

    loadCart();

    // Listen for storage changes (e.g., from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "audiophile_cart") {
        loadCart();
      }
    };

    // Listen for storage changes (e.g., from other tabs)
    window.addEventListener("storage", handleStorageChange);
    // Listen for custom event (same tab updates)
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const totalPrice = carts.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  const formattedtotalPrice = new Intl.NumberFormat("en-US").format(totalPrice);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    updateCartItemQuantity(itemId, newQuantity);
    const cartItems = getCartItems();
    const mappedItems: CartItem[] = cartItems
      .map((item) => {
        const product = products.find((p) => p.title === item.id);
        if (!product) return null;
        return {
          id: item.id,
          img: product.img,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        };
      })
      .filter((item): item is CartItem => item !== null);
    setCarts(mappedItems);
  };

  const handleRemoveAll = () => {
    clearCart();
    setCarts([]);
  };

  const checkOut = () => {
    if(carts.length < 1) {
      return null
    }
    router.push("/checkout")
  }

  return (
    <div className="absolute top-full z-99 h-screen w-full bg-black/40 flex justify-center ">
      <div className="relative md:w-9/10 max-w-[1109.83px] min-[2880px]:w-[1440px] top-5 flex justify-end">
        <div className="w-[377px] h-fit bg-white relative rounded-lg top-5 p-7 flex flex-col gap-7">
          <div className="w-full flex justify-between items-center">
            <Typography variant="h6">Cart ({carts.length})</Typography>
            <button
              className="text-black/50 hover:text-(--hover-primary) underline cursor-pointer transition-colors duration-350 ease-in"
              onClick={handleRemoveAll}
            >
              <Typography variant="body"> Remove all</Typography>
            </button>
          </div>
          {carts.length >= 1 && (
            <div className="flex flex-col gap-6">
              {carts.map((value) => (
                <div
                  key={value.id}
                  className="w-full h-16 flex items-center justify-between"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="bg-(--hash-white) rounded-lg h-16 w-16 p-3 overflow-hidden">
                      <Image
                        src={value.img}
                        alt={value.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-[76px] h-12.5">
                      <Typography variant="body" className="font-bold!">{value.title}</Typography>
                      <Typography variant="overline" className="text-black/50 tracking-normal! font-bold! leading-[25px]">$ {value.price}</Typography>
                    </div>
                  </div>
                  <IncreaseButton
                    initial={value.quantity}
                    min={1}
                    onChange={(v) => updateQuantity(value.id, v)}
                    className="w-24 h-8 gap-3!"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="w-full flex justify-between items-center">
            <Typography variant="body" className="text-black/50">
              {" "}
              TOTAL
            </Typography>
            <Typography variant="h6">$ {formattedtotalPrice}</Typography>
          </div>
          <Button className="w-full" onClick={checkOut}>checkout</Button>
        </div>
      </div>
    </div>
  );
}
