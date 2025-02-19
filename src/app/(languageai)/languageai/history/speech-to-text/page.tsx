import { Suspense } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import TranscriptionHistoryTable from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-history-table";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";

const SpeechToTextHistory = async () => {
  const accessToken = await fetchCookieToken();
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Speech to Text History
          </h1>
          <p className="text-sm">Showing latest history</p>
        </div>
        <Link
          href="/languageai/history"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>
      {accessToken ? (
        <Suspense fallback={<LanguageaiHistoryFallback />}>
          <TranscriptionHistoryTable />
        </Suspense>
      ) : (
        <LanguageaiLoginCard />
      )}
    </section>
  );
};

export default SpeechToTextHistory;
