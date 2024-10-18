import { useEffect, useState } from "react";

export default function useSlidesPerVIew(slides: number) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSlidesPerView(slides);
      } else if (window.innerWidth > 768) {
        setSlidesPerView(slides - 2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial setting
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return slidesPerView;
}
