import Image from "next/image";
import { getGridImagesByTitle, GridImage } from "./gridImages";

export default function GridView({ title }: { title: string }) {
  const gridImages: GridImage | undefined = getGridImagesByTitle(title);

  if (!gridImages) {
    return null;
  }

  return (
  <div className="grid grid-cols-1 md:grid-cols-[277px_395px] md:grid-rows-2 gap-8 md:h-[368px] lg:h-[592px] lg:grid-cols-[445px_635px] w-full">
      {gridImages.images.map((image, index) => (
        <div key={index} className={`rounded-lg ${image.styling}`}>
          <Image
            src={image.imgSrc}
            alt={image.altText}
            className="w-full h-full rounded-lg"

          />
        </div>
      ))}
    </div>
  );
}
