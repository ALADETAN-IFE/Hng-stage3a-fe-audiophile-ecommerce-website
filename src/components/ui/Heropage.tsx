'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
import Image from "next/image";
import Headphone from "../../app/assets/mobileHeadPhone3.png";
import laptopBg from "../../app/assets/laptopbg.png";
import Headphone2 from "../../app/assets/laptopHeadphone.png";
import { useRouter } from "next/navigation";
// import Headphone2 from "../../app/assets/Headphone.png"

export default function Heropage() {
  const pathname = usePathname();
  console.log("pathname", pathname)

  const router = useRouter();
  const page = pathname.split("/").pop();

  const radialGradientStyle = {
    background:
      "radial-gradient(circle at center, rgba(16, 16, 16, 0.0) 20%, #101010 100%)",
  };
  return (
    <section
      className={`bg-black relative flex flex-col w-full items-center pb-6 ${
        page !== "" ? "md:h-[336px] gap-8" : "h-auto"
      } ${
        page !== "" &&
        (!page?.includes("details"))
          ? "h-auto! pb-0!"
          : ""
      }`}
    >
      {page == "" && (
        <div className="md:hidden absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-end">
            <Image
              src={Headphone}
              alt="XX99 Mark II Headphones"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* <div 
              className="absolute inset-0"
              style={radialGradientStyle}
            /> */}
        </div>
      )}
      <Header />
      <div
        className={`relative w-full md:w-9/10 max-w-[1109.83px] min-[2880px]:w-[1440px] flex justify-between items-center py-[9px] ${
          page !== "" && "justify-center h-full "
        } ${
        page !== "" &&
        (!page?.includes("details"))
          ? "hidden"
          : ""
      }`}
      >
        {page == "" && (
          <section className="flex z-30 gap-10 items-center justify-center relative w-full min-h-[600px] md:justify-between">
            <div className="flex flex-col gap-10 items-center justify-center md:items-baseline">
              <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[328px] md:w-auto md:items-baseline md:max-w-[398px]">
                <Typography variant="overline" className="text-white/49">
                  NEW PRODUCT
                </Typography>
                <Typography
                  variant="h1"
                  className="text-white max-md:text-center "
                >
                  XX99 Mark II Headphones
                </Typography>
                <Typography
                  variant="body"
                  className="text-white/75 max-md:text-center md:max-w-[349px]"
                >
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Typography>
              </div>
              <Button
                onClick={() =>
                  router.push(`/details/${encodeURIComponent(
                    "XX99 Mark II Headphones"
                  )}`)
                }
              >
                SEE PRODUCT
              </Button>
            </div>
            <div
              className="relative hidden md:inline-flex w-auto"
              style={{
                background: `radial-gradient(circle at center, rgba(16, 16, 16, 0.0) 20%, #101010 100%), url("../../app/assets/laptopHeadphone.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </section>
        )}
        
        {page &&
          page !== "" &&
          (page === "headphones" ||
            page === "earphones" ||
            page === "speakers") && (
            <Typography
              variant="h2"
              className="text-white uppercase text-center w-full"
            >
              {page}
            </Typography>
          )}
      </div>
    </section>
  );
}
