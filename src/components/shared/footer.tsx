import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Facebook, InstagramO, Twitter } from "../icons";

export default function Footer() {
  const { menu, service, social, t } = useFooter();
  return (
    <footer className="footer bg-foreground text-white flex items-center justify-center pt-6 lg:pt-16 pb-20 lg:pb-8 px-4 md:px-8">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-between xl:justify-start xl:gap-56">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={84}
              height={84}
              className="w-14 h-14 lg:w-20 lg:h-20"
            />
          </Link>
          {[menu, service].map((menu) => (
            <div
              key={menu.name}
              className="flex items-center lg:items-start flex-col gap-5"
            >
              <h5 className="uppercase">{menu.name}</h5>
              <ul className="flex items-center lg:items-start flex-col gap-4">
                {menu.menu.map((item, index) => (
                  <li key={index}>
                    <Link href="/" className="text-center lg:text-left">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center mt-6 lg:mt-0 lg:items-start">
            <h5 className="uppercase">{social.name}</h5>
            <ul className="flex gap-4">
              {social.menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FFFFFF] opacity-10 bg-blend-darken" />
        <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between gap-6">
          <p className="text-[#FFFFFF80] text-center lg:text-left w-56 lg:w-auto">
            {t("COPYRIGHT")}
          </p>
          <ul className="flex items-center justify-between lg:justify-start gap-20">
            {[t("TERMS"), t("PRIVACY")].map((item, index) => (
              <li key={index}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function useFooter() {
  const t = useTranslations("FOOTER");
  const menu = {
    name: t("MENU_SECTION.NAME"),
    menu: [
      t("MENU_SECTION.MENU.ABOUT"),
      t("MENU_SECTION.MENU.PRODUCTS"),
      t("MENU_SECTION.MENU.RECIPES"),
      t("MENU_SECTION.MENU.CONTACT"),
    ],
  };
  const service = {
    name: t("SERVICES_SECTION.NAME"),
    menu: [
      t("SERVICES_SECTION.SERVICES.BAKERY"),
      t("SERVICES_SECTION.SERVICES.DELIVERY"),
      t("SERVICES_SECTION.SERVICES.CATERING"),
      t("SERVICES_SECTION.SERVICES.CORPORATE"),
    ],
  };
  const social = {
    name: t("SOCIAL_SECTION.NAME"),
    menu: [
      {
        href: "#",
        icon: <Facebook />,
      },
      {
        href: "#",
        icon: <Twitter />,
      },
      {
        href: "#",
        icon: <InstagramO />,
      },
    ],
  };
  return { menu, service, social, t };
}
