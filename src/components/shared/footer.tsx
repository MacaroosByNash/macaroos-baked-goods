import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={84}
          height={84}
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
      </div>
    </footer>
  );
}
