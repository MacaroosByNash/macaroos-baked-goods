"use client";
import { useRef, useState } from "react";
import { PlayIcon } from "../icons";
import Heading from "../shared/heading";
import { useTranslations } from "next-intl";
import { PauseIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function OurStory() {
  const t = useTranslations("STORY_SECTION");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };

  return (
    <section className="story_section bg-primary flex items-center justify-center py-28 lg:py-40 px-4 md:px-8">
      <div className="container h-[375px] xl:h-auto flex flex-col xl:flex-row xl:items-center justify-between text-white">
        <div className="relative flex items-center justify-center">
          <div className="absolute -bottom-[180px] lg:left-20 w-[240px] h-[324px] lg:w-[274px] lg:h-[484px] ">
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              className="w-full h-full object-cover"
              autoPlay={false}
            >
              <source src="/story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{
                scale: 1.1,
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
              className={cn(
                "absolute top-[65%] lg:top-[58%] -right-1/4 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white flex items-center justify-center text-[#F5AE5C]",
                {
                  "w-16 h-16 lg:top-[68%] -right-[10%]": isPlaying,
                }
              )}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </motion.button>
          </div>
        </div>

        <div className="self-end">
          <Heading name={t("NAME")} title={t("TITLE")} direction="up" />
        </div>
      </div>
    </section>
  );
}
