import { findLanguageaiSubscriptionPlansById } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-plan-by-id";
import LanguageaiSubscriptionPlansCycleSelection from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-cycle-selection";
import LanguageaiPlanError from "@/app/(languageai)/languageai/plans/_components/languageai-plan-error";

type LanguageaiSubscriptionPlansCheckoutProps = {
  id: string | undefined;
};

const LanguageaiSubscriptionPlansCheckout = async ({
  id,
}: LanguageaiSubscriptionPlansCheckoutProps) => {
  try {
    const plan = await findLanguageaiSubscriptionPlansById(Number(id));
    if (!plan.data) {
      return <LanguageaiPlanError />;
    }
    return (
      <LanguageaiSubscriptionPlansCycleSelection subscriptionPlan={plan.data} />
    );
  } catch (e: any) {
    console.error(e.message);
    return <LanguageaiPlanError />;
  }
};

export default LanguageaiSubscriptionPlansCheckout;
