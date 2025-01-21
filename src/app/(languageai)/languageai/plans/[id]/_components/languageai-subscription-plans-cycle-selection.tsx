"use client";
import { TLanguageaiSubscriptionPlan } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import { useState } from "react";
import { ESubscriptionPeriod } from "@/lib/enums/ESubscriptionPeriod";
import LanguageaiSubscriptionPlansPeriodButton from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-period-button";
import LanguageaiSubscriptionPlansCheckoutBtn from "@/app/(languageai)/languageai/plans/[id]/_components/languageai-subscription-plans-checkout-btn";

type LanguageaiSubscriptionPlansCycleSelectionProps = {
  subscriptionPlan: TLanguageaiSubscriptionPlan;
};

const LanguageaiSubscriptionPlansCycleSelection = ({
  subscriptionPlan,
}: LanguageaiSubscriptionPlansCycleSelectionProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<ESubscriptionPeriod>(
    ESubscriptionPeriod.OneYear,
  );

  return (
    <div className="lg:max-w-md mx-auto">
      <div className="text-lg font-semibold">
        Select your subscription period
      </div>
      <div className="mb-4 opacity-50 text-sm">*VAT Free</div>

      <div className="mb-4">
        <LanguageaiSubscriptionPlansPeriodButton
          isActive={selectedPeriod === ESubscriptionPeriod.OneYear}
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.OneYear)}
          subscriptionPlan={subscriptionPlan}
          period={ESubscriptionPeriod.OneYear}
        />
        <LanguageaiSubscriptionPlansPeriodButton
          isActive={selectedPeriod === ESubscriptionPeriod.ThreeMonths}
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.ThreeMonths)}
          subscriptionPlan={subscriptionPlan}
          period={ESubscriptionPeriod.ThreeMonths}
        />
        <LanguageaiSubscriptionPlansPeriodButton
          isActive={selectedPeriod === ESubscriptionPeriod.OneMonth}
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.OneMonth)}
          subscriptionPlan={subscriptionPlan}
          period={ESubscriptionPeriod.OneMonth}
        />
      </div>

      <LanguageaiSubscriptionPlansCheckoutBtn
        planId={subscriptionPlan.id}
        planPrice={Number(subscriptionPlan.discounted_price)}
        period={selectedPeriod}
      />
    </div>
  );
};

export default LanguageaiSubscriptionPlansCycleSelection;
