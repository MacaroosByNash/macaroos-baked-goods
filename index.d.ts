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

  type TFormValues = {
    name: string;
    email: string;
    message: string;
    date: string;
    quantity: number;
    access_key: string;
    botcheck: string;
    subject: string;
    from_name: string;
  };
}
