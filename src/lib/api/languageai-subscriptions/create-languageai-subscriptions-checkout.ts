"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { ESubscriptionPeriod } from "@/lib/enums/ESubscriptionPeriod";
import { ELanguageaiSubscriptionPaymentStatus } from "@/lib/enums/languageai-subscription-payment-status";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TLanguageaiSubscriptionPayment = {
  id: number;
  user_id: string;
  languageai_subscription_plan_id: number;
  created_at: string;
  updated_at: string;
  expired_at: string;
  amount: string;
  period: ESubscriptionPeriod;
  status: ELanguageaiSubscriptionPaymentStatus;
  doku_request: null | Record<string, any>;
  doku_response: null | Record<string, any>;
  doku_notification: null | Record<string, any>;
};

type TRequest = {
  languageai_subscription_plan_id: number;
  period: ESubscriptionPeriod;
  doku_request: Record<string, any>;
  doku_response: Record<string, any>;
};

export const createLanguageaiSubscriptionsCheckout = async (
  payload: TRequest,
): Promise<TApiResponse<TLanguageaiSubscriptionPayment>> => {
  try {
    return await fetchApi(`/languageai/subscriptions/payment/checkout`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
