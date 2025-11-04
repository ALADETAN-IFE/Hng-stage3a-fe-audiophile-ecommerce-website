import HomeCards from "@/components/pages/Home/homeCards";
import BeforeFooter from "@/components/ui/BeforeFooter";
import YX1_WIRELESS_EARPHONES from "../../app/assets/YX1WIRELESSEARPHONES.png";
import PageProductcard from "@/components/pages/pageProductcard";

export default function Earphone() {
  const cardData = [
    {
      isNewProduct: true,
      img: YX1_WIRELESS_EARPHONES,
      title: "YX1 WIRELESS EARPHONES",
      desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
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
