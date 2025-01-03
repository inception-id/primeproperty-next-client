"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import { TApiResponse } from "@/lib/api/ApiResponse";

export const findTranslationHistory = async (): Promise<
  TApiResponse<TTranslation[]>
> => {
  try {
    return await fetchApi("/translation/history");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
