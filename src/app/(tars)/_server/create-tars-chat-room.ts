"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTarsChatRoom } from "./find-all-tars-chat-rooms";

export type TTarsChatMessage = {
  id: number;
  tars_chat_room_id: number;
  role: string;
  content: string;
  created_at: string;
  updated_at: string;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
};

type TCreateTarsChatRoomPayload = {
  room: Pick<TTarsChatRoom, "ai_model_id" | "title">;
  messages: Pick<TTarsChatMessage, "role" | "content">[];
};

export const createTarsChatRoom = async (
  payload: TCreateTarsChatRoomPayload,
): Promise<TApiResponse<TTarsChatRoom>> => {
  try {
    return await fetchApi(`/tars-chat-rooms/create`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
