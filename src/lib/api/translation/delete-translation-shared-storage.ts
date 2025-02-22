"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TSharedTranslationStorage} from "@/lib/api/translation/find-translation-storage-shared-users";

export const deleteTranslationSharedStorage= async (
  sharedStorageId: number,
): Promise<TApiResponse<TSharedTranslationStorage>> => {
  try {
    return await fetchApi(`/translation/storage/shared/${sharedStorageId}`, {
      method: "DELETE",
    });
  } catch (e: any) {
    throw e;
  }
};
