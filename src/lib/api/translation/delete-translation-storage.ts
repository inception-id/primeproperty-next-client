"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";

export const deleteTranslationStorage= async (translationId: number): Promise<
  TApiResponse<TTranslationStorage[]>
> => {
  try {
    return await fetchApi(`/translation/delete-storage/${translationId}`, {method: "DELETE"});
  } catch (e: any) {
    throw e
  }
};
