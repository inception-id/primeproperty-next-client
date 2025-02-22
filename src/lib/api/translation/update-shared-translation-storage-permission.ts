"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {LanguageeAiStoragePermission} from "@/lib/enums/languageeai-storage-permission";
import {TSharedTranslationStorage} from "@/lib/api/translation/find-translation-storage-shared-users";

export const updateSharedTranslationStoragePermission= async (
    sharedStorageId: number,
    permission: LanguageeAiStoragePermission
): Promise<TApiResponse<TSharedTranslationStorage>> => {
  try {
    return await fetchApi(`/translation/storage/shared/permission/${sharedStorageId}`, {
      method: "PUT",
      body: JSON.stringify({permission}),
    });
  } catch (e: any) {
    throw e;
  }
};
