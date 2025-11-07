import { normalizeForCompare } from "@/app/details/[id]/products";
import headPhone1 from "../../../app/assets/mobileHeadPhone2.png";
import headPhone2 from "../../../app/assets/sideHeadphone.png";
import headPhone3 from "../../../app/assets/XX59Headphones.png";
import ZX9_SPEAKER from "../../../app/assets/ZX9SPEAKER.png";
import ZX7_SPEAKER from "../../../app/assets/ZX7SPEAKER.png";
import { StaticImageData } from "next/image";

interface Images {
  imgSrc: StaticImageData;
  altText: string;
  text: string;
}

export interface AlsoLikeImage {
  title: string;
  images: Images[];
}

export const gridImages: AlsoLikeImage[] = [
  {
    title: "XX99 Mark II Headphones",
    images: [
      {
        imgSrc: headPhone2,
        altText: "XX99 Mark I Headphones",
        text: "XX99 Mark I",
      },
      {
        imgSrc: headPhone3,
        altText: "XX59 Headphones",
        text: "XX59",
      },
      {
        imgSrc: ZX9_SPEAKER,
        altText: "ZX9 SPEAKER",
        text: "ZX9 SPEAKER",
      },
    ],
  },
  {
    title: "XX99 Mark I Headphones",
    images: [
      {
        imgSrc: headPhone1,
        altText: "XX99 Mark II Headphones",
        text: "XX99 Mark II",
      },
      {
        imgSrc: headPhone3,
        altText: "XX59 Headphones",
        text: "XX59",
      },
      {
        imgSrc: ZX9_SPEAKER,
        altText: "ZX9 SPEAKER Headphones",
        text: "ZX9 SPEAKER",
      },
    ],
  },
  {
    title: "XX59 Headphones",
    images: [
      {
        imgSrc: headPhone1,
        altText: "XX99 Mark II Headphones",
        text: "XX99 Mark II",
      },
      {
        imgSrc: headPhone2,
        altText: "XX99 Mark I Headphones",
        text: "XX99 Mark I",
      },
      {
        imgSrc: ZX9_SPEAKER,
        altText: "ZX9 SPEAKER Headphones",
        text: "ZX9 SPEAKER",
      },
    ],
  },
  {
    title: "ZX9 SPEAKER",
    images: [
      {
        imgSrc: ZX7_SPEAKER,
        altText: "ZX7 SPEAKER",
        text: "ZX7 SPEAKER",
      },
      {
        imgSrc: headPhone2,
        altText: "XX99 Mark I Headphones",
        text: "XX99 Mark I",
      },
      {
        imgSrc: headPhone3,
        altText: "XX59 Headphones",
        text: "XX59",
      },
    ],
  },
  {
    title: "ZX7 Speaker",
    images: [
      {
        imgSrc: ZX9_SPEAKER,
        altText: "ZX9 SPEAKER Headphones",
        text: "ZX9 SPEAKER",
      },
      {
        imgSrc: headPhone2,
        altText: "XX99 Mark I Headphones",
        text: "XX99 Mark I",
      },
      {
        imgSrc: headPhone3,
        altText: "XX59 Headphones",
        text: "XX59",
      },
    ],
  },
  {
    title: "YX1 WIRELESS EARPHONES",
    images: [
      {
        imgSrc: headPhone2,
        altText: "XX99 Mark I Headphones",
        text: "XX99 Mark I",
      },
      {
        imgSrc: headPhone3,
        altText: "XX59 Headphones",
        text: "XX59",
      },
      {
        imgSrc: ZX9_SPEAKER,
        altText: "ZX9 SPEAKER Headphones",
        text: "ZX9 SPEAKER",
      },
    ],
  },
];

export function getAlsoLikeImagesByTitle(title: string) {
  const normalizedId = normalizeForCompare(title); 
  return gridImages.find((p) => normalizeForCompare(p.title) === normalizedId);
}
