import { cookies } from "next/headers";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import { Suspense } from "react";
import LanguageaiSubscriptionPlansCheckout from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-checkout";
import LanguageaiSubscriptionPlansCheckoutFallback from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-checkout-fallback";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {LuChevronLeft} from "react-icons/lu";

type TLanguageaiPlansCheckoutPageProps = {
  params: {
    id: string | undefined;
  };
};

const LanguageaiPlansCheckoutPage = ({
  params,
}: TLanguageaiPlansCheckoutPageProps) => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl mb-4 lg:my-8 lg:text-center">
        CHECKOUT
      </h1>

      <Suspense fallback={<LanguageaiSubscriptionPlansCheckoutFallback />}>
        <LanguageaiSubscriptionPlansCheckout id={params.id} />
      </Suspense>
    </section>
  );
};

export default LanguageaiPlansCheckoutPage;
