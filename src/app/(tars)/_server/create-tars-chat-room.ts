"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTarsChatRoom } from "./find-all-tars-chat-rooms";

export const createTarsChatRoom = async (
  payload: Pick<TTarsChatRoom, "ai_model_id" | "title">,
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
