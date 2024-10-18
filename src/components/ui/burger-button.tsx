import { cn } from "@/lib/utils";

interface BurgerButtonProps {
  handleClick: () => void;
  showNav: boolean;
}

export default function BurgerButton({
  handleClick,
  showNav,
}: BurgerButtonProps) {
  return (
    <button
      className="z-10 bg-secondary lg:hidden w-12 h-12 rounded-full flex flex-col items-center justify-center"
      onClick={handleClick}
    >
      <div className="w-6 h-6 flex flex-col gap-[5px] items-center justify-center">
        <div
          className={cn(
            "block w-full h-[2px] rounded-full bg-white transition-all",
            {
              "rotate-45 translate-y-[8px]": showNav,
            }
          )}
        />
        <div
          className={cn("block w-1/2 h-[2px] bg-white self-start", {
            "opacity-0": showNav,
          })}
        />
        <div
          className={cn("block w-full h-[2px] bg-white transition-all", {
            "-rotate-45 translate-y-[-6px]": showNav,
          })}
        />
      </div>
    </button>
  );
}
