import type { Metadata } from "next";
import Link from "next/link";
import { TypographyH1 } from "@/components/ui/typography/typography-h1";
import { TypographyLarge } from "@/components/ui/typography/large";
import { TypographySmall } from "@/components/ui/typography/small";
import { typographyMutedClassName } from "@/components/ui/typography/muted";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import LanguageAiPlanList from "./_components/languageai-plan-list";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Language AI plans | Free | Premium quality",
  description:
    "Select your plans starting with Rp 0, all comes with a quality.",
  keywords: "Language AI, Plans, Subscriptions",
};

const LanguageaiPlans = () => {
  return (
    <div className="p-4 overflow-y-auto h-screen flex-1 flex flex-col gap-4">
      <div>
        <TypographyH1 className="text-center">Plans & Pricing</TypographyH1>
        <TypographyLarge className="text-center">
          &quot;Quality is remembered long after price is forgotten.&quot;
        </TypographyLarge>

        <TypographySmall className="text-center mb-4">Gucci</TypographySmall>
      </div>

      <Suspense>
        <LanguageAiPlanList />
      </Suspense>
      <div className={cn(typographyMutedClassName, "text-center")}>
        Email{" "}
        <Link href="/languageai/support" className="underline">
          support
        </Link>{" "}
        for payment outside Indonesia{" "}
      </div>
    </div>
  );
};

export default LanguageaiPlans;
