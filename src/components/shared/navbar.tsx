"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import BurgerButton from "../ui/burger-button";

const SCROLL_THRESHOLD = 600;

export default function Navbar() {
  const { t, navLinks, showNav, scrollingDown, scrollY, setShowNav } =
    useNavbar();
  return (
    <header
      className={cn(
        "header text-white top-0 z-[999] bg-foreground flex w-full justify-center transition-all duration-300 p-4 md:px-8",
        {
          sticky: scrollY > 0,
          "translate-y-[-500%]":
            scrollY > SCROLL_THRESHOLD && scrollingDown && !showNav,
        }
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Link href="/" className="z-10">
            <Image
              src="/logo.png"
              alt="logo"
              width={84}
              height={84}
              className="w-14 h-14 lg:w-20 lg:h-20"
            />
          </Link>
          <nav
            className={cn(
              "absolute inset-0 translate-x-[-120%] bg-primary transition-transform ease-in-out lg:static lg:inset-auto lg:translate-x-0 lg:bg-transparent px-4 lg:px-0",
              {
                "translate-x-0": showNav,
              }
            )}
          >
            <ul className="flex lg:items-center gap-8 lg:flex-row flex-col mt-36 lg:mt-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary lg:text-white font-heading lg:font-subHeading text-2xl lg:text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link
          href="/contact"
          className="hidden lg:inline-block uppercase border border-[#FFFFFF4B] px-10 py-3"
        >
          {t("CONTACT")}
        </Link>
        <BurgerButton
          handleClick={() => setShowNav(!showNav)}
          showNav={showNav}
        />
      </div>
    </header>
  );
}

function useNavbar() {
  const t = useTranslations("NAVBAR");
  const [scrollY, setScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [
    {
      title: t("ABOUT"),
      href: "/about",
    },
    {
      title: t("PRODUCTS"),
      href: "/products",
    },
    {
      title: t("RECIPES"),
      href: "/recipes",
    },
  ];
  return {
    t,
    navLinks,

    showNav,
    scrollY,
    scrollingDown,
    setShowNav,
  };
}
