"use client";
import { useTranslations } from "next-intl";
import MySwiper from "../shared/swiper";
import { useState } from "react";
import useSlidesPerVIew from "@/hooks/useSlidesPerView";
import { SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import ProcessCard from "./process-card";

export default function HowWeWork() {
  const { t, process } = useHowItWorks();
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerView = useSlidesPerVIew(4);

  return (
    <section className="process_section bg-primary flex items-center justify-center py-28 lg:py-40 px-4 lg:px-8">
      <div className="container flex flex-col items-center text-white overflow-hidden">
        <p className="font-oswald mb-4 uppercase text-center">{t("NAME")}</p>
        <h3 className="text-[40px] lg:text-[56px] text-center max-w-[617px] leading-[48px] lg:leading-[64px]">
          {t("TITLE")}
        </h3>
        <div></div>
        <MySwiper setActiveSlide={setActiveSlide} slidesPerView={slidesPerView}>
          {process.map((step, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                "bg-white relative p-12 text-primary flex flex-col overflow-hidden",
                {
                  "lg:bg-[#9EAD8D] scale_card":
                    index === (activeSlide + 1) % process.length,
                  "bg-[#9EAD8D] lg:bg-white": index === activeSlide,
                }
              )}
            >
              <ProcessCard
                process={step}
                index={index}
                isActive={index === (activeSlide + 1) % process.length}
              />
            </SwiperSlide>
          ))}
        </MySwiper>
      </div>
    </section>
  );
}

function useHowItWorks() {
  const t = useTranslations("PROCESS_SECTION");
  const process = [
    {
      title: t("STEPS.ONE.TITLE"),
      description: t("STEPS.ONE.DESCRIPTION"),
    },
    {
      title: t("STEPS.TWO.TITLE"),
      description: t("STEPS.TWO.DESCRIPTION"),
    },
    {
      title: t("STEPS.THREE.TITLE"),
      description: t("STEPS.THREE.DESCRIPTION"),
    },
    {
      title: t("STEPS.FOUR.TITLE"),
      description: t("STEPS.FOUR.DESCRIPTION"),
    },
  ];
  return { t, process };
}
