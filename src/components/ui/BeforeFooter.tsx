import Image from "next/image";
import beforeFooterImg from "../../app/assets/beforeFooter.png";
import Typography from "../common/Typography";

export default function BeforeFooter() {
    return(
        <section 
          className="w-full min-h-[588px] flex flex-col justify-between items-center lg:flex-row-reverse gap-10 md:gap-[63px]">
            <div className="lg:w-[540px]">
                <Image
                  src={beforeFooterImg}
                  alt="Man with Headphone"
                  className="w-full h-full rounded-lg"
                />
            </div>
            <div className="lg:w-[445px] flex flex-col gap-8">
                <Typography 
                variant="h2" 
                className="text-black text-center lg:text-left max-sm:text-[28px]! max-sm:leading-normal! max-sm:tracking-[1px]!">
                    Bringing you the <span className="text-(--primary)">best</span> audio gear
                </Typography>
                <Typography variant="body" className="text-black/75 text-center lg:text-left">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </Typography>
            </div>
        </section>
    )
}