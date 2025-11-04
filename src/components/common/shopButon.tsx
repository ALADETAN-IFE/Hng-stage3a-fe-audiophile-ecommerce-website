import Typography from "./Typography";
import Arrow from "../../app/assets/arrow.png"
import Image from "next/image";
import Link from "next/link";

export default function ShopButton({link}: {link: string}) {
    
    return (
        <Link href={link} className="flex items-center gap-3">
            <Typography variant="subtitle" className="text-black/60 hover:text-(--primary)">
                Shop
            </Typography>
            <Image 
                src={Arrow} 
                alt="arrow icon" 
                className=""
            />
        </Link>
    );
}