import { useTranslations } from "next-intl";
import { Call, Email, Instagram } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Socials() {
  const { socials } = useSocails();
  return (
    <div className="grid lg:grid-cols-2 gap-10 max-w-[400px]">
      {socials.map((social) => (
        <div key={social.href} className="flex flex-col gap-2">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            {social.icon}
          </div>
          <Link
            href={social.href}
            className={cn("text-[#3333337F]", {
              "text-primary": social.name === "tel",
            })}
          >
            {social.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

function useSocails() {
  const t = useTranslations("CONTACT_SECTION");

  const socials = [
    {
      icon: <Email />,
      href: "mailto:" + t("EMAIL"),
      title: t("EMAIL"),
      name: "email",
    },
    {
      icon: <Call />,
      href: "tel:" + t("TEL"),
      title: t("TEL"),
      name: "tel",
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/" + t("INSTAGRAM"),
      title: t("INSTAGRAM"),
      name: "instagram",
    },
  ];

  return { socials };
}
