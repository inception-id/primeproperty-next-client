import LanguageaiCurrentFreePlan from "@/app/(languageai)/languageai/subscription/_components/languageai-current-free-plan";
import { findLanguageaiSubscriptionStatistic } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-statistic";
import { findLanguageaiActiveSubscription } from "@/lib/api/languageai-subscriptions/find-languageai-active-subscription";
import { findLanguageaiSubscriptionPlansById } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-plan-by-id";
import LanguageaiCurrentSubscription from "@/app/(languageai)/languageai/subscription/_components/languageai-current-subscription";
import LanguageaiSubscriptionError from "@/app/(languageai)/languageai/subscription/_components/languageai-subscription-error";

const LanguageaiCurrentPlan = async () => {
  const stats = await findLanguageaiSubscriptionStatistic();
  if (stats.data.length > 0) {
    const activeSubscription = await findLanguageaiActiveSubscription();
    if (activeSubscription.data) {
      const userSubscription = await findLanguageaiSubscriptionPlansById(
        activeSubscription.data.languageai_subscription_plan_id,
      );
      return (
        <LanguageaiCurrentSubscription
          planName={userSubscription.data.name}
          subscription={activeSubscription.data}
          stats={stats.data[0]}
        />
      );
    } else {
      const freeSubscription = await findLanguageaiSubscriptionPlansById(1);
      return (
        <LanguageaiCurrentFreePlan
          stats={stats.data[0]}
          freePlan={freeSubscription.data}
        />
      );
    }
  } else {
    return <LanguageaiSubscriptionError />;
  }
};

export default LanguageaiCurrentPlan;
