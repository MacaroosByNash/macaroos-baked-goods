import { cn, padZero } from "@/lib/utils";

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
      <p className="font-heading text-[40px] mt-28">{process.title}</p>
      <p className="text-[#3333337F] mt-5">{process.description}</p>
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
