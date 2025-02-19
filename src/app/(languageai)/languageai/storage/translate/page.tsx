import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import { Suspense } from "react";
import LanguageaiTableFallback from "@/app/(languageai)/_components/table-fallback";
import TranslateStorageTable from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-table";
import {fetchCookieToken} from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";

const TranslateStorage = async () => {
    const accessToken = await fetchCookieToken();

  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">Translation Storage</h1>
          <p className="text-sm">Your saved translation</p>
        </div>
        <Link
          href="/languageai/storage"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>

        {accessToken ?
            <Suspense fallback={<LanguageaiTableFallback />}>
                <TranslateStorageTable />
            </Suspense>:
            <LanguageaiLoginCard />
        }
    </section>
  );
};

export default TranslateStorage;
