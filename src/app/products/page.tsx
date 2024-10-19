import type { Metadata } from "next";

import Products from "@/components/products/products";
import Heading from "@/components/shared/heading";
import useProducts from "@/hooks/useProducts";
import { useTranslations } from "next-intl";
import { pageMetadata } from "../../../constants";

export const metadata: Metadata = {
  title: pageMetadata.products.title,
  description: pageMetadata.products.description,
  keywords: pageMetadata.products.keywords,
};

export default function ProductsScreen() {
  const t = useTranslations("PRODUCTS");
  const { products } = useProducts();
  return (
    <section className="products_page flex items-center justify-center pt-20 px-4 lg:px-8">
      <div className="container flex flex-col items-center gap-16">
        <div className="w-full">
          <Heading name={t("NAME")} title={t("TITLE")} />
        </div>
        <Products products={products.slice(0, 5)} />
      </div>
    </section>
  );
}
