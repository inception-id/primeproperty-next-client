"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TSharedTranslationStorage} from "@/lib/api/translation/find-translation-storage-shared-users";

export const createSharedTranslationStorage= async (
  shared_user_email: string,
  translation_storage_id: number,
): Promise<TApiResponse<TSharedTranslationStorage>> => {
  try {
    return await fetchApi(`/translation/storage/shared`, {
      method: "POST",
      body: JSON.stringify({ shared_user_email, translation_storage_id }),
    });
  } catch (e) {
    throw e;
  }
};
