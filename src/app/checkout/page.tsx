'use client';

import { getCartItems } from "@/utils/cart";
import { useEffect, useState } from "react";
import { products } from "../details/[id]/products";
import { CartItem } from "@/components/ui/Cart";
import { Button } from "@/components/common/Button";
import { useRouter } from "next/navigation";
import Typography from "@/components/common/Typography";

export default function Checkout() {
  const router = useRouter();
  const [carts, setCarts] = useState<CartItem[]>([]);

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
  return (
    <main className="w-full flex justify-center items-center min-h-screen pt-[79px] pb-40">
      <section className="flex w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] flex-col items-center gap-30 lg:gap-40">
        <div className="flex flex-col gap-6 lg:gap-14 w-full items-baseline min-h-screen bg-blue-500">
          <Button variant="goBack" onClick={() => router.back()}>
            Go Back
          </Button>
            {carts.length >= 1 ? (

          <section>
            {carts.length}
          </section>
            )
            : (
              <div className="w-full flex justify-center gap-7 flex-col items-center">
                <Typography variant="h1" className=" text-center">
                  Cart is currently empty
                </Typography>
                <Typography variant="overline" className=" text-center">
                  Add a product to cart to checkout.
                </Typography>
              </div>
            )
            }
        </div>
      </section>
    </main>
  );
}
