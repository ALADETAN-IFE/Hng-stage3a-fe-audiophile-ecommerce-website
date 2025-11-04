import { Button } from "@/components/common/Button";
//  npx tsc --noEmit
import sideHeadphone from "./assets/sideHeadphone.png";
import HomeCards from "@/components/pages/Home/homeCards";

export default function Home() {
  const cardData = [
    {
      img: sideHeadphone,
      title: "HEADPHONES",
      link: "/headphones"
    },
    {
      img: sideHeadphone,
      title: "HEADPHONES",
      link: "/headphones"
    },
    {
      img: sideHeadphone,
      title: "HEADPHONES",
      link: "/headphones"
    }
  ]

  return (
    <main className="flex min-h-screen py-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {cardData.map((card, index) => (
          <HomeCards key={index} card={card} index={index} />
        ))}
      </div>
    </main>
  );
}
