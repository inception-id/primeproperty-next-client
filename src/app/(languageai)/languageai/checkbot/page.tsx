import CheckbotProvider from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import CheckbotMobile from "@/app/(languageai)/languageai/checkbot/_components/checkbot-mobile";
import CheckbotDesktop from "@/app/(languageai)/languageai/checkbot/_components/checkbot-desktop";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Checkbot AI | Check Grammar and Spelling | Paraphrase",
    description: "Paraphrase your writing and fix grammar and spelling for free.",
    keywords: "paraphrase, grammar check, spelling check, AI",
};

const LanguageaiCheckbot = () => {
  return (
    <CheckbotProvider>
      <section className="w-full h-screen overflow-hidden">
        <CheckbotMobile />
        <CheckbotDesktop />
      </section>
    </CheckbotProvider>
  );
};

export default LanguageaiCheckbot;
