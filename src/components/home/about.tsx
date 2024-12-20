"use client";
import { useTranslations } from "next-intl";
import Heading from "../shared/heading";
import { CaretDown, CaretUp } from "../icons";
import { useState } from "react";
import { padZero } from "@/lib/utils";
import { Button } from "../ui/button";
import macarons from "@/assets/images/macarons.webp";
import tier from "@/assets/images/tier-cake.webp";
import shortbread from "@/assets/images/shortbread.webp";
import fillingCake from "@/assets/images/filling-cake.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const { t, about, controls, activeSlide, setActiveSlide } = useAbout();
  const activeAbout = about[activeSlide];
  const inactiveAbout = about
    .filter((info) => info.title !== activeAbout.title)
    .map((info) => (
      <button
        key={info.title}
        onClick={() => setActiveSlide(about.indexOf(info))}
        className="text-left"
      >
        {info.title}
      </button>
    ));

  return (
    <section
      id="about"
      className="flex items-center justify-center pt-28 lg:pt-40 px-4 md:px-8 overflow-hidden"
    >
      <div className="container flex flex-col lg:flex-row justify-between lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="special_image lg:w-[48%] relative min-h-[464px] lg:min-h-[620px]"
        >
          <div className="w-[230px] h-[230px] md:w-[370px] md:h-[320px]">
            <Image
              src={activeAbout.image}
              alt="about"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <Image
            src={macarons}
            alt="about"
            width={400}
            height={400}
            className="absolute right-14 bottom-20 md:bottom-14 w-[230px] h-[230px] md:w-[370px] md:h-[320px]"
          />
        </motion.div>
        <div className="lg:w-[48%]">
          <Heading name={t("NAME")} title={t("TITLE")} direction="right" />
          <div className="flex items-center gap-4 lg:gap-12 mt-12 lg:mt-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              {controls.map((control) => (
                <Button
                  onClick={control.onClick}
                  key={control.name}
                  className="hover:scale-105 flex items-center justify-center w-12 h-12 rounded-full bg-primary"
                >
                  {control.icon}
                </Button>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <p className="font-subHeading">{padZero(activeSlide + 1)}</p>
              <p className="text-xl font-subHeading">{activeAbout.title}</p>
              <p className="text-[#3333337F]">{activeAbout.description}</p>
              <div className="flex flex-col gap-4">{inactiveAbout}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useAbout() {
  const t = useTranslations("ABOUT_SECTION");
  const [activeSlide, setActiveSlide] = useState(0);

  const about = [
    {
      title: t("INFO.ONE.TITLE"),
      description: t("INFO.ONE.DESCRIPTION"),
      image: fillingCake,
    },
    {
      title: t("INFO.TWO.TITLE"),
      description: t("INFO.TWO.DESCRIPTION"),
      image: tier,
    },
    {
      title: t("INFO.THREE.TITLE"),
      description: t("INFO.THREE.DESCRIPTION"),
      image: shortbread,
    },
  ];
  const length = about.length;

  const controls = [
    {
      name: "up",
      icon: <CaretUp />,
      onClick: () => setActiveSlide((prev) => (prev - 1 + length) % length),
    },
    {
      name: "down",
      icon: <CaretDown />,
      onClick: () => setActiveSlide((prev) => (prev + 1) % length),
    },
  ];

  return {
    t,
    about,
    controls,
    activeSlide,
    setActiveSlide,
  };
}
