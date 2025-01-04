"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { TCheckbot } from "@/lib/api/checkbot/createCheckbot";

export const findCheckbotHistory = async (): Promise<
  TApiResponse<TCheckbot[]>
> => {
  try {
    return await fetchApi("/checkbot/history");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
