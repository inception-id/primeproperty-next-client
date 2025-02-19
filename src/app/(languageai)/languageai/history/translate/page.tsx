import TranslateHistoryTable from "@/app/(languageai)/languageai/history/translate/_components/translate-history-table";
import { Suspense } from "react";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

const TranslateHistory = async () => {
    const accessToken = await fetchCookieToken();

  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">Translation History</h1>
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

        {accessToken ?
            <Suspense fallback={<LanguageaiHistoryFallback />}>
                <TranslateHistoryTable />
            </Suspense>
            :
            <LanguageaiLoginCard />
        }
    </section>
  );
};

export default TranslateHistory;
