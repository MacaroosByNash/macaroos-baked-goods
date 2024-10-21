"use client";
import Image from "next/image";
import fairyFloss from "@/assets/images/fairy-floss.webp";
import { useTranslations } from "next-intl";
import Socials from "./socials";
import { Button } from "../ui/button";
import Heading from "../shared/heading";
import * as motion from "framer-motion/client";
import { useForm, useWatch } from "react-hook-form";
import ConfirmPrompt from "../ui/confirm-prompt";
import { useEffect, useRef, useState } from "react";
import Spinner from "../ui/spinner";

export default function Contact() {
  const { t, formFields } = useContact();
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<TFormValues>();
  const [isSuccess, setIsSuccess] = useState(false);

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from your website`);
  }, [userName, setValue]);

  const onSubmit = async (data: TFormValues) => {
    console.log("sending");

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json();
        if (json.success) {
          console.log(json.message);
          if (formRef.current) {
            formRef.current.reset();
          }
          setIsSuccess(true);
          reset();
        } else {
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
      });
  };
  console.log(errors);

  return (
    <section
      id="contact"
      className="contact__section flex items-center justify-center py-28 lg:py-40 px-4 md:px-8 overflow-x-hidden"
    >
      <div className="container flex flex-col lg:flex-row gap-10 lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[48%] flex flex-col md:items-center lg:items-start gap-10"
        >
          <Image
            src={fairyFloss}
            alt="our stand"
            width={470}
            height={624}
            className="w-[300px] md:w-1/2 h-[400px] lg:w-[470px] lg:h-[624px]"
          />
          <div className="hidden lg:block">
            <Socials />
          </div>
        </motion.div>
        <div className="lg:w-[48%]">
          <div className="max-w-[300px]">
            <Heading title={t("TITLE")} name={t("NAME")} direction="right" />
          </div>
          {!isSubmitSuccessful && (
            <form
              className="mt-10 mb-32 lg:mb-0 flex flex-col gap-7 lg:gap-5"
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="hidden"
                {...register("access_key")}
                value="04f9758b-03fb-494a-88fe-788983b55192"
              />
              <input
                type="checkbox"
                {...register("botcheck")}
                className="hidden"
                hidden
              />
              <input
                type="hidden"
                value={process.env.NEXT_PUBLIC_FORM_KEY}
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input
                type="hidden"
                value="Macaroose Cake Shop"
                {...register("from_name")}
              />

              {formFields.map((field) => (
                <motion.fieldset
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * formFields.indexOf(field),
                  }}
                  key={field.name}
                  className="flex flex-col gap-2"
                >
                  <label
                    htmlFor={field.name}
                    className="text-2xl font-subHeading"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      {...register(field.name, { required: field.required })}
                      id={field.name}
                      className="h-[180px] font-light bg-transparent font-subHeading text-primary py-2 text-left border-b-2 outline-none border-b-input resize-none focus:border-border text-2xl"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      placeholder={field.placeholder}
                      className="bg-transparent border-b-2 font-light font-subHeading text-left text-primary border-b-input py-2 outline-none focus:border-border text-2xl"
                      {...register(field.name, { required: field.required })}
                    />
                  )}

                  {errors[field.name]?.message && (
                    <span className="text-red-500 text-sm italic">
                      {errors[field.name]?.message}
                    </span>
                  )}
                </motion.fieldset>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * formFields.length }}
              >
                <Button
                  type="submit"
                  className="border-[#171B1B3D] gap-4 text-white rounded-none p-4 w-[170px] uppercase h-auto self-start mt-5"
                >
                  {t("FORM.BUTTON")} {isSubmitting && <Spinner />}
                </Button>
              </motion.div>
            </form>
          )}
          {isSubmitSuccessful && (
            <ConfirmPrompt isSuccess={isSuccess} reset={reset} />
          )}

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
  const formFields: {
    label: string;
    name: keyof TFormValues;
    placeholder: string;
    type: string;
    required?: string;
  }[] = [
    {
      label: t("FORM.NAME.LABEL"),
      name: "name",
      placeholder: t("FORM.NAME.PLACEHOLDER"),
      type: "text",
      required: "Please enter your name",
    },
    {
      label: t("FORM.EMAIL.LABEL"),
      name: "email",
      placeholder: t("FORM.EMAIL.PLACEHOLDER"),
      type: "email",
      required: "Please enter your email",
    },
    {
      label: t("FORM.MESSAGE.LABEL"),
      name: "message",
      placeholder: t("FORM.MESSAGE.PLACEHOLDER"),
      type: "textarea",
      required: "Please enter your message",
    },
    {
      label: t("FORM.DATE.LABEL"),
      name: "date",
      placeholder: t("FORM.DATE.PLACEHOLDER"),
      type: "date",
      required: "Please select a date",
    },
    {
      label: t("FORM.QUANTITY.LABEL"),
      name: "quantity",
      placeholder: t("FORM.QUANTITY.PLACEHOLDER"),
      type: "number",
      required: "Please enter a quantity",
    },
  ];

  return { t, formFields };
}
