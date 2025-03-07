import LanguageaiHeader from "@/app/(languageai)/_header";
import LanguageaiSidebar from "@/app/(languageai)/_sidebar";
import LoginDialog from "@/app/(auth)/auth/login/_components/login-dialog";
import LanguageaiSubscriptionLimitDialog from "@/app/(languageai)/_components/languageai-subscription-limit-dialog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language AI | Process, visualize, Analyze",
  description:
    "Process, visualize, and analyse any translation, transcription, and audio for free.",
  keywords:
    "translation, transcription, text to speech, speech to text, paraphrase, grammar check",
};

type TLanguageaiLayout = {
  children: React.ReactNode;
};

const LanguageaiLayout = ({ children }: TLanguageaiLayout) => {
  return (
    <main className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      <LanguageaiHeader />
      <LanguageaiSidebar />
      {children}
      <LoginDialog />
      <LanguageaiSubscriptionLimitDialog />
    </main>
  );
};

export default LanguageaiLayout;
