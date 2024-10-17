import Image from "next/image";
import fairyFloss from "@/assets/images/fairy-floss.webp";
import { useTranslations } from "next-intl";
import { Call, Email, Instagram } from "../icons";

export default function Contact() {
  const { t } = useContact();
  return (
    <section className="flex items-center justify-center py-26 lg:py-40 px-4 lg:px-8">
      <div className="container flex flex-col lg:flex-row gap-10 lg:justify-between">
        <div>
          <Image
            src={fairyFloss}
            alt="our stand"
            width={470}
            height={624}
            className="w-[300px] h-[400px] lg:w-[470px] lg:h-[624px]"
          />
        </div>
        <div>
          <p className="font-oswald">{t("NAME")}</p>
          <h3 className="text-[48px] lg:text-[56px] ">{t("TITLE")}</h3>

          <form action=""></form>
          <Socials />
        </div>
      </div>
    </section>
  );
}

function useContact() {
  const t = useTranslations("CONTACT_SECTION");
  const formFields = [
    {
      label: t("FORM.NAME.LABEL"),
      name: "name",
      placeholder: t("FORM.NAME.PLACEHOLDER"),
      type: "text",
    },
    {
      label: t("FORM.EMAIL.LABEL"),
      name: "email",
      placeholder: t("FORM.EMAIL.PLACEHOLDER"),
      type: "email",
    },
    {
      label: t("FORM.MESSAGE.LABEL"),
      name: "message",
      placeholder: t("FORM.MESSAGE.PLACEHOLDER"),
      type: "textarea",
    },
    {
      label: t("FORM.DATE.LABEL"),
      name: "date",
      placeholder: t("FORM.DATE.PLACEHOLDER"),
      type: "date",
    },
    {
      label: t("FORM.QUANTITY.LABEL"),
      name: "quantity",
      placeholder: t("FORM.QUANTITY.PLACEHOLDER"),
      type: "number",
    },
  ];
  const socials = [
    {
      icon: <Email />,
      href: "mailto:" + t("EMAIL"),
      title: t("EMAIL"),
    },
    {
      icon: <Call />,
      href: "tel:" + t("TEL"),
      title: t("TEL"),
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/" + t("INSTAGRAM"),
      title: t("INSTAGRAM"),
    },
  ];

  return { t, formFields, socials };
}
