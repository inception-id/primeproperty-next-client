import LanguageaiCurrentFreePlan from "@/app/(languageai)/languageai/subscription/_components/languageai-current-free-plan";
import { findLanguageaiSubscriptionStatistic } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-statistic";
import { LuMessageCircleWarning } from "react-icons/lu";
import { findLanguageaiActiveSubscription } from "@/lib/api/languageai-subscriptions/find-languageai-active-subscription";
import { findLanguageaiSubscriptionPlansById } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-plan-by-id";
import LanguageaiCurrentSubscription from "@/app/(languageai)/languageai/subscription/_components/languageai-current-subscription";
import LanguageaiSubscriptionError from "@/app/(languageai)/languageai/subscription/_components/languageai-subscription-error";

const LanguageaiCurrentPlan = async () => {
  try {
    const stats = await findLanguageaiSubscriptionStatistic();
    if (stats.data.length > 0) {
      let plan = null;
      const activeSubscription = await findLanguageaiActiveSubscription();
      if (activeSubscription.data) {
        plan = await findLanguageaiSubscriptionPlansById(
          activeSubscription.data.languageai_subscription_plan_id,
        );
        return (
          <LanguageaiCurrentSubscription
            planName={plan.data.name}
            subscription={activeSubscription.data}
            stats={stats.data[0]}
          />
        );
      }
      plan = await findLanguageaiSubscriptionPlansById(1);
      return (
        <LanguageaiCurrentFreePlan stats={stats.data[0]} freePlan={plan.data} />
      );
    }
    return <LanguageaiSubscriptionError />;
  } catch (e: any) {
    console.error(e.message);
    return <LanguageaiSubscriptionError />;
  }
};

export default LanguageaiCurrentPlan;
