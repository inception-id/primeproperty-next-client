import { Suspense } from "react";
import LanguageaiTableFallback from "@/app/(languageai)/_components/table-fallback";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronLeft } from "react-icons/lu";
import CheckbotStorageTable from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-table";

const CheckbotStorage = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">Checkbot Storage</h1>
          <p className="text-sm">Your saved checkbot</p>
        </div>
        <Link
          href="/languageai/storage"
          className={buttonVariants({ variant: "secondary" })}
        >
          <LuChevronLeft />
          Back
        </Link>
      </div>

      <Suspense fallback={<LanguageaiTableFallback />}>
        <CheckbotStorageTable />
      </Suspense>
    </section>
  );
};

export default CheckbotStorage;
