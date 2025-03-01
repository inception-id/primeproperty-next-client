"use server";

import { TApiResponse } from "@/lib/api/ApiResponse";
import { fetchApi } from "@/lib/api/fetchApi";
import { TTarsChatRoom } from "./find-all-tars-chat-rooms";

export const deleteTarsChatRooms = async (
  id: number,
): Promise<TApiResponse<TTarsChatRoom>> => {
  try {
    return await fetchApi(`/tars-chat-rooms/delete/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw e;
  }
};
