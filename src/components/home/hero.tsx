import { useTranslations } from "next-intl";
import { ArrowDown } from "../icons";
import Link from "next/link";
import owner from "@/assets/images/owner.webp";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Hero() {
  const t = useTranslations("HOME_HERO");
  return (
    <section className="relative home_hero_section bg-primary flex flex-col items-center justify-center py-32 lg:py-36 px-4 md:px-8">
      <div className="container flex flex-col-reverse lg:flex-row gap-8 xl:gap-[260px] 2xl:justify-between text-white">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            className="font-subHeading uppercase"
          >
            {t("SUB_TITLE")}
          </motion.p>
          <motion.h1
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, duration: 1 },
            }}
            initial={{ opacity: 0, x: -100 }}
            className="flex flex-col text-[46px] lg:text-[72px] mt-5 leading-[51px] lg:leading-[80px] max-w-[473px]"
          >
            {t("TITLE")
              .split("\n")
              .map((title) => (
                <span key={title} className="">
                  {title}
                </span>
              ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 1 },
            }}
            className="text-xl mt-10 max-w-[470px]"
          >
            {t("DESCRIPTION")}
          </motion.p>
        </div>
        <div className="hero_image self-end md:self-start relative">
          <Image
            src={owner}
            alt="hero image"
            width={500}
            height={500}
            className="absolute -bottom-8 w-[266px] h-[266px] lg:w-[454px] lg:h-[454px] rounded-full"
          />

          <div className="w-[266px] h-[266px] lg:w-[454px] lg:h-[454px] bg-secondary rounded-full" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 1 } }}
        className="absolute bottom-8 "
      >
        <Link
          href="#contact"
          className="hover:animate-bounce hover:border-white text-secondary hover:text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-secondary flex items-center justify-center"
        >
          <ArrowDown />
        </Link>
      </motion.div>
    </section>
  );
}
