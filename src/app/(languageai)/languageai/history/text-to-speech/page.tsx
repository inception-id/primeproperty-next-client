import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import { Suspense } from "react";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import TtsHistoryTable from "@/app/(languageai)/languageai/history/text-to-speech/_components/tts-history-table";

const TextToSpeechHistory = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Text to Speech History
          </h1>
          <p className="text-sm">Showing 10 latest history</p>
        </div>
        <Link
          href="/languageai/history"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>
      <Suspense fallback={<LanguageaiHistoryFallback />}>
        <TtsHistoryTable />
      </Suspense>
    </section>
  );
};

export default TextToSpeechHistory;
