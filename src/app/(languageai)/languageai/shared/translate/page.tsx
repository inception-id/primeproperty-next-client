import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { Suspense } from "react";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import TranslateHistoryTable from "@/app/(languageai)/languageai/history/translate/_components/translate-history-table";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import LanguageaiTableFallback from "@/app/(languageai)/_components/table-fallback";
import TranslateSharedStorageTable from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-table";
import TranslateSharedStorageDataTable from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-data-table";

const LanguageaiSharedTranslatePage = async () => {
  const accessToken = await fetchCookieToken();
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">Shared Translation</h1>
          <p className="text-sm">Showing all shared translation</p>
        </div>
        <Link
          href="/languageai/shared"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>
      {accessToken ? (
        <Suspense fallback={<LanguageaiTableFallback />}>
          <TranslateSharedStorageTable />
        </Suspense>
      ) : (
        <LanguageaiLoginCard />
      )}
    </section>
  );
};

export default LanguageaiSharedTranslatePage;
