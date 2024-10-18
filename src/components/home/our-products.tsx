import Heading from "../shared/heading";
import Products from "../products/products";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import useProducts from "@/hooks/useProducts";

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
        <Button className="text-white w-[170px] h-[48px] uppercase">
          {t("BUTTON")}
        </Button>
      </div>
    </section>
  );
}
