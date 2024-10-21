import { useTranslations } from "next-intl";
import { FailedIcon, SuccessIcon } from "../icons";
import { UseFormReset } from "react-hook-form";
import { Button } from "./button";

interface IConfirmPromptProps {
  isSuccess: boolean;
  reset: UseFormReset<TFormValues>;
}
export default function ConfirmPrompt({
  isSuccess,
  reset,
}: IConfirmPromptProps) {
  const t = useTranslations("CONTACT_SECTION");
  return (
    <div className="px-4 py-8 flex flex-col gap-4 w-full items-center">
      <div className="text-4xl w-[100px] h-[100px] rounded-full shadow bg-white flex items-center justify-center">
        {isSuccess ? <SuccessIcon /> : <FailedIcon />}
      </div>

      <h3 className="py-5 text-2xl">
        {isSuccess ? t("FORM.SUCCESS.TITLE") : t("FORM.ERROR.TITLE")}
      </h3>
      <p className="text-gray-700 md:px-3 max-w-xs text-center">
        {isSuccess ? t("FORM.SUCCESS.MESSAGE") : t("FORM.ERROR.MESSAGE")}
      </p>
      <Button
        onClick={() => reset()}
        className="gap-4 text-white rounded-none p-4 w-[170px] uppercase h-auto mt-5"
      >
        {t("FORM.SUMBITED")}
      </Button>
    </div>
  );
}
