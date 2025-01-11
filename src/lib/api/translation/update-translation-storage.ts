"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";

export const updateTranslationStorage= async (translationId: number, updated_completion: string): Promise<
  TApiResponse<TTranslationStorage[]>
> => {
  try {
    return await fetchApi(`/translation/update-storage/${translationId}`, {method: "PUT", body: JSON.stringify({updated_completion})});
  } catch (e: any) {
    throw e
  }
};
