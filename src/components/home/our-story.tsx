import { PlayIcon } from "../icons";
import Heading from "../shared/heading";
import { useTranslations } from "next-intl";

export default function OurStory() {
  const t = useTranslations("STORY_SECTION");
  return (
    <section className="story_section bg-primary flex items-center justify-center py-28 lg:py-40 px-4 lg:px-8">
      <div className="container flex flex-col lg:flex-row lg:items-center justify-between text-white">
        <div>
          <video src=""></video>
          <button className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
            <PlayIcon />
          </button>
        </div>

        <div>
          <Heading name={t("NAME")} title={t("TITLE")} />
        </div>
      </div>
    </section>
  );
}
