import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LuAudioLines, LuLanguages, LuSquareTerminal } from "react-icons/lu";
import { CgTranscript } from "react-icons/cg";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Language Storage | Keep your language data safe",
    description: "Keep your language data in one place, never lost your translation, transcription, or text to speech audio again.",
    keywords: "storage, audio storage, translation, transcription, text to speech",
};

const LanguageaiStorage = async () => {
  const accessToken = await fetchCookieToken();

  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <section className="w-full h-screen overflow-hidden p-4 flex flex-col items-center justify-center lg:max-w-lg mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
        STORAGE
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        &quot;Nothing is really lost to us as long as we remember it.&quot;
      </h2>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-8">
        L.M. Montgomery
      </h3>

      <div className="grid grid-cols-2 gap-4 w-full">
        <Link
          href="/languageai/storage/translate"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuLanguages />
          Translate Storage
        </Link>
        <Link
          href="/languageai/storage/checkbot"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuSquareTerminal />
          Checkbot Storage
        </Link>
        <Link
          href="/languageai/storage/text-to-speech"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuAudioLines />
          TTS Storage
        </Link>
        <Link
          href="/languageai/storage/speech-to-text"
          className={cn(buttonVariants({}), "w-full")}
        >
          <CgTranscript />
          STT Storage
        </Link>
      </div>
    </section>
  );
};

export default LanguageaiStorage;
