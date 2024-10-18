import { StaticImageData } from "next/image";
import en from "./messages/en.json";

declare global {
  type Messages = typeof en;
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;

  type TProduct = {
    name: string;
    title: string;
    price: string;
    description?: string;
    info?: string[];
    image: StaticImageData;
  };
}
