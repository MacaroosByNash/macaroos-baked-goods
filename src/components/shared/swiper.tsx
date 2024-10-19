import { Swiper, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface MySwipperProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  slidesPerView: number;
  children: React.ReactNode;
  swiperRef?: React.RefObject<SwiperRef>;
}

export default function MySwiper({
  setActiveSlide,
  slidesPerView,
  children,
  swiperRef,
}: MySwipperProps) {
  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      loop={true}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper mt-14 lg:mt-16 w-full"
    >
      {children}
    </Swiper>
  );
}
