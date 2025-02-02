import LanguageaiHeader from "@/app/(languageai)/_components/header";
import LanguageaiSidebar from "@/app/(languageai)/_components/sidebar";
import LoginDialog from "@/app/(auth)/auth/login/_components/login-dialog";
import LanguageaiSubscriptionLimitDialog from "@/app/(languageai)/_components/languageai-subscription-limit-dialog";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Language AI | Process, visualize, Analyze",
    description: "Process, visualize, and analyse any translation, transcription, and audio for free.",
    keywords: "translation, transcription, text to speech, speech to text, paraphrase, grammar check",
};

type TLanguageaiLayout = {
  children: React.ReactNode;
};

const LanguageaiLayout = ({ children }: TLanguageaiLayout) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <LanguageaiHeader />
      <LanguageaiSidebar />
      <main className="mt-10 lg:mt-0 w-full">{children}</main>
      <LoginDialog />
      <LanguageaiSubscriptionLimitDialog />
    </div>
  );
};

export default LanguageaiLayout;
