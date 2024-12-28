import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TCheckbot= {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  instruction: string;
  ai_system_prompt: string;
  content: string;
  completion: string;
  updated_completion: string;
};

type TCreateCheckbotPayload = {
  instruction: string;
  ai_system_prompt: string;
  content: string;
  completion: string;
  updated_completion: string;
};
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
