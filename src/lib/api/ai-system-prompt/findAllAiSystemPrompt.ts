"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TAiSystemPrompt } from "@/lib/api/ai-system-prompt/createAiSystemPrompt";

export const findAllAiSystemPrompt = async (): Promise<
  TApiResponse<TAiSystemPrompt[]>
> => {
  try {
    return await fetchApi(`/ai-system-prompts/find-all`, {});
  } catch (e) {
    throw e;
  }
};
