import LanguageaiHistoryLoginCard from "@/app/(languageai)/languageai/history/_components/history-login-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LuAudioLines, LuLanguages, LuSquareTerminal } from "react-icons/lu";
import { CgTranscript } from "react-icons/cg";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

const LanguageaiHistory = async () => {
  const accessToken = await fetchCookieToken();

  if (!accessToken) {
    return <LanguageaiHistoryLoginCard />;
  }

  return (
    <section className="w-full h-screen overflow-hidden p-4 flex flex-col items-center justify-center lg:max-w-lg mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
        HISTORY
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        &quot;Those who cannot remember the past are condemned to repeat
        it.&quot;
      </h2>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-8">
        George Santayana
      </h3>

      <div className="grid grid-cols-2 gap-4 w-full">
        <Link
          href="/languageai/history/translate"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuLanguages />
          Translate History
        </Link>
        <Link
          href="/languageai/history/checkbot"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuSquareTerminal />
          Checkbot History
        </Link>
        <Link
          href="/languageai/history/text-to-speech"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuAudioLines />
          TTS History
        </Link>
        <Link
          href="/languageai/history/speech-to-text"
          className={cn(buttonVariants({}), "w-full")}
        >
          <CgTranscript />
          STT History
        </Link>
      </div>
    </section>
  );
};

export default LanguageaiHistory;
