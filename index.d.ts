import en from "./messages/en.json";

declare global {
  type Messages = typeof en;
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}
