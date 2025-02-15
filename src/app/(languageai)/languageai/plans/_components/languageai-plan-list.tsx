import { findAllLanguageaiSubscriptionPlans } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuCircleCheck } from "react-icons/lu";
import LanguageaiPlanError from "@/app/(languageai)/languageai/plans/_components/languageai-plan-error";

const LanguageaiPlanList = async () => {
  const plans = await findAllLanguageaiSubscriptionPlans();

  if (!plans || plans.data.length === 0) {
    return <LanguageaiPlanError />;
  }

  return (
    <div className="lg:grid grid-cols-3 lg:max-w-5xl lg:gap-4">
      {plans.data.map((plan) => (
        <div key={plan.id} className="border rounded-lg p-4 mb-4 shadow">
          <h3 className="font-semibold text-2xl capitalize mb-4">
            {plan.name}
          </h3>
          {plan.discounted_price ? (
            <div className="flex items-center gap-2 mb-4">
              <s className="opacity-50">
                Rp {Number(plan.initial_price).toLocaleString("id-ID")}
              </s>
              <span className="bg-primary text-primary-foreground rounded-lg py-1 px-2 font-semibold">
                {(((Number(plan.initial_price) - Number(plan.discounted_price)) /
                  Number(plan.initial_price)) *
                  100).toFixed()}
                % Discount
              </span>
            </div>
          ) : (
            <div className="mb-4 opacity-50 py-1 hidden lg:block">
              Always free
            </div>
          )}
          <div className="mb-6 flex items-end gap-1">
            <span className="text-3xl font-bold">
              Rp {Number(plan.discounted_price).toLocaleString("id-ID")}
            </span>
            <span className="text-lg">/month</span>
          </div>

          {Number(plan.initial_price) === 0 ? (
            <Button variant="outline" className="w-full text-lg mb-8" disabled>
              Free
            </Button>
          ) : (
            <Link
              href={`/languageai/plans/${plan.id}`}
              className={cn(buttonVariants(), "w-full text-lg mb-8")}
            >
              Get started
            </Link>
          )}

          <div className="mb-4 font-semibold">
            Highest Qualities, with everything:{" "}
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              <span>
                {plan.storage_limit
                  ? `Up to ${plan.storage_limit} audio and text storage`
                  : "Unlimited audio and text storage"}
              </span>
            </li>
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              <span>
                {plan.history_limit
                  ? `Up to ${plan.history_limit} latest history`
                  : "Unlimited history"}
              </span>
            </li>
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              Translation:{" "}
              {plan.translation_limit
                ? `${plan.translation_limit}x / month`
                : "Unlimited"}
            </li>
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              Checkbot:{" "}
              {plan.checkbot_limit
                ? `${plan.checkbot_limit}x / month`
                : "Unlimited"}
            </li>
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              Text to Speech :{" "}
              {plan.text_to_speech_limit
                ? `${plan.text_to_speech_limit}x / month`
                : "Unlimited"}
            </li>
            <li className="flex items-center gap-1">
              <LuCircleCheck />
              Speech to Text :{" "}
              {plan.speech_to_text_limit
                ? `${plan.speech_to_text_limit}x / month`
                : "Unlimited"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LanguageaiPlanList;
