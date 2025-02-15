"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";

export const updateCheckbotStorage = async (
  checkbotStorageId: number,
  payload: Pick<TCheckbotStorage, "title" | "updated_completion">,
): Promise<TApiResponse<TCheckbotStorage>> => {
  try {
    return await fetchApi(`/checkbot/update-storage/${checkbotStorageId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (e: any) {
    throw e;
  }
};
