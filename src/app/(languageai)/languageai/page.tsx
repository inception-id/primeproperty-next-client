import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuAudioLines, LuLanguages, LuSquareTerminal } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { CgTranscript } from "react-icons/cg";

const Languageai = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4 flex flex-col items-center justify-center lg:max-w-lg mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-center">
        LANGUAGE AI
      </h1>
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-center mb-4">
        by INCEPTION.ID
      </h2>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-4">
        Language processing, visualization, and analytics
      </h3>
      <div className="grid grid-cols-2 gap-4 w-full">
        <Link
          href="/languageai/translate"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuLanguages />
          Translate
        </Link>
        <Link
          href="/languageai/checkbot"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuSquareTerminal />
          Checkbot
        </Link>
        <Link
          href="/languageai/speech-to-text"
          className={cn(buttonVariants({}), "w-full")}
        >
          <LuAudioLines />
          Text to Speech
        </Link>
        <Link
          href="/languageai/text-to-speech"
          className={cn(buttonVariants({}), "w-full")}
        >
          <CgTranscript />
          Speech to Text
        </Link>
      </div>
    </section>
  );
};

export default Languageai;
