import LanguageaiPlanList from "@/app/(languageai)/languageai/plans/_components/languageai-plan-list";
import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Language AI plans | Free | Premium quality",
  description:
    "Select your plans starting with Rp 0, all comes with a quality.",
  keywords: "Language AI, Plans, Subscriptions",
};

const LanguageaiPlans = () => {
  return (
    <section className="p-4 overflow-y-auto h-screen pb-16 lg:pb-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center lg:mt-8">
        LANGUAGE AI PLANS & PRICING
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        &quot;Quality is remembered long after price is forgotten.&quot;
      </h2>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-8">
        Gucci
      </h3>

      <Suspense
        fallback={
          <div className="bg-popover/50 animate-pulse w-full h-[45vh] max-w-5xl mx-auto rounded-lg" />
        }
      >
        <div className="flex items-center justify-center">
          <LanguageaiPlanList />
        </div>
      </Suspense>
        <div className="opacity-50 lg:text-center px-8 text-sm">*Please contact <Link href="/languageai/support">support</Link> for payment outside Indonesia </div>
    </section>
  );
};

export default LanguageaiPlans;
