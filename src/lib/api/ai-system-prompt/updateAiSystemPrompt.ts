"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

type TUpdatePayload = {
  product_name?: string;
  name?: string;
  prompt?: string;
}

export const updateAiSystemPrompt= async (
  id: number, payload: TUpdatePayload
): Promise<TApiResponse<TAiSystemPrompt>> => {
  try {
    return await fetchApi(`/ai-system-prompts/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
