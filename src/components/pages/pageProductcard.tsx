"use client";

import Image, { StaticImageData } from "next/image";
import Typography from "../common/Typography";
import { Button } from "../common/Button";

interface pageProductcardProps {
  card: {
    isNewProduct?: boolean;
    textRight?: boolean;
    img: StaticImageData
    title: string;
    desc: string;
  };
  index?: number;
}

export default function PageProductcard({
  card: { isNewProduct = false, textRight = true, title = "", desc = "", img },
  index,
}: pageProductcardProps) {
  return (
    <div
      className={`w-full lg:h-[560px] flex flex-col ${
        textRight ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center justify-center md:justify-between gap-8 md:gap-13 lg:gap-[125px]`}
      key={index}
    >
      <div className="bg-(--hash-white) px-[53px] pt-[41px] md:px-58.5 md:pb-17 lg:px-[95px] lg:pt-[65px] lg:pb-[108px] rounded-lg lg:max-w-[540px] w-full h-full">
        <Image
          src={img}
          alt="Man with Headphone"
          className="h-full w-full"
        />
      </div>
      <div className="md:w-8/10 max-w-[445px] flex flex-col gap-8 items-center lg:items-baseline text-center lg:text-left">
        <div className="flex flex-col gap-8 ">
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
        </div>
        <Button onClick={() => console.log("see product")}>SEE PRODUCT</Button>
      </div>
    </div>
  );
}
