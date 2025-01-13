import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import { Suspense } from "react";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import TtsStorageTable from "@/app/(languageai)/languageai/storage/text-to-speech/_components/tts-storage-table";

const TtsStorage = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Text to Speech Storage
          </h1>
          <p className="text-sm">Your saved text to speech</p>
        </div>
        <Link
          href="/languageai/storage"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>
      <Suspense fallback={<LanguageaiHistoryFallback />}>
        <TtsStorageTable />
      </Suspense>
    </section>
  );
};

export default TtsStorage;
