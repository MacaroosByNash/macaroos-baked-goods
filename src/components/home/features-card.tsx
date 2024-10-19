import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface FeaturesCardProps {
  feature: {
    title: string;
    description: string;
    image: StaticImageData;
  };
  isActive: boolean;
}

export default function FeaturesCard({ feature, isActive }: FeaturesCardProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image alt="servings" src={feature.image} width={90} height={90} />
        <p className="font-heading text-[40px] mt-14">{feature.title}</p>
        <p className="text-[#3333337F] mt-5">{feature.description}</p>
      </motion.div>
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
