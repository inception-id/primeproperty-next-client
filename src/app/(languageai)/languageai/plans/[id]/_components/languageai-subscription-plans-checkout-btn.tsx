"use client";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { createDokuPaymentLink } from "@/lib/doku/createDokuPaymentLink";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { createLanguageaiSubscriptionsCheckout } from "@/lib/api/languageai-subscriptions/create-languageai-subscriptions-checkout";
import {
  convertSubscriptionPeriodToMonth,
  ESubscriptionPeriod,
} from "@/lib/enums/ESubscriptionPeriod";

type TLanguageaiSubscriptionPlansChekcoutBtnProps = {
  planId: number;
  planPrice: number;
  period: ESubscriptionPeriod;
};

const LanguageaiSubscriptionPlansCheckoutBtn = ({
  planId,
  planPrice,
  period,
}: TLanguageaiSubscriptionPlansChekcoutBtnProps) => {
  console.log(planPrice);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);

    try {
      const month = convertSubscriptionPeriodToMonth(period);
      const amount = planPrice * month;
      const doku = await createDokuPaymentLink(amount);
      const checkoutPayload = {
        languageai_subscription_plan_id: planId,
        period,
        invoice_id: doku.requestId,
        doku_request: doku.requestBody,
        doku_response: doku.responseBody,
      };
      const checkout =
        await createLanguageaiSubscriptionsCheckout(checkoutPayload);
      if (checkout.data.doku_response) {
        window.location.href = checkout.data.doku_response.response.payment.url;
      } else {
        toast.error("Fail to checkout, please try again");
      }
    } catch (e: any) {
      console.error(e.message);
      toast.error("Fail to checkout, please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/languageai/plans"
        className={buttonVariants({ variant: "outline" })}
      >
        Back
      </Link>

      <Button
        onClick={handleClick}
        disabled={isLoading}
        className={cn(isLoading && "animate-bounce")}
      >
        {isLoading ? "Processing..." : "Checkout"}
      </Button>
    </div>
  );
};

export default LanguageaiSubscriptionPlansCheckoutBtn;
