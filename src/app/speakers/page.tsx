import HomeCards from "@/components/pages/Home/homeCards";
import BeforeFooter from "@/components/ui/BeforeFooter";
import ZX9_SPEAKER from "../../app/assets/ZX9SPEAKER.png";
import ZX7_SPEAKER from "../../app/assets/ZX7SPEAKER.png";
import PageProductcard from "@/components/pages/pageProductcard";

export default function Speaker() {
  const cardData = [
    {
      isNewProduct: true,
      img: ZX9_SPEAKER,
      title: "ZX9 SPEAKER",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      textRight: false,
      img: ZX7_SPEAKER,
      title: "ZX7 SPEAKER",
      desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ];
  return (
    <main className="w-full flex justify-center items-center min-h-screen py-[120px] pb-50">
      <section className="flex w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] flex-col items-center gap-30 lg:gap-40">
        {cardData.map((card, index) => (
          <PageProductcard key={index} card={card} index={index} />
        ))}
        <HomeCards />
        <div className=" w-full mt-0.5">
          <BeforeFooter />
        </div>
      </section>
    </main>
  );
}
