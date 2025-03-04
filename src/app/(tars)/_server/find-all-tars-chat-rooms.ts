"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";

export type TTarsChatRoom = {
  id: number;
  user_id: string;
  ai_model_id: number;
  created_at: string;
  updated_at: string;
  title: string | null;
  is_temporary: boolean;
};

export const findAllTarsChatRooms = async (): Promise<
  TApiResponse<TTarsChatRoom[]>
> => {
  try {
    return await fetchApi("/tars-chat-rooms/find-all");
  } catch (error: any) {
    return {
      status: 500,
      data: [],
      message: error.message,
    };
  }
};
