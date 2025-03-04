"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TLanguageaiSubscription = {
  id: string;
  user_id: string;
  languageai_subscription_plan_id: number;
  languageai_subscription_payment_id: number;
  created_at: string;
  updated_at: string;
  expired_at: string;
  history_limit: string;
  storage_limit: string;
  translation_limit: string;
  checkbot_limit: string;
  text_to_speech_limit: string;
  speech_to_text_limit: string;
};

export type TLanguageaiActiveSubscription = {
  user_id: string;
  plan_name: string;
  expired_at: string;
  history_limit: number;
  storage_limit: number;
  translation_limit: number;
  translation_count: number;
  translation_storage_count: number;
  checkbot_limit: number;
  checkbot_count: number;
  checkbot_storage_count: number;
  speech_to_text_limit: number;
  speech_to_text_count: number;
  speech_to_text_storage_count: number;
  text_to_speech_limit: number;
  text_to_speech_count: number;
  text_to_speech_storage_count: number;
};

export const findLanguageaiActiveSubscription = async (): Promise<
  TApiResponse<TLanguageaiActiveSubscription>
> => {
  try {
    return await fetchApi(`/languageai/subscriptions/active`);
  } catch (e: any) {
    throw e;
  }
};
