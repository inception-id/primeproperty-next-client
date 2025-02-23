"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { LanguageeAiStoragePermission } from "@/lib/enums/languageeai-storage-permission";

export type TTranslationSharedStorage = {
  shared_storage_id: number;
  storage_id: number;
  owner_id: string;
  owner_email: string;
  permission: LanguageeAiStoragePermission;
  created_at: string;
  updated_at: string;
  content_language: string;
  target_language: string;
  title: string | null;
  content: string;
  updated_completion: string;
};

export const findTranslationSharedStorage = async (): Promise<
  TApiResponse<TTranslationSharedStorage[]>
> => {
  try {
    return await fetchApi("/translation/storage/shared");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
