import HomeCards from "@/components/pages/Home/homeCards";
import PageProductcard from "@/components/pages/pageProductcard";
import BeforeFooter from "@/components/ui/BeforeFooter";
import headPhone1 from "../../app/assets/mobileHeadPhone2.png";
import headPhone2 from "../../app/assets/sideHeadphone.png";
import headPhone3 from "../../app/assets/XX59Headphones.png";


export default function Headphone() {
  const cardData = [
    {
      isNewProduct: true,
      img: headPhone1,
      title: "XX99 Mark II Headphones",
      desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      textRight: false,
      img: headPhone2,
      title: "XX99 Mark I Headphones",
       desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
    },
    {
      img: headPhone3,
      title: "XX59 Headphones",
       desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
    },
  ]
  return (
    <main className="w-full flex justify-center items-center min-h-screen py-[120px] pb-50">
      <section className="flex w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] flex-col items-center gap-30 lg:gap-40">
      {cardData.map((card, index) => (
        <PageProductcard key={index} card={card} index={index} />
      ))}
        <HomeCards />
        <div className=" w-full">
          <BeforeFooter />
        </div>
      </section>
    </main>
  );
}
