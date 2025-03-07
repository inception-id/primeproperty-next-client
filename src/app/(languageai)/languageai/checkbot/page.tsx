import type { Metadata } from "next";
import CheckbotForm from "./_components/checkbot-form";
import CheckbotResult from "./_components/checkbot-result";

export const metadata: Metadata = {
  title: "Checkbot AI | Check Grammar and Spelling | Paraphrase",
  description: "Paraphrase your writing and fix grammar and spelling for free.",
  keywords: "paraphrase, grammar check, spelling check, AI",
};

const LanguageaiCheckbot = () => {
  return (
    <div className="flex-1 h-full flex flex-col p-2 md:p-4 gap-2 md:gap-4 md:flex-row">
      <CheckbotForm />
      <CheckbotResult />
    </div>
  );
};

export default LanguageaiCheckbot;
