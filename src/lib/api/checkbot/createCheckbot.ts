import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TCheckbot = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  instruction: string;
  ai_system_prompt: string;
  content: string;
  completion: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  temperature: number;
};

export type TCreateCheckbotPayload = Omit<
  TCheckbot,
  "id" | "user_id" | "created_at" | "updated_at"
>;
export const createCheckbot = async (
  payload: TCreateCheckbotPayload,
): Promise<TApiResponse<TCheckbot>> => {
  try {
    return await fetchApi("/checkbot/create", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
