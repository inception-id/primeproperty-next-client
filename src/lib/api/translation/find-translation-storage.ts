"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";

export const findTranslationStorage = async (): Promise<
  TApiResponse<TTranslationStorage[]>
> => {
  try {
    return await fetchApi("/translation/find-storage");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
