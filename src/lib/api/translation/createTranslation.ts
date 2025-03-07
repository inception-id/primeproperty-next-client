import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TTranslation = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  ai_system_prompt: string;
  content_language: string;
  target_language: string;
  content: string;
  completion: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  temperature: number;
};

export type TCreateTranslationPayload = Omit<
  TTranslation,
  "id" | "user_id" | "created_at" | "updated_at"
>;

export const createTranslation = async (
  payload: TCreateTranslationPayload,
): Promise<TApiResponse<TTranslation>> => {
  try {
    return await fetchApi("/translation/create", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
