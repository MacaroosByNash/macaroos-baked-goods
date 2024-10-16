import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          src="@/public/logo.png"
          alt="logo"
          width={84}
          height={84}
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
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
