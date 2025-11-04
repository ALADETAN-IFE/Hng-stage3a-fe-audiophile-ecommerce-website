'use client';

import Image from "next/image";
import Cart from "../../app/assets/cart.svg";
import Logo from "../../app/assets/logo.png";
import Typography from "../common/Typography";
import Link from "next/link";
import { Button } from "../common/Button";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";

export default function Header() {
  const pathname = usePathname() ?? "/";

  const nav = [
    { href: "/", label: "Home" },
    { href: "/headphones", label: "Headphones" },
    { href: "/speakers", label: "Speakers" },
    { href: "/earphones", label: "Earphone" },
  ];

  return (
    <header className="relative z-20 w-full h-auto flex justify-center items-center">
      <section className="hidden lg:flex justify-between py-9 border-b-2 border-b-white/20 w-full max-w-[1109.83px] min-[2880px]:w-[1440px] h-20 md:gap-[317.5px] items-center px-4">
        <div className="flex items-center justify-between gap-[197px] bg-grey-500">
          <Image src={Logo} alt="Audiophile logo" className="max-w-full" />
          <nav className="flex justify-center items-center gap-[34px]">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Typography key={item.href} variant="subtitle">
                  <Link
                    href={item.href}
                    className={
                      "uppercase transition-colors duration-300 ease-in " +
                      (isActive
                        ? "text-[var(--primary)]"
                        : "text-white hover:text-[var(--hover-primary)]")
                    }
                  >
                    {item.label}
                  </Link>
                </Typography>
              );
            })}
          </nav>
        </div>
        <Button onClick={() => console.log("hello")} className="p-0!" variant="icon">
          <Image src={Cart} alt="Cart" />
        </Button>
      </section>

      {/* Tablet */}
      <section className="hidden md:flex lg:hidden justify-between items-center w-9/10 h-auto py-8 border-2 border-b-white/20">
        <div className="flex items-center justify-between">
        <Button onClick={() => console.log("hello")} className="p-0!" variant="icon">
          <MdOutlineMenu color="white" size="16"/>
        </Button>
          <Image src={Logo} alt="Audiophile logo" className="ml-4" />
        </div>
        <Button onClick={() => console.log("hello")} className="p-0!" variant="icon">
          <Image src={Cart} alt="Cart" />
        </Button>
      </section>
      
      {/* Mobile */}
      <section className="flex md:hidden justify-between items-center w-9/10 h-auto py-8 border-2 border-b-white/20">
        <Button onClick={() => console.log("hello")} className="p-0!" variant="icon">
          <MdOutlineMenu color="white" size="32"/>
        </Button>
          <Image src={Logo} alt="Audiophile logo" className="ml-4" />
        <Button onClick={() => console.log("hello")} className="p-0!" variant="icon">
          <Image src={Cart} alt="Cart" />
        </Button>
      </section>
    </header>
  );
}