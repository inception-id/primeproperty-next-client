import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import { Suspense } from "react";
import LanguageaiSubscriptionPlansCheckout from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-checkout";
import { fetchCookieToken } from "@/lib/fetchCookieToken";
import { TypographyLarge } from "@/components/ui/typography/large";
import { TypographySmall } from "@/components/ui/typography/small";
import { TypographyMuted } from "@/components/ui/typography/muted";

type TLanguageaiPlansCheckoutPageProps = {
  params: {
    id: string | undefined;
  };
};

const LanguageaiPlansCheckoutPage = async ({
  params,
}: TLanguageaiPlansCheckoutPageProps) => {
  const accessToken = await fetchCookieToken();

  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <div className="p-4 flex-1">
      <TypographyLarge className="text-center mb-4">CHECKOUT</TypographyLarge>
      <div className="md:max-w-lg mx-auto mb-4">
        <TypographySmall>Select your subscription period</TypographySmall>
        <TypographyMuted>VAT Free</TypographyMuted>
      </div>
      <Suspense>
        <LanguageaiSubscriptionPlansCheckout id={params.id} />
      </Suspense>
    </div>
  );
};

export default LanguageaiPlansCheckoutPage;
