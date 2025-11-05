'use client';

import HomeCards from "@/components/pages/Home/homeCards";
import BeforeFooter from "@/components/ui/BeforeFooter";
import { getProductByTitle } from "./products";
// import Image from "next/image";
import Typography from "@/components/common/Typography";
import PageProductcard from "@/components/pages/pageProductcard";
import { Button } from "@/components/common/Button";
import GridView from "@/components/pages/details/gridView";
import { useRouter } from 'next/navigation';


interface PageProps {
  id: string;
}

export default function DetailsPageClient({ id }: PageProps) {
  console.log("details id =", id);
  const router = useRouter();
  // products are loaded from ./products
  const product = getProductByTitle(id);
  return (
    <main className="w-full flex justify-center items-center min-h-screen pt-[79px] pb-40">
      <section className="flex w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] flex-col items-center gap-30 lg:gap-40">
        {product ? (
          <>
            <div className="flex flex-col gap-6 lg:gap-14 w-full items-baseline">
                <Button
                variant="goBack"
                onClick={() => router.back()}
                >
                Go Back
                </Button>
              <PageProductcard card={product!} detailsPage />
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between items-baseline gap-[88px] md:gap-30 lg:gap-[125px]">
              <div className="w-full max-w-[635px] flex flex-col items-center lg:items-start gap-6 lg:gap-8">
                <Typography variant="h3" className="text-left w-full">FEATURES</Typography>
                <article className="w-full flex flex-col gap-7 text-left">
                  <Typography variant="body" className="text-black/50">
                    {product?.features?.[0]}
                  </Typography>
                  <Typography variant="body" className="text-black/50">
                    {product?.features?.[1]}
                  </Typography>
                </article>
              </div>
              <div className="w-full max-w-[350px] flex flex-col gap-8 md:flex-row md:max-w-[549px] justify-between">
                <Typography variant="h3">in the box</Typography>
                <article className="w-full flex flex-col gap-7 text-center lg:text-left  max-w-[194px]">
                  {product?.inTheBox?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between w-full gap-[21px]"
                    >
                      <Typography
                        variant="body"
                        className="font-bold text-(--primary)"
                      >
                        {item.qty}
                      </Typography>
                      <Typography
                        variant="body"
                        className="text-left font-normal! text-black/50"
                      >
                        {item.item}
                      </Typography>
                    </div>
                  ))}
                </article>
              </div>
            </div>
            <GridView title={id} />
            <div className="w-full flex justify-center items-center">
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center gap-7 flex-col items-center">
            <Typography variant="h1" className=" text-center">
              Product not found!
            </Typography>
            <Typography variant="overline" className=" text-center">
              Please check the product ID and try again.
            </Typography>
          </div>
        )}
        <HomeCards />
        <div className=" w-full mt-0.5">
          <BeforeFooter />
        </div>
      </section>
    </main>
  );
}
