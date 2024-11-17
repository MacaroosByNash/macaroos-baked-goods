import cupcakes from "@/assets/images/cup-cakes.webp";
import cupcakesTwo from "@/assets/images/cup-cakes-two.webp";
import fillingCake from "@/assets/images/filling-cake.webp";
import fillingCakeTwo from "@/assets/images/filling-cake-two.webp";
import tierCake from "@/assets/images/tier-cake.webp";
import cookies from "@/assets/images/shortbread.webp";
import brownies from "@/assets/images/brownies.webp";
import macarons from "@/assets/images/macarons.webp";
import { useTranslations } from "next-intl";

export default function useProducts() {
  const t = useTranslations("ALL_PRODUCTS");

  const products = [
    {
      name: t("ONE.NAME"),
      title: t("ONE.TITLE", { amount: 12 }),
      description: t("ONE.DESCRIPTION", { price: 10 }),
      price: t("ONE.PRICE", { price: 30 }),
      image: cupcakes,
    },
    {
      name: t("TWO.NAME"),
      title: t("TWO.TITLE", { amount: 12 }),
      description: t("TWO.DESCRIPTION", { price: 10 }),
      price: t("TWO.PRICE", { price: 36 }),
      image: cupcakesTwo,
    },
    {
      name: t("THREE.NAME"),
      title: t("THREE.TITLE"),
      description: t("THREE.DESCRIPTION", { price: 10 }),
      price: t("THREE.PRICE", { price: 65 }),
      image: fillingCake,
      info: [
        t("THREE.INFO.ONE", { layers: 2 }),
        t("THREE.INFO.TWO", { servings: 10 }),
      ],
    },
    {
      name: t("FOUR.NAME"),
      title: t("FOUR.TITLE"),
      price: t("FOUR.PRICE", { price: 85 }),
      image: fillingCakeTwo,
      info: [
        t("FOUR.INFO.ONE", { layers: 3 }),
        t("FOUR.INFO.TWO", { servings: 15 }),
      ],
    },
    {
      name: t("FIVE.NAME"),
      title: t("FIVE.TITLE", { tier: 2 }),
      description: t("FIVE.DESCRIPTION", { price: 150 }),
      price: t("FIVE.PRICE", { price: 130 }),
      image: tierCake,
      info: [t("FIVE.INFO.ONE", { servings: 35 })],
    },
    {
      name: t("SIX.NAME"),
      title: t("SIX.TITLE"),
      description: t("SIX.DESCRIPTION"),
      price: t("SIX.PRICE", { price: 70 }),
      image: cookies,
      info: [t("SIX.INFO.ONE")],
    },
    {
      name: t("SEVEN.NAME"),
      title: t("SEVEN.TITLE", { amount: 12 }),
      description: t("SEVEN.DESCRIPTION"),
      price: t("SEVEN.PRICE", { price: 52 }),
      image: brownies,
      info: [t("SEVEN.INFO.ONE", { price: 65 })],
    },
    {
      name: t("EIGHT.NAME"),
      title: t("EIGHT.TITLE"),
      description: t("EIGHT.DESCRIPTION", { minOrder: 24 }),
      price: t("EIGHT.PRICE", {
        price: 56,
      }),
      image: macarons,
      info: [t("EIGHT.INFO.ONE")],
    },
  ];
  return {
    products,
  };
}
