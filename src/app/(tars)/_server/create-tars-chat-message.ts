"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTarsChatMessage } from "./create-tars-chat-room";

export const createTarsChatMessage = async (
  payload: Pick<TTarsChatMessage, "content" | "role" | "tars_chat_room_id"> & {
    input_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
  },
): Promise<TApiResponse<TTarsChatMessage>> => {
  try {
    return await fetchApi(`/tars-chat-messages/create`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
