"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TLanguageaiSubscriptionPayment } from "@/lib/api/languageai-subscriptions/create-languageai-subscriptions-checkout";

export const findLanguageaiSubscriptionPendingPayment = async (): Promise<
  TApiResponse<TLanguageaiSubscriptionPayment | null>
> => {
  try {
    return await fetchApi(`/languageai/subscriptions/payment/pending`);
  } catch (e: any) {
    return {
      status: 500,
      data: null,
      message: e.message,
    }
  }
};
