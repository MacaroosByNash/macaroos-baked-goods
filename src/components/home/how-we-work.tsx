"use client";
import { useTranslations } from "next-intl";
import MySwiper from "../shared/swiper";
import { useState } from "react";
import useSlidesPerVIew from "@/hooks/useSlidesPerView";
import { SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import ProcessCard from "./process-card";
import Heading from "../shared/heading";

export default function HowWeWork() {
  const { t, process } = useHowItWorks();
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerView = useSlidesPerVIew(4);

  return (
    <section className="process_section bg-primary flex items-center justify-center py-24 lg:py-36 px-4 md:px-8">
      <div className="container flex flex-col items-center text-white overflow-hidden py-8">
        <div className="max-w-[330px] lg:max-w-[600px]">
          <Heading name={t("NAME")} title={t("TITLE")} center />
        </div>
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
