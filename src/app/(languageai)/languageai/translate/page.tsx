import TranslateProvider from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import TranslateDesktop from "@/app/(languageai)/languageai/translate/_components/translate-desktop";
import type { Metadata } from "next";
import TranslateSharingInfoDialog
    from "@/app/(languageai)/languageai/translate/_components/translate-sharing-info-dialog";
import {cookies} from "next/headers";

export const metadata: Metadata = {
  title: "AI Translate | Understandable",
  description:
    "Process, visualize, and analyse your translation into multiple languages for free with Language AI Translate.",
  keywords: "translate, translation, AI translate, AI translation",
};

const LanguageaiTranslate = async () => {
    const translateSharingInfo = cookies().get("translate-sharing-info");
  return (
    <TranslateProvider>
        <TranslateSharingInfoDialog showDialog={!translateSharingInfo} />
        <TranslateDesktop />
    </TranslateProvider>
  );
};

export default LanguageaiTranslate;
