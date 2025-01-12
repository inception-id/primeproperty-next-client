"use server";
import { fetchApi } from "@/lib/api/fetchApi";
import { TApiResponse } from "@/lib/api/ApiResponse";
import {TCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";

export const findCheckbotStorage = async (): Promise<TApiResponse<TCheckbotStorage[]>> => {
  try {
    return await fetchApi("/checkbot/find-storage");
  } catch (e: any) {
    return {
      status: 500,
      data: [],
      message: e.message,
    };
  }
};
