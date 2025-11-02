'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import Image from 'next/image';
import Headphone from "../../app/assets/Headphone.png"

export default function Heropage() {
  const pathname = usePathname()

  const page = pathname.split("/").pop()
  return (
    <section className="bg-black/45 flex flex-col h-auto w-full items-center">
        <Header />
        <div className="w-full max-w-[1109.83px] min-[2880px]:w-[1440px] flex justify-between items-center py-[97px]">
          { page == "" && (
            <section className="flex gap-10 items-center justify-center relative w-full">
              <div className="flex flex-col gap-10 items-center justify-center">
                <div className="flex flex-col gap-6 items-center justify-center max-w-[328px]">
                  <Typography variant="overline" className="text-white">NEW PRODUCT</Typography>
                  <Typography variant="h1" className="text-white max-w-[328px] text-center">XX99 Mark II Headphones</Typography>
                  <Typography variant="body" className="text-white text-center">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
                </div>
                <Button onClick={() => console.log("see product")}>SEE PRODUCT</Button>
              </div>
              <div className="absolute -z-10 bottom-0 object-center w-full h-full flex justify-center items-center">
                <Image 
                  src={Headphone}
                  alt="XX99 Mark II Headphones" 
                  width={540} 
                  height={560} 
                  className="w-[120%] object-center"
                />
              </div>
            </section>
          )}
          { page !== "" && <Typography variant="h2" className="text-white uppercase">{page}</Typography> }
        </div>
    </section>
  );
}