import { findLanguageaiSubscriptionPlansById } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-plan-by-id";
import LanguageaiSubscriptionPlansCycleSelection from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-cycle-selection";

type LanguageaiSubscriptionPlansCheckoutProps = {
  id: string | undefined;
};

const LanguageaiSubscriptionPlansCheckout = async ({
  id,
}: LanguageaiSubscriptionPlansCheckoutProps) => {
  const plan = await findLanguageaiSubscriptionPlansById(Number(id));
  return (
    <LanguageaiSubscriptionPlansCycleSelection subscriptionPlan={plan.data} />
  );
};

export default LanguageaiSubscriptionPlansCheckout;
