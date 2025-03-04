"use server";
import { TApiResponse } from "../ApiResponse";
import { fetchApi } from "../fetchApi";

export type TAiModel = {
  id: number;
  created_at: string;
  updated_at: string;
  parent: string;
  label: string;
  value: string;
};

export const findAllAiModels = async (): Promise<TApiResponse<TAiModel[]>> => {
  try {
    return await fetchApi("/ai-models/find-all", {});
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
