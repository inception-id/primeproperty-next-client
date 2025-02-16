import { findAllLanguageaiSubscriptionPlans } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import LanguageaiPlanError from "@/app/(languageai)/languageai/plans/_components/languageai-plan-error";
import LanguageaiPlanDiscountTag from "@/app/(languageai)/languageai/plans/_components/languageai-plan-discount-tag";
import LanguageaiPlanBenefits from "@/app/(languageai)/languageai/plans/_components/languageai-plan-benefits";

const LanguageaiPlanList = async () => {
  const plans = await findAllLanguageaiSubscriptionPlans();

  if (!plans || plans.data.length === 0) {
    return <LanguageaiPlanError />;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:max-w-5xl lg:mx-auto mb-4">
      {plans.data.map((plan) => (
          <div key={plan.id} className="border rounded-lg shadow p-4">
            <h3 className="font-semibold text-2xl capitalize">
              {plan.name}
            </h3>
            <h4 className="mb-4 opacity-75">
              {plan.description}
            </h4>
            {plan.discounted_price ? (
                <LanguageaiPlanDiscountTag initialPrice={plan.initial_price} discountedPrice={plan.discounted_price} />
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

            <LanguageaiPlanBenefits plan={plan} />
          </div>
      ))}
    </div>
  );
};

export default LanguageaiPlanList;
