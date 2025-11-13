import Image from "next/image";
import { getAlsoLikeImagesByTitle, AlsoLikeImage } from "./AlsoLike";
import Typography from "@/components/common/Typography";
import { Button } from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function YouMayAlsoLike({ title }: { title: string }) {
  const AlsoLikeImages: AlsoLikeImage | undefined = getAlsoLikeImagesByTitle(title);
    const router = useRouter();

  if (!AlsoLikeImages) {
    return null;
  }
  return (
    <div className="w-full flex flex-col gap-14">
      <Typography variant="h3" className="text-center">
        You May Also Like
      </Typography>
      <div className="w-full flex flex-col md:flex-row gap-6 items-center">
        {AlsoLikeImages.images.map((image, index) => (
          <div key={index} className="max-[350px]:w-9/10 min-[350px]:w-[350px] h-full flex flex-col gap-7 items-center">
            <div className="bg-(--hash-white) rounded-lg w-full h-[350px] p-7 overflow-hidden">
              <Image
                src={image.imgSrc}
                alt={image.altText}
                className="h-full w-full object-contain"
              />
            </div>
            <Typography variant="h6" className="text-center">
              {image.text}
            </Typography>
            <Button onClick={() => router.push(`/details/${encodeURIComponent(image.altText)}`)}>
              SEE PRODUCT
            </Button>

          </div>
        ))}
      </div>
    </div>
  );
}
