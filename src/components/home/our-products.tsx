import Heading from "../shared/heading";
import Products from "../products/products";
import { useTranslations } from "next-intl";
import useProducts from "@/hooks/useProducts";
import Link from "next/link";

export default function OurProducts() {
  const t = useTranslations("OUR_PRODUCTS_SECTION");
  const { products } = useProducts();

  return (
    <section className="flex items-center justify-center py-28 lg:py-40 px-4 lg:px-8">
      <div className="container flex flex-col items-center gap-16">
        <div className="w-full">
          <Heading name={t("NAME")} title={t("TITLE")} />
        </div>
        <Products products={products.slice(0, 5)} />
        <Link
          href="/products"
          className="text-white w-[170px] h-[48px] uppercase bg-primary flex items-center justify-center text-center"
        >
          {t("BUTTON")}
        </Link>
      </div>
    </section>
  );
}
