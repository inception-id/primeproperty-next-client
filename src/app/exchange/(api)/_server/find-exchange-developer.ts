"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TExchangeDeveloper = {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  api_cost: number;
  balance: number;
};

export const findExchangeDeveloper = async (): Promise<
  TApiResponse<TExchangeDeveloper>
> => {
  try {
    return await fetchApi("/exchange/developers/find");
  } catch (error) {
    throw error;
  }
};
