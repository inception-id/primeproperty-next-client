"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TLanguageaiSubscriptionPlan } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";

export const findLanguageaiSubscriptionPlansById = async (
  id: number,
): Promise<TApiResponse<TLanguageaiSubscriptionPlan>> => {
  try {
    return await fetchApi(`/languageai/subscriptions/plans/${id}`);
  } catch (e) {
    throw e;
  }
};
