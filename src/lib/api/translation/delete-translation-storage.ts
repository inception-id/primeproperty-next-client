"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";

export const deleteTranslationStorage = async (
  checkbotId: number,
): Promise<TApiResponse<TCheckbotStorage>> => {
  try {
    return await fetchApi(`/checkbot/delete-storage/${checkbotId}`, {
      method: "DELETE",
    });
  } catch (e: any) {
    throw e;
  }
};
