'use client';

import Link from "next/link";
import Typography from "../common/Typography";
import Image from "next/image";
import Logo from "../../app/assets/logo.png";
import { usePathname } from "next/navigation";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function Footer() {
    const pathname = usePathname() ?? "/";
    const nav = [
    { href: "/", label: "Home" },
    { href: "/headphones", label: "Headphones" },
    { href: "/speakers", label: "Speakers" },
    { href: "/earphones", label: "Earphone" },
  ];
  return (
    <footer className="bg-(--black-secondary) min-h-[645px] md:min-h-[400px] lg:min-h-[365px] flex justify-center items-center relative">
        <div className="w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] absolute top-0 flex justify-center md:justify-normal">
        <hr className="bg-(--primary) w-[101px] h-1"/>
        </div>
      <section className="w-9/10 max-w-[689px] lg:max-w-[1109.83px] min-[2880px]:w-[1440px] relative h-full mt-13 mb-9.5 md:mt-15 md:mb-11.5 lg:mt-[75px] lg:mb-12 flex flex-col gap-12 md:gap-20 lg:gap-14">

        <div className="w-full flex flex-col gap-12 md:gap-8 lg:gap-9">
          <div className="flex flex-col items-center md:items-baseline justify-between gap-12 md:gap-8 lg:flex-row">
                  <Image src={Logo} alt="Audiophile logo" className="max-w-full" />
                  <nav className="flex flex-col justify-center items-center gap-[34px] md:flex-row">
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
                                ? "text-(--primary)"
                                : "text-white hover:text-(--hover-primary)")
                            }
                          >
                            {item.label}
                          </Link>
                        </Typography>
                      );
                    })}
                  </nav>
          </div>

          <div className="flex justify-baseline items-center lg:justify-between">
            <Typography 
              variant="body"
              className="text-white/50 lg:max-w-[540px] w-full text-center md:text-left"
            >
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
            </Typography>
            <div className="gap-4 hidden lg:flex">
              <IoLogoFacebook 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
              <FaTwitter 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
              <FaInstagram 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
            </div>
          </div>

        </div>
        <div className="w-full flex justify-between items-center flex-col md:flex-row gap-12">
            <Typography 
              variant="body"
              className="text-white/50 lg:max-w-[540px] w-full text-center md:text-left"
            >
              Copyright 2021. All Rights Reserved
            </Typography>
            <div className="w-full md:w-auto flex gap-4 justify-center md:justify-baseline lg:hidden">
              <IoLogoFacebook 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
              <FaTwitter 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
              <FaInstagram 
                className="text-white hover:text-(--primary) transition-colors duration-300 ease-in cursor-pointer"
                size={24} 
              />
            </div>
        </div>
      
      </section>
    </footer>
  );
}