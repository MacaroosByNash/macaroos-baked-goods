"use client";
import { useTranslations } from "next-intl";
import Heading from "../shared/heading";
import MySwiper from "../shared/swiper";
import { useState } from "react";
import useSlidesPerVIew from "@/hooks/useSlidesPerView";
import { SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import FeaturesCard from "./features-card";
import fresh from "@/assets/icons/fresh.png";
import natural from "@/assets/icons/natural.png";
import tasty from "@/assets/icons/tasty.png";

export default function Features() {
  const { t, features } = useFeatures();
  const [activeSlide, setActiveSlide] = useState(1);
  const slidesPerView = useSlidesPerVIew(3);

  return (
    <section className="flex items-center justify-center py-24 lg:py-36 px-4 lg:px-8">
      <div className="container flex flex-col items-center py-8 overflow-hidden">
        <Heading name={t("NAME")} title={t("TITLE")} center />
        <MySwiper setActiveSlide={setActiveSlide} slidesPerView={slidesPerView}>
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                "bg-white relative px-10 py-12 text-primary flex flex-col overflow-hidden",
                {
                  "lg:bg-[#9EAD8D] scale_card":
                    index === (activeSlide + 2) % features.length,
                  "bg-[#9EAD8D] lg:bg-white": index === activeSlide,
                }
              )}
            >
              <FeaturesCard
                feature={feature}
                isActive={index === (activeSlide + 2) % features.length}
              />
            </SwiperSlide>
          ))}
        </MySwiper>
      </div>
    </section>
  );
}

function useFeatures() {
  const t = useTranslations("FEATURES_SECTION");
  const features = [
    {
      title: t("FEATURES.ONE.TITLE"),
      description: t("FEATURES.ONE.DESCRIPTION"),
      image: fresh,
    },
    {
      title: t("FEATURES.TWO.TITLE"),
      description: t("FEATURES.TWO.DESCRIPTION"),
      image: natural,
    },
    {
      title: t("FEATURES.THREE.TITLE"),
      description: t("FEATURES.THREE.DESCRIPTION"),
      image: tasty,
    },
  ];
  return { t, features };
}
