"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";

export const deleteCheckbotStorage= async (checkbotStorageId: number): Promise<
  TApiResponse<TCheckbotStorage>
> => {
  try {
    return await fetchApi(`/checkbot/delete-storage/${checkbotStorageId}`, {method: "DELETE"});
  } catch (e: any) {
    throw e
  }
};
