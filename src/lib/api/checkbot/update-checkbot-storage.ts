"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";

export const updateCheckbotStorage = async (
  checkbotStorageId: number,
  updated_completion: string,
): Promise<TApiResponse<TCheckbotStorage>> => {
  try {
    return await fetchApi(`/checkbot/update-storage/${checkbotStorageId}`, {
      method: "PUT",
      body: JSON.stringify({ updated_completion }),
    });
  } catch (e: any) {
    throw e;
  }
};
