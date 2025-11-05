'use client';

import { Button } from "@/components/common/Button";
//  npx tsc --noEmit
import mobileSpeakerBg from "./assets/ZX9-SPEAKER-BG.png";
import tabletSpeakerBg from "./assets/tabletZX9-SPEAKER-BG.png";
import desktopSpeakerBg from "./assets/desktopZX9-SPEAKER-BG.png";
import ZXYSpeakerBg from "./assets/ZXY-SPEAKER_BG.png";
import mobileZXYSpeakerBg from "./assets/mobileZXY-SPEAKER_BG.png";
import Earpod from "./assets/earpod.png";
import HomeCards from "@/components/pages/Home/homeCards";
import Typography from "@/components/common/Typography";
import BeforeFooter from "@/components/ui/BeforeFooter";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full flex justify-center items-center min-h-screen py-[120px] pb-50">
      <section className="flex w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] flex-col items-center gap-30 md:gap-24 lg:gap-42">
        <HomeCards />
      <section className="w-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-12">
        <div 
          className="relative w-full h-[600px] md:h-[1008px] lg:h-[560px] rounded-lg flex justify-center lg:justify-end items-end lg:items-center bg-(--primary)"  
        >
          <div
          className="absolute w-full h-full speaker bg-no-repeat bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${mobileSpeakerBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "50% 0%",
          }}
          >
          <style jsx>{`
            @media (min-width: 768px) {
              .speaker {
                background-image: url(${tabletSpeakerBg.src}) !important;
                background-repeat: no-repeat;
                background-size: 100% !important;
                background-position: center !important;
              }
            }

            @media (min-width: 1024px) {
              .speaker {
                background-image: url(${desktopSpeakerBg.src}) !important;
                background-repeat: no-repeat;
                background-size: 100% !important;
                /* background-position: 0% 10% !important; */
              }
            }
          `}</style>
          </div>
          <div className="w-[280px] md:w-[349px] relative z-10 flex flex-col md:gap-10 items-center lg:items-basel pb-[55px] md:pb-16 lg:pb-0 lg:mr-24 gap-6">
            <div className="flex flex-col gap-6">
              <Typography variant="h1" className="text-center lg:text-left text-white">ZX9 SPEAKER</Typography>
              <Typography variant="body" className="text-center lg:text-left text-white/75 font-normal!">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Typography>
            </div>
            <Button variant="secondary" onClick={() => router.push(`/details/${encodeURIComponent("ZX9 SPEAKER")}`)}>SEE PRODUCT</Button>
          </div>
        </div>
        <div className="h-80 w-full bg-no-repeat  md:bg-position-[100%_95%] bg-size-[100%] speakerZXY rounded-lg"
        style={{
          backgroundColor: "hsl(0, 0%, 85%)",
          backgroundImage: `url(${mobileZXYSpeakerBg.src})`,
          backgroundPosition: "40% 100%"
        }}
        >
          <style jsx>{`
            @media (min-width: 768px) {
              .speakerZXY {
                background-image: url(${ZXYSpeakerBg.src}) !important;
              }
            }
          `}</style>

          <div className="w-[204px] h-full flex flex-col justify-center ml-6 md:ml-[62px] lg:ml-[95px] items-center gap-8">
            <Typography variant="h4">ZX7 SPEAKER</Typography>
            <Button variant="outline" className="bg-transparent!" onClick={() => router.push(`/details/${encodeURIComponent("ZX7 SPEAKER")}`)}>SEE PRODUCT</Button>
          </div>
        </div>

        <div className="md:h-80 min-h-80 w-full flex justify-between gap-6 md:gap-[11px] lg:gap-7.5 flex-col md:flex-row">
          <div className="h-full w-full max-w-[540px]">
            <Image 
              src={Earpod} 
              alt="Earpod" 
              className="w-full h-full rounded-lg "
            />
          </div>

          <div className="h-full w-full bg-(--hash-white) flex justify-baseline items-center rounded-lg max-w-[540px] min-h-[200px]">
           <div className="w-[204px] h-full flex flex-col justify-center ml-6 md:ml-[41px] lg:ml-[95px] items-center gap-8">
            <Typography variant="h4">ZX7 SPEAKER</Typography>
            <Button variant="outline" className="bg-transparent!" onClick={() => router.push(`/details/${encodeURIComponent("ZX7 SPEAKER")}`)}>SEE PRODUCT</Button>
          </div>
          </div>

        </div>
      </section>
        <div className=" w-full mt-0.5">
          <BeforeFooter />
        </div>
      </section>
    </main>
  );
}
