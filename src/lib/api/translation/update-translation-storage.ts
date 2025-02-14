"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";

export const updateTranslationStorage = async (
  translationId: number,
  payload: Pick<TTranslationStorage, "title" | "updated_completion">,
): Promise<TApiResponse<TTranslationStorage>> => {
  try {
    return await fetchApi(`/translation/update-storage/${translationId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (e: any) {
    throw e;
  }
};
