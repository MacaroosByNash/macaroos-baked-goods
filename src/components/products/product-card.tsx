import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductCardProps {
  product: TProduct;
  index: number;
}
export default function ProductCard({ product, index }: ProductCardProps) {
  const isFirst = index === 0;
  const info = product.info ?? [];
  return (
    <div
      className={cn("image_gradient relative flex flex-col", {
        "md:col-span-2 min-h-[348px]": isFirst,
      })}
    >
      <Image
        alt={product.title}
        src={product.image}
        width={400}
        height={400}
        className={cn("w-full h-[304px]", {
          "h-full": isFirst,
        })}
      />
      <div
        className={cn("flex-1 bg-white p-7 w-full flex flex-col gap-3", {
          "absolute bottom-0 bg-transparent text-white": isFirst,
        })}
      >
        <p className="uppercase font-subHeading">{product.name}</p>
        <div
          className={cn("flex justify-between", {
            "flex-col": isFirst,
          })}
        >
          <div className="flex flex-col">
            <p
              className={cn("text-xl font-subHeading leading-[48px]", {
                "font-heading text-[40px] leading-[48px]": isFirst,
              })}
            >
              {product.title}
            </p>
            <div className="flex items-center gap-4">
              {info?.map((info) => (
                <p key={info} className="font-subHeading">
                  {info}
                </p>
              ))}
            </div>
            {product.description && (
              <p className="font-subHeading">
                {product.description.split(" ").map((d, i) => (
                  <span
                    className={cn("", {
                      "font-bold": d.includes("$"),
                    })}
                    key={i}
                  >
                    {d}{" "}
                  </span>
                ))}
              </p>
            )}
          </div>
          <p
            className={cn("text-[40px] font-heading", {
              "self-end": isFirst,
            })}
          >
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
