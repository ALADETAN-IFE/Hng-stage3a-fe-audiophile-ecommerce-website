import { normalizeForCompare } from "@/app/details/[id]/products";

import gridImage1 from "../../../app/assets/beforeFooter.png";
import gridImage2 from "../../../app/assets/gridImage2.png";
import gridImage3 from "../../../app/assets/gridImage3.png";
import gridImage4 from "../../../app/assets/gridImage4.png";
import gridImage5 from "../../../app/assets/gridImage5.png";
import gridImage6 from "../../../app/assets/gridImage6.png";
import gridImage7 from "../../../app/assets/gridImage7.png";
import gridImage8 from "../../../app/assets/gridImage8.png";
import gridImage9 from "../../../app/assets/gridImage9.png";
import gridImage10 from "../../../app/assets/gridImage10.png";
import gridImage11 from "../../../app/assets/gridImage11.png";
import gridImage12 from "../../../app/assets/gridImage12.png";
import gridImage13 from "../../../app/assets/gridImage13.png";
import gridImage14 from "../../../app/assets/gridImage14.png";
import gridImage15 from "../../../app/assets/gridImage15.png";
import gridImage16 from "../../../app/assets/gridImage16.png";
import gridImage17 from "../../../app/assets/gridImage17.png";
import gridImage18 from "../../../app/assets/gridImage18.png";
import { StaticImageData } from "next/image";

interface Images {
  imgSrc: StaticImageData;
  altText: string;
  styling?: string;
}

export interface GridImage {
  title: string;
  images: Images[];
}

export const gridImages: GridImage[] = [
  {
    title: "XX99 Mark II Headphones",
    images: [
      {
        imgSrc: gridImage1,
        altText: "XX99 Mark II Headphones Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage2,
        altText: "XX99 Mark II Headphones Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage3,
        altText: "XX99 Mark II Headphones Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
  {
    title: "XX99 Mark I Headphones",
    images: [
      {
        imgSrc: gridImage4,
        altText: "XX99 Mark I Headphones Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage5,
        altText: "XX99 Mark I Headphones Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage6,
        altText: "XX99 Mark I Headphones Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
  {
    title: "XX59 Headphones",
    images: [
      {
        imgSrc: gridImage7,
        altText: "XX59 Headphones Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage8,
        altText: "XX59 Headphones Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage9,
        altText: "XX59 Headphones Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
  {
    title: "ZX9 Speaker",
    images: [
      {
        imgSrc: gridImage10,
        altText: "ZX9 Speaker Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage11,
        altText: "ZX9 Speaker Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage12,
        altText: "ZX9 Speaker Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
  {
    title: "ZX7 Speaker",
    images: [
      {
        imgSrc: gridImage13,
        altText: "ZX7 Speaker Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage14,
        altText: "ZX7 Speaker Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage15,
        altText: "ZX7 Speaker Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
  {
    title: "YX1 WIRELESS EARPHONES",
    images: [
      {
        imgSrc: gridImage16,
        altText: "YX1 WIRELESS EARPHONES Gallery Image 1",
        styling: "w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage17,
        altText: "YX1 WIRELESS EARPHONES Gallery Image 2",
        styling: "max-sm:w-full max-sm:h-[174px] md:col-start-1"
      },
      {
        imgSrc: gridImage18,
        altText: "YX1 WIRELESS EARPHONES Gallery Image 3",
        styling: "h-full! max-sm:h-[368px] md:col-start-2 md:row-start-1 row-span-2"
      },
    ],
  },
];

export function getGridImagesByTitle(title: string) {
  const normalizedId = normalizeForCompare(title); 
  return gridImages.find((p) => normalizeForCompare(p.title) === normalizedId);
}
