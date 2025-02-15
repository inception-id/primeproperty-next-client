"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { ELanguageAiStorageVisibility } from "@/lib/enums/languageai-storage-visibility";

export type TCheckbotStorage = {
  id: number;
  user_id: string;
  checkbot_id: number;
  created_at: string;
  updated_at: string;
  instruction: string;
  content: string;
  updated_completion: string;
  title: string | null;
  visibility: ELanguageAiStorageVisibility;
};

export const createCheckbotStorage = async (
  checkbot_id: number,
  payload: Pick<TCheckbotStorage, "title" | "updated_completion">,
): Promise<TApiResponse<TCheckbotStorage>> => {
  try {
    return await fetchApi("/checkbot/create-storage", {
      method: "POST",
      body: JSON.stringify({ checkbot_id, ...payload }),
    });
  } catch (e) {
    throw e;
  }
};
