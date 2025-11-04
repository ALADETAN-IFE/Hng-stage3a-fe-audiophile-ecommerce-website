import Typography from "@/components/common/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Oval from "../../../app/assets/Oval.png";
import ShopButton from "@/components/common/shopButon";

type Card = {
  img: StaticImageData;
  title: string;
  link?: string;
};

export default function HomeCards({ card, index }: { card: Card; index: number }) {
  return (
    <div key={index} className="flex flex-col items-center justify-end relative rounded-lg gap-4 w-full h-[217px] md:w-[223px] lg:w-[350px] lg:h-[284px] ">
      <div className="flex items-center flex-col justify-center absolute top-5 h-[108px] md:h-[107.5px] lg:h-[164px]">
        <Image src={card.img} alt={card.title} className="max-w-full object-contain h-[108px] md:h-[107.5px] lg:h-[164px] relative" />
        {/* <Image src={Oval} alt="oval background" className="max-w-full relative " /> */}
      </div>
      <div className="w-full h-[165px] md:h-[165px] lg:h-[204px] rounded-lg bg-(--hash-white) flex flex-col items-center justify-end gap-[17px] lg:gap-[15px] py-5.5 lg:py-7.5 text-center">
        <Typography variant="h6">{card.title}</Typography>
        <ShopButton link={card.link ?? "#"} />
      </div>
    </div>
  );
}