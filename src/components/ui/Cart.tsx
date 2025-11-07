'use client';

import { useState } from "react";
import { StaticImageData } from "next/image";
import headPhone1 from "@/app/assets/mobileHeadPhone2.png";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import IncreaseButton from "../common/IncreaseButton";

interface CartItem {
  id: number;
  img: StaticImageData;
  title: string;
  price: number;
  quantity: number;
}

export default function CartUI() {
  const [carts, setCarts] = useState<CartItem[]>([
    {
      id: 1,
      img: headPhone1,
      title: "headPhone1",
      price: 100,
      quantity: 3,
    },
    {
      id: 2,
      img: headPhone1,
      title: "headPhone1",
      price: 100,
      quantity: 3,
    },
    {
      id: 3,
      img: headPhone1,
      title: "headPhone1",
      price: 100,
      quantity: 3,
    },
  ]);

  const totalPrice = carts.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
  }, 0);

  const formattedtotalPrice = new Intl.NumberFormat("en-US").format(totalPrice);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCarts(prevCarts =>
      prevCarts.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="absolute top-full z-99 h-screen w-full bg-black/40 flex justify-center ">
      <div className="relative md:w-9/10 max-w-[1109.83px] min-[2880px]:w-[1440px] top-5 flex justify-end">
        <div className="w-[377px] h-fit bg-white relative rounded-lg top-5 p-7 flex flex-col gap-7">
          <div className="w-full flex justify-between items-center">
            <Typography variant="h6">Cart ({carts.length})</Typography>
            <button 
              className="text-black/50 hover:text-(--hover-primary) underline cursor-pointer transition-colors duration-350 ease-in"
              onClick={()=> setCarts([])}  
            >
              <Typography variant="body"> Remove all</Typography>
            </button>
          </div>
          {carts.length >= 1 && (
            <div>
              {carts.map((value) => (
                <div key={value.id} className="w-full h-16">
                  <IncreaseButton
                    initial={value.quantity}
                    min={1}
                    onChange={(v) => updateQuantity(value.id, v)}
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
          <Button className="w-full">checkout</Button>
        </div>
      </div>
    </div>
  );
}
