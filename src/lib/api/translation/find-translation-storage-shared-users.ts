"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { LanguageeAiStoragePermission } from "@/lib/enums/languageeai-storage-permission";

export type TSharedTranslationStorage = {
  id: number;
  user_id: string;
  shared_user_id: string | null;
  translation_storage_id: number;
  created_at: string;
  updated_at: string;
  user_email: string;
  shared_user_email: string;
  permission: LanguageeAiStoragePermission;
};

export const findTranslationStorageSharedUsers = async (
  storageId: number,
): Promise<TApiResponse<TSharedTranslationStorage[]>> => {
  try {
    return await fetchApi(`/translation/storage/shared/users/${storageId}`);
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
