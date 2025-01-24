"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";


export const checkLanguageaiSubscriptionExceedLimit = async (name: ELanguageaSubscriptionLimit): Promise<TApiResponse<boolean>> => {
  try {
    return await fetchApi(`/languageai/subscriptions/limit?name=${name}`);
  } catch (e) {
    throw e;
  }
};
