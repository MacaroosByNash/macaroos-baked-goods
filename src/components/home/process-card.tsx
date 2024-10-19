import { cn, padZero } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProcessCardProps {
  process: {
    title: string;
    description: string;
  };
  index: number;
  isActive: boolean;
}

export default function ProcessCard({
  process,
  index,
  isActive,
}: ProcessCardProps) {
  return (
    <>
      <p className="font-subHeading">{padZero(index + 1)}</p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-heading text-[40px] mt-28"
      >
        {process.title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-[#3333337F] mt-5"
      >
        {process.description}
      </motion.p>
      <div
        className={cn(
          "w-36 h-36 absolute rounded-full bg-[#F5A623] -top-12 -right-3",
          {
            "lg:hidden": !isActive,
          }
        )}
      />
    </>
  );
}
