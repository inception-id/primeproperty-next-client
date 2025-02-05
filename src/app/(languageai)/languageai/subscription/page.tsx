import { fetchCookieToken } from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import LanguageaiPendingPayment from "@/app/(languageai)/languageai/subscription/_components/languageai-pending-payment";
import { Suspense } from "react";
import LanguageaiCurrentPlan from "@/app/(languageai)/languageai/subscription/_components/languageai-current-plan";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language AI Subscriptions | Premium quality",
};

const LanguageaiSubscriptionPage = async () => {
  const accessToken = await fetchCookieToken();
  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <section className="p-4 h-screen overflow-y-auto pb-16">
      <h1 className="font-bold text-2xl">SUBSCRIPTION</h1>
      <p className="opacity-50 mb-4">See your current plan details</p>

      <LanguageaiPendingPayment />

      <Suspense
        fallback={
          <div className="bg-popover/50 animate-pulse w-full max-w-5xl h-[45vh] rounded-lg" />
        }
      >
        <LanguageaiCurrentPlan />
      </Suspense>
    </section>
  );
};

export default LanguageaiSubscriptionPage;
