"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import IncreaseButton from "@/components/common/IncreaseButton";
import { useRouter } from "next/navigation";
import { addToCart } from "@/utils/cart";

interface pageProductcardProps {
  card: {
    isNewProduct?: boolean;
    textRight?: boolean;
    img: StaticImageData;
    title: string;
    desc: string;
    price?: string;
  };
  detailsPage?: boolean;
  index?: number;
}

export default function PageProductcard({
  card: {
    isNewProduct = false,
    textRight = true,
    title = "",
    desc = "",
    img,
    price = "",
  },
  index,
  detailsPage = false,
}: pageProductcardProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!price) return;
    
    // Extract numeric price from string like "$ 2,999"
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));

    let cartTitle = title;
    
    if(title.toLowerCase().includes("headphones")){
      cartTitle = title.replace(/\s*headphones\s*/gi, '').trim();
    } else if(title.toLowerCase().includes("speaker")){
      cartTitle = title.replace(/\s*speaker\s*/gi, '').trim();
    } else if(title.toLowerCase().includes("wireless earphones")){
      cartTitle = title.replace(/\s*earphones\s*/gi, '').trim();
      cartTitle = title.replace(/\s*wireless\s*/gi, '').trim();
    }
    
    addToCart({
      id: title,
      title: cartTitle,
      price: numericPrice,
      quantity: quantity,
    });
    
    setQuantity(1);
  };

  return (
    <div
      className={`w-full lg:h-[560px] flex flex-col ${
        textRight ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-center md:justify-between gap-8 md:gap-13 lg:gap-[125px]`}
      key={index}
    >
      <div className="bg-(--hash-white) px-[53px] pt-[41px] md:px-58.5 md:pb-17 lg:px-[95px] lg:pt-[65px] lg:pb-[108px] rounded-lg lg:max-w-[540px] w-full h-full">
        <Image src={img} alt="Man with Headphone" className="h-full w-full" />
      </div>
      <div className="md:w-8/10 max-w-[445px] flex flex-col gap-8 items-center lg:items-baseline text-center lg:text-left">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {isNewProduct && (
              <Typography variant="overline" className="text-(--primary)">
                NEW PRODUCT
              </Typography>
            )}
            <Typography variant="h2">{title}</Typography>
          </div>
          <Typography variant="body" className="font-normal text-black/50">
            {desc}
          </Typography>
          {detailsPage && (
            <Typography variant="h6" className="">
              {price}
            </Typography>
          )}
        </div>
        {!detailsPage ? (
          <Button onClick={() => router.push(`/details/${encodeURIComponent(title)}`)}>
            SEE PRODUCT
          </Button>
        ) : (
          <div className="flex items-center gap-4">
            <IncreaseButton
              initial={quantity}
              onChange={(v) => setQuantity(v)}
            />
            <Button onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
