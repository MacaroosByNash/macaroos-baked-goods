import { useTranslations } from "next-intl";
import { Call, Email, Instagram } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

export default function Socials() {
  const { socials } = useSocails();
  return (
    <div className="grid lg:grid-cols-2 gap-10 max-w-[400px]">
      {socials.map((social) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * socials.indexOf(social) }}
          key={social.href}
          className="flex flex-col gap-2"
        >
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
        </motion.div>
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
      href: t("INSTAGRAM_LINK"),
      title: t("INSTAGRAM"),
      name: "instagram",
    },
  ];

  return { socials };
}
