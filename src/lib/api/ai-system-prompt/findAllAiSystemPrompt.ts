"use server";

import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";

export type TAiSystemPrompt = {
  id: number;
  created_at: string;
  updated_at: string;
  product_name: string;
  prompt: string;
  name: string;
};

export const findAllAiSystemPrompt = async (
  product_name?: string,
): Promise<TApiResponse<TAiSystemPrompt[]>> => {
  let path = "/ai-system-prompts/find-all";
  if (product_name) {
    path += `?product_name=${product_name}`;
  }

  try {
    return await fetchApi(path, {});
  } catch (e) {
    throw e;
  }
};
