"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { SwiperRef, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonial-card";
import useSlidesPerVIew from "@/hooks/useSlidesPerView";
import avatarOne from "@/assets/images/avatar-one.png";
import avatarTwo from "@/assets/images/avatar-two.png";
import avatarThree from "@/assets/images/avatar-three.png";
import MySwiper from "../shared/swiper";

export default function Testimonials() {
  const { t, testimonials } = useTestimonials();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const slidesPerView = useSlidesPerVIew(3);

  const handleDotClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <section className="flex items-center justify-center pt-28 lg:pt-40 px-4 lg:px-8">
      <div className="container flex flex-col items-center overflow-x-hidden">
        <p className="font-oswald mb-4 uppercase text-center">{t("NAME")}</p>
        <h3 className="text-[40px] lg:text-[56px] text-center max-w-[617px] leading-[48px] lg:leading-[64px]">
          {t("TITLE")}
        </h3>
        <MySwiper setActiveSlide={setActiveSlide} slidesPerView={slidesPerView}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={cn("bg-white p-6 lg:p-14 flex flex-col", {
                "lg:bg-[#9EAD8D] scale_card":
                  index === (activeSlide + 1) % testimonials.length,
                "bg-[#9EAD8D] lg:bg-white": index === activeSlide,
              })}
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </MySwiper>
        <div className="flex items-center justify-center gap-6 mt-14 lg:mt-16">
          {Array(testimonials.length)
            .fill(0)
            .map((_, index) => (
              <button
                onClick={() => handleDotClick(index)}
                className={cn("w-2 h-2 rounded-full bg-[#9EAD8D]", {
                  "bg-primary w-4 h-4": index === activeSlide,
                })}
                key={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

function useTestimonials() {
  const t = useTranslations("TESTIMONIALS");

  const testimonials = [
    {
      stars: t("TESTIMONIALS.ONE.STARS"),
      title: t("TESTIMONIALS.ONE.TITLE"),
      description: t("TESTIMONIALS.ONE.DESCRIPTION"),
      name: t("TESTIMONIALS.ONE.NAME"),
      avatar: avatarOne,
    },
    {
      stars: t("TESTIMONIALS.TWO.STARS"),
      title: t("TESTIMONIALS.TWO.TITLE"),
      description: t("TESTIMONIALS.TWO.DESCRIPTION"),
      name: t("TESTIMONIALS.TWO.NAME"),
      avatar: avatarTwo,
    },
    {
      stars: t("TESTIMONIALS.THREE.STARS"),
      title: t("TESTIMONIALS.THREE.TITLE"),
      description: t("TESTIMONIALS.THREE.DESCRIPTION"),
      name: t("TESTIMONIALS.THREE.NAME"),
      avatar: avatarThree,
    },
  ];
  return { t, testimonials };
}
