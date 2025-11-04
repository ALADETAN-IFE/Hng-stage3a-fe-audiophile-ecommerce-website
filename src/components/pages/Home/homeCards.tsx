import sideHeadphone from "../../../app/assets/sideHeadphone2.png";
import Speaker from "../../../app/assets/speaker.png";
import Earphone from "../../../app/assets/earphone.png";
import Cards from "./cards";

export default function HomeCards() {
   const cardData = [
    {
      img: sideHeadphone,
      title: "HEADPHONES",
      link: "/headphones"
    },
    {
      img: Speaker,
      title: "SPEAKERS",
      link: "/speakers"
    },
    {
      img: Earphone,
      title: "EARPHONES",
      link: "/earphones"
    }
  ]
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2.5 lg:gap-7.5 w-full justify-items-center">
        {cardData.map((card, index) => (
          <Cards key={index} card={card} index={index} />
        ))}
      </div>
  );
}