"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";

export const findCheckbotHistory = async (
  init?: RequestInit,
): Promise<TApiResponse<TCheckbot[]>> => {
  try {
    return await fetchApi("/checkbot/history", init);
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
