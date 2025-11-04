import Typography from "@/components/common/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Card = {
  img: StaticImageData;
  title: string;
  link?: string;
};

export default function HomeCards({ card, index }: { card: Card; index: number }) {
  return (
    <div key={index} className="flex flex-col items-center bg-white/5 rounded-lg p-6 gap-4 w-full max-w-[300px]">
      <div className="w-[180px] h-[140px] flex items-center justify-center">
        <Image src={card.img} alt={card.title} className="w-full h-auto object-contain" />
      </div>
      <Typography variant="h6" className="tracking-wider">{card.title}</Typography>
      <Link href={card.link ?? "#"} className="text-sm text-gray-400 uppercase tracking-wide">Shop →</Link>
    </div>
  );
}