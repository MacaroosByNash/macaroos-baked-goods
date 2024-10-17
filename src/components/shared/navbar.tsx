"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const SCROLL_THRESHOLD = 600;

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
  return (
    <header
      className={cn(
        "header top-0 z-[999] flex w-full justify-center bg-background transition-all duration-300 lg:pb-8",
        {
          "sticky bg-white shadow": scrollY > 0,
          "translate-y-[-500%]":
            scrollY > SCROLL_THRESHOLD && scrollingDown && !showNav,
          "bg-white": showNav,
        }
      )}
    >
      <div>
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={84}
            height={84}
            className="w-14 h-14 lg:w-20 lg:h-20"
          />
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const navLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Recipes",
    href: "/recipes",
  },
];
