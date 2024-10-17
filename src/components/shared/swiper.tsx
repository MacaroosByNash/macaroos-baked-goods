import { useRef } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface MySwipperProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  slidesPerView: number;
  children: React.ReactNode;
}

export default function MySwiper({
  setActiveSlide,
  slidesPerView,
  children,
}: MySwipperProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      loop={true}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper mt-14 lg:mt-16 w-full"
    >
      {children}
    </Swiper>
  );
}
