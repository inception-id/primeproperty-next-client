"use client";
import { TLanguageaiSubscriptionPlan } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import { getDatePlusOneYear } from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusOneYear";
import { getDatePlusThreeMonths } from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusThreeMonths";
import { getDatePlusOneMonth } from "@/app/(languageai)/languageai/plans/[id]/_lib/getDatePlusOneMonth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ESubscriptionPeriod } from "@/lib/enums/ESubscriptionPeriod";
import { cn } from "@/lib/utils";

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
    <div className="lg:max-w-xl mx-auto">
      <div className="text-lg font-semibold">
        Select your subscription period
      </div>
      <div className="mb-4 opacity-50 text-sm">*VAT Free</div>

      <div className="mb-4">
        <button
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.OneYear)}
          className={cn("flex gap-4 p-4 border-t border-primary w-full", {
            "border rounded-lg bg-secondary":
              selectedPeriod === ESubscriptionPeriod.OneYear,
          })}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-full border-2 border-primary mt-2",
              selectedPeriod === ESubscriptionPeriod.OneYear && "border-4",
            )}
          />
          <div className="flex flex-col items-start">
            <div className="text-lg font-bold">One year</div>
            <div className="opacity-75 flex gap-2">
              <span>
                Rp
                {Number(
                  Number(subscriptionPlan?.discounted_price) * 12,
                ).toLocaleString("id-ID")}
              </span>
              <s className="opacity-50">
                Rp
                {Number(
                  Number(subscriptionPlan?.initial_price) * 12,
                ).toLocaleString("id-ID")}
              </s>
            </div>
            <div className="opacity-50">Expires in {getDatePlusOneYear()}</div>
          </div>
        </button>
        <button
          className={cn("flex gap-4 p-4 border-t border-primary w-full", {
            "border rounded-lg bg-secondary":
              selectedPeriod === ESubscriptionPeriod.ThreeMonths,
          })}
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.ThreeMonths)}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-full border-2 border-primary mt-2",
              selectedPeriod === ESubscriptionPeriod.ThreeMonths && "border-4",
            )}
          />
          <div className="flex flex-col items-start">
            <div className="text-lg font-bold">Three Months</div>
            <div className="opacity-75 flex gap-2">
              <span>
                Rp
                {Number(
                  Number(subscriptionPlan?.discounted_price) * 3,
                ).toLocaleString("id-ID")}
              </span>
              <s className="opacity-50">
                Rp
                {Number(
                  Number(subscriptionPlan?.initial_price) * 3,
                ).toLocaleString("id-ID")}
              </s>
            </div>
            <div className="opacity-50">
              Expires in {getDatePlusThreeMonths()}
            </div>
          </div>
        </button>
        <button
          className={cn("flex gap-4 p-4 border-y border-primary w-full", {
            "border rounded-lg bg-secondary":
              selectedPeriod === ESubscriptionPeriod.OneMonth,
          })}
          onClick={() => setSelectedPeriod(ESubscriptionPeriod.OneMonth)}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-full border-2 border-primary mt-2",
              selectedPeriod === ESubscriptionPeriod.OneMonth && "border-4",
            )}
          />
          <div className="flex flex-col items-start">
            <div className="text-lg font-bold">One Month</div>
            <div className="opacity-75 flex gap-2">
              <span>
                Rp
                {Number(subscriptionPlan?.discounted_price).toLocaleString(
                  "id-ID",
                )}
              </span>
              <s className="opacity-50">
                Rp
                {Number(subscriptionPlan?.initial_price).toLocaleString(
                  "id-ID",
                )}
              </s>
            </div>
            <div className="opacity-50">Expires in {getDatePlusOneMonth()}</div>
          </div>
        </button>
      </div>

      <Button>Checkout</Button>
    </div>
  );
};

export default LanguageaiSubscriptionPlansCycleSelection;
