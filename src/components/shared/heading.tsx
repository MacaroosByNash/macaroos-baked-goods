import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  name: string;
  center?: boolean;
}
export default function Heading({ title, name, center }: HeadingProps) {
  return (
    <>
      <p
        className={cn("font-subHeading mb-4 uppercase", {
          "text-center": center,
        })}
      >
        {name}
      </p>
      <h3
        className={cn(
          "text-[40px] lg:text-[56px] max-w-[617px] leading-[48px] lg:leading-[64px]",
          {
            "text-center": center,
          }
        )}
      >
        {title}
      </h3>
    </>
  );
}
