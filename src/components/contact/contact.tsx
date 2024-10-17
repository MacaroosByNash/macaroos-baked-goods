import Image from "next/image";
import fairyFloss from "@/assets/images/fairy-floss.webp";
import { useTranslations } from "next-intl";
import Socials from "./socials";
import { Button } from "../ui/button";

export default function Contact() {
  const { t, formFields } = useContact();
  return (
    <section className="contact__section flex items-center justify-center py-28 lg:py-40 px-4 lg:px-8">
      <div className="container flex flex-col lg:flex-row gap-10 lg:justify-between">
        <div className="lg:w-[48%] flex flex-col gap-10">
          <Image
            src={fairyFloss}
            alt="our stand"
            width={470}
            height={624}
            className="w-[300px] h-[400px] lg:w-[470px] lg:h-[624px]"
          />
          <div className="hidden lg:block">
            <Socials />
          </div>
        </div>
        <div className="lg:w-[48%]">
          <p className="font-subHeading mb-4 uppercase">{t("NAME")}</p>
          <h3 className="text-[40px] lg:text-[56px] max-w-xs leading-[48px] lg:leading-[64px]">
            {t("TITLE")}
          </h3>

          <form
            action=""
            className="mt-10 mb-32 lg:mb-0 flex flex-col gap-7 lg:gap-5"
          >
            {formFields.map((field) => (
              <fieldset key={field.name} className="flex flex-col gap-2">
                <label htmlFor={field.name} className="text-2xl">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    id={field.name}
                    className="h-[180px] bg-transparent py-2 italic border-b-2 outline-none border-b-input resize-none focus:border-border"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    placeholder={field.placeholder}
                    className="bg-transparent border-b-2 border-b-input py-2 italic outline-none focus:border-border"
                  />
                )}
              </fieldset>
            ))}
            <Button
              type="submit"
              variant="outline"
              className="border-[#171B1B3D] p-4 w-[170px] uppercase h-auto self-start mt-5"
            >
              {t("FORM.BUTTON")}
            </Button>
          </form>
          <div className="lg:hidden">
            <Socials />
          </div>
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

  return { t, formFields };
}
