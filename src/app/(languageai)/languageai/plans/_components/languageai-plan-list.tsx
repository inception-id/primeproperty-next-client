import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyLead } from "@/components/ui/typography/lead";
import { findAllLanguageaiSubscriptionPlans } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import LanguageaiPlanBenefits from "./languageai-plan-benefits";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LanguageAiPlanList = async () => {
  const plans = await findAllLanguageaiSubscriptionPlans();
  const groupedPlans =
    plans.data.length > 0
      ? Object.groupBy(plans.data, (plan) => String(plan.category))
      : {};

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-4">
      <div>
        <TypographyLead>Generic Plans</TypographyLead>
        <Accordion type="multiple">
          {groupedPlans?.generic?.map((plan) => (
            <AccordionItem key={plan.id} value={String(plan.id)}>
              <AccordionTrigger className="capitalize">
                {plan.name} Plan (Rp{" "}
                {Number(plan.initial_price).toLocaleString("id-ID")})
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <LanguageaiPlanBenefits plan={plan} />

                {Number(plan.initial_price) === 0 ? (
                  <Button variant="outline" disabled>
                    Free
                  </Button>
                ) : (
                  <Link
                    href={`/languageai/plans/${plan.id}`}
                    className={cn(buttonVariants())}
                  >
                    Continue payment
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <TypographyLead>Specific Plans</TypographyLead>
        <Accordion type="multiple">
          {groupedPlans?.specific?.map((plan) => (
            <AccordionItem key={plan.id} value={String(plan.id)}>
              <AccordionTrigger className="capitalize">
                {plan.name} Plan (
                {plan.initial_price === "0"
                  ? "Default"
                  : `Rp ${Number(plan.initial_price).toLocaleString("id-ID")}`}
                )
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <LanguageaiPlanBenefits plan={plan} />

                <Link
                  href={`/languageai/plans/${plan.id}`}
                  className={cn(buttonVariants())}
                >
                  Continue payment
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LanguageAiPlanList;
