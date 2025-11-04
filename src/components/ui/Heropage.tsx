'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import Image from 'next/image';
import Headphone from "../../app/assets/mobileHeadPhone3.png"
import laptopBg from "../../app/assets/laptopbg.png"
import Headphone2 from "../../app/assets/laptopHeadphone.png"
// import Headphone2 from "../../app/assets/Headphone.png"

export default function Heropage() {
  const pathname = usePathname()

  const page = pathname.split("/").pop()

  // RADIAL GRADIENT STYLE: Fades from transparent center to solid #101010 edges
  const radialGradientStyle = {
    background: 'radial-gradient(circle at center, rgba(16, 16, 16, 0.0) 20%, #101010 100%)',
  };
  return (
    <section className="bg-black relative flex flex-col h-auto w-full items-center pb-6">
       {/* 1. Background Image and Radial Gradient Overlay Container (Layer 1) */}
        {/* This container ensures the image and gradient cover the entire section */}
        <div className="md:hidden absolute inset-0 z-10 overflow-hidden">
            
            {/* Image (must be inside this layer) */}
            <div className="absolute inset-0 flex justify-center items-end">
                {/* The height is set to be responsive but fill the bottom area */}
                <Image 
                  src={Headphone}
                  alt="XX99 Mark II Headphones" 
                  className="w-full h-full object-cover object-top"
                />
            </div>
            
            {/* Radial Gradient Overlay (applied over the image, below the text) */}
            {/* <div 
              className="absolute inset-0"
              style={radialGradientStyle}
            /> */}
        </div>
        <Header />
        <div className="relative w-full max-w-[1109.83px] min-[2880px]:w-[1440px] flex justify-between items-center py-[9px]">
          { page == "" && (
            <section className="flex z-30 gap-10 items-center justify-center relative w-full min-h-[600px] md:justify-between">
              <div className="flex flex-col gap-10 items-center justify-center md:items-baseline">
                <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[328px] md:w-auto md:items-baseline md:max-w-[398px]">
                  <Typography variant="overline" className="text-white/49">NEW PRODUCT</Typography>
                  <Typography variant="h1" className="text-white max-md:text-center ">XX99 Mark II Headphones</Typography>
                  <Typography variant="body" className="text-white/75 max-md:text-center md:max-w-[349px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
                </div>
                <Button onClick={() => console.log("see product")}>SEE PRODUCT</Button>
              </div>
      <div
  className="relative hidden md:inline-flex w-auto"
  style={{
    background:
      `radial-gradient(circle at center, rgba(16, 16, 16, 0.0) 20%, #101010 100%), url("../../app/assets/laptopHeadphone.png")`,
    backgroundSize: 'cover', // Recommended to ensure the image covers the area
    backgroundPosition: 'center', // Recommended to center the image
  }}
/>
             
            </section>
          )}
          { page !== "" && <Typography variant="h2" className="text-white uppercase">{page}</Typography> }
        </div>
    </section>
  );
}