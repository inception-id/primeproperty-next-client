import type { Metadata } from "next";
import TranslateForm from "./_components/translate-form";
import TranslateResult from "./_components/translate-result";

export const metadata: Metadata = {
  title: "Language AI Translate | Inception.id",
  description:
    "Process, visualize, and analyse your translation into multiple languages for free with Language AI Translate by Inception.id.",
  keywords: "translate, translation, AI translate, AI translation",
};

const LanguageaiTranslate = async () => {
  return (
    <div className="flex-1 h-full flex flex-col p-2 md:p-4 gap-2 md:gap-4 md:flex-row">
      <TranslateForm />
      <TranslateResult />
    </div>
  );
};

export default LanguageaiTranslate;
