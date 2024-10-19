import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

interface HeadingProps {
  title: string;
  name: string;
  center?: boolean;
  direction?: "left" | "right" | "up";
}
export default function Heading({
  title,
  name,
  center,
  direction,
}: HeadingProps) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("font-subHeading mb-4 uppercase", {
          "text-center": center,
        })}
      >
        {name}
      </motion.p>
      <motion.h3
        initial={{
          opacity: 0,
          x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
          y: direction === "up" ? -100 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={cn(
          "text-[40px] lg:text-[56px] lg:max-w-[600px] leading-[48px] lg:leading-[64px]",
          {
            "text-center": center,
          }
        )}
      >
        {title}
      </motion.h3>
    </>
  );
}
